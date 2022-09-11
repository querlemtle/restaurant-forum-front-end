<template>
  <Spinner v-if="isLoading" />
  <table
    v-else
    class="table"
  >
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id }}"
            class="btn btn-link"
          >
            Show
          </router-link>

          <router-link
            :to="{ name: 'admin-restaurant-edit', params: { id: restaurant.id }}"
            class="btn btn-link"
          >
            Edit
          </router-link>

          <button
            type="button"
            class="btn btn-link"
            :disabled="isProcessing"
            @click.prevent.stop="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  components: {
    Spinner
  },
  data () {
    return {
      restaurants: [],
      isLoading: true,
      isProcessing: false
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    async fetchRestaurants () {
      try {
        const { data } = await adminAPI.restaurants.get()
        this.restaurants = data.restaurants
        this.isLoading = false        
      } catch (error) {
        this.isLoading = false
        console.error(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async deleteRestaurant (restaurantId) {
      try {
        this.isProcessing = true        
        const { data } = await adminAPI.restaurants.delete({restaurantId})
        if(data.status === 'error') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId)
        this.isProcessing = false        
      } catch (error) {
        this.isProcessing = false
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法刪除餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>