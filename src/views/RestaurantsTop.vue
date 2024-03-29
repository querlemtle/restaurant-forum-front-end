<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <Spinner v-if="isLoading" />
    <div 
      v-else
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link :to="{ name: 'restaurant', params: { id: restaurant.id }}">
            <img
              class="card-img"
              :src="restaurant.image | emptyImage"
            >
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id }}"
              class="btn btn-primary mr-2"
            >Show</router-link>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import { emptyImageFilter } from './../utils/mixins'
import restaurantsAPI from './../apis/restaurants'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  name: 'RestaurantsTop',
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
    Spinner
  },
  data () {
    return {
      restaurants: [],
      isLoading: true
    }
  },
  created() {
    this.fetchTopRestaurants()
  },
  methods: {
    async fetchTopRestaurants () {
      try {
        const response = await restaurantsAPI.getTopRestaurants()
        this.restaurants = response.data.restaurants
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.error(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得人氣餐廳，請稍後再試'
        })
      }
    },
    async addFavorite (restaurantId) {
      const { data } = await usersAPI.addFavorite({restaurantId})
      if(data.status === 'error') {
        throw new Error(data.message)
      }
      this.restaurants = this.restaurants.map(restaurant => {
        if(restaurant.id !== restaurantId) {
          return restaurant
        } else {
          return {
            ...restaurant,
            isFavorited: true,
            FavoriteCount: ++restaurant.FavoriteCount
          }
        }
      })
    },
    async deleteFavorite (restaurantId) {
      const { data } = await usersAPI.deleteFavorite({restaurantId})
      if(data.status === 'error') {
        throw new Error(data.message)
      }
      this.restaurants = this.restaurants.map(restaurant => {
        if(restaurant.id !== restaurantId) {
          return restaurant
        } else {
          return {
            ...restaurant,
            isFavorited: false,
            FavoriteCount: --restaurant.FavoriteCount
          }
        }
      })
    }
  }
}
</script>