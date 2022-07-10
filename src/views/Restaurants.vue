<template>
  <div class="container py-5">
    <NavTabs />
    
    <!-- RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

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
      :current-page="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
      :category-id="categoryId"
     />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from './../components/RestaurantsNavPills'
import RestaurantsPagination from './../components/RestaurantsPagination'

const dummyData = {
  "restaurants": [
        {
            "id": 1,
            "name": "Wellington Larson",
            "tel": "878.252.4713 x35160",
            "address": "092 Lindsay Hollow",
            "opening_hours": "08:00",
            "description": "Voluptatem ut excepturi quo dolore vitae consequat",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.751364717356931",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Tess Mohr PhD",
            "tel": "(812) 169-0812 x3246",
            "address": "789 Elsie Flats",
            "opening_hours": "08:00",
            "description": "Aperiam qui est numquam. Tempora natus consequuntu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.7741883820425",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Rosamond Deckow",
            "tel": "1-513-150-0024 x18954",
            "address": "2249 Kshlerin Plaza",
            "opening_hours": "08:00",
            "description": "Aut tempore maiores. Dolorum itaque animi. Minima ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.77096908012699",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Alaina Grady",
            "tel": "(255) 886-4839 x3668",
            "address": "320 Marlene Passage",
            "opening_hours": "08:00",
            "description": "Sequi iure eaque rerum quia quis sit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.698677109886265",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Kendall Hodkiewicz",
            "tel": "487-218-7410 x64559",
            "address": "9430 Rosenbaum Fork",
            "opening_hours": "08:00",
            "description": "Unde et voluptate necessitatibus quaerat provident",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=33.44409559314585",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Desmond Wiza",
            "tel": "209-485-8454 x145",
            "address": "983 Kelsi View",
            "opening_hours": "08:00",
            "description": "Nihil voluptatem odit maiores magni repudiandae do",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.29075183471862",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Rollin Cruickshank",
            "tel": "351.004.7774 x97020",
            "address": "6911 Lorenz Gateway",
            "opening_hours": "08:00",
            "description": "Et aut voluptatibus nesciunt cum alias eaque eos v",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.25497901258983",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Rosemarie Schroeder",
            "tel": "159-454-8593 x2751",
            "address": "7776 Davonte Ridge",
            "opening_hours": "08:00",
            "description": "Rerum delectus cupiditate voluptate molestiae. Ius",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.84882290664675",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Vallie Howell",
            "tel": "(269) 670-8337 x034",
            "address": "10120 Rowe Stravenue",
            "opening_hours": "08:00",
            "description": "Magni vitae doloribus aliquid.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.12949035125646",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Eli Lockman",
            "tel": "313.053.5649 x98354",
            "address": "610 Roma Light",
            "opening_hours": "08:00",
            "description": "Et aut molestiae maxime quia quam dolor ut impedit",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.599477501120845",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: -1,
      previousPage: -1,
      nextPage: -1
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
      fetchRestaurants() {
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next
        } = dummyData
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
      }
    }
}
</script>