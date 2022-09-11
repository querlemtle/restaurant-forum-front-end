<template>
  <div class="container py-5">
    <NavTabs />
    <!-- RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />
    <Spinner v-if="isLoading" />
    <template v-else>
      <div class="row">
        <!-- RestaurantCard -->
        <RestaurantCard 
          v-for="restaurant in restaurants" 
          :key="restaurant.id"
          :initial-restaurant="restaurant"
        />
      </div>

      <!-- RestaurantsPagination -->
      <RestaurantsPagination
        v-if="totalPage.length > 1"
        :current-page="currentPage"
        :total-page="totalPage"
        :previous-page="previousPage"
        :next-page="nextPage"
        :category-id="categoryId"
      />
    </template>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from './../components/RestaurantsNavPills'
import RestaurantsPagination from './../components/RestaurantsPagination'
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: -1,
      previousPage: -1,
      nextPage: -1,
      isLoading: true
    }
  },
  created() {
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
  },
  beforeRouteUpdate(to, from, next){
    // 預設值空字串，避免把 undefined 傳入 fetchRestaurants
    const { page = '', categoryId = '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  },
  methods: {
      async fetchRestaurants({
        queryPage,
        queryCategoryId
      }) {
        try {
          const response = await restaurantsAPI.getRestaurants({
            page: queryPage,
            categoryId: queryCategoryId
          })

            const { restaurants, categories, categoryId, page, totalPage, prev, next } = response.data

            this.restaurants = restaurants
            this.categories = categories
            this.categoryId = categoryId
            this.currentPage = page
            this.totalPage = totalPage
            this.previousPage = prev
            this.nextPage = next
            this.isLoading = false
        } catch(error) {
          this.isLoading = false
          console.error(error)
          Toast.fire({
            icon: 'error',
            title: '無法取得餐廳資料，請稍後再試'
          })
        }
      }
    }
}
</script>