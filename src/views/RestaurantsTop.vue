<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
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
              @click.stop.prevent="deleteFavorite(restaurant)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant)"
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

const dummyData = {
    "restaurants": [
        {
            "id": 50,
            "name": "Donnell Roberts",
            "tel": "060-184-7620",
            "address": "03450 O'Kon Mountains",
            "opening_hours": "08:00",
            "description": "Tempore dolores et et similique qui.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.58193436081926",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Vada Gottlieb",
            "tel": "294-175-6846",
            "address": "48800 Gibson Light",
            "opening_hours": "08:00",
            "description": "Labore expedita blanditiis est earum tenetur animi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.58001227245593",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Mrs. Meta Breitenberg",
            "tel": "(357) 644-8903",
            "address": "2549 Brenna Village",
            "opening_hours": "08:00",
            "description": "Minima odit aliquid voluptatem tenetur suscipit cu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.56487958594363",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Jaiden Waters",
            "tel": "(931) 346-9719",
            "address": "1934 Nathanael View",
            "opening_hours": "08:00",
            "description": "Sed explicabo sit rerum porro id aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.10097365431382",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Jasper Cole",
            "tel": "449-277-8027",
            "address": "83103 Laurel Walks",
            "opening_hours": "08:00",
            "description": "Autem odit rerum voluptates rerum eligendi eum off",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.3586593814396",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Maryjane Bode",
            "tel": "872.768.7888",
            "address": "2729 Onie Station",
            "opening_hours": "08:00",
            "description": "Ex nihil tempore perferendis eaque corporis aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.69953256685837",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Wiley Carroll",
            "tel": "(036) 247-4514 x408",
            "address": "327 Schoen Hills",
            "opening_hours": "08:00",
            "description": "Eum accusamus dicta ea vel officiis natus. Non rec",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.01024471895738",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Ezekiel Robel",
            "tel": "(502) 502-9031",
            "address": "73895 Haag Isle",
            "opening_hours": "08:00",
            "description": "Qui illo autem neque voluptatem quam. Optio est vo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.5798038894587",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Issac Stracke DVM",
            "tel": "1-742-346-5782 x848",
            "address": "6739 Mose Stravenue",
            "opening_hours": "08:00",
            "description": "Neque voluptatum adipisci qui voluptatem id.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.98718668188521",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Candida Ziemann",
            "tel": "1-420-270-1401 x12279",
            "address": "26436 Goldner Junction",
            "opening_hours": "08:00",
            "description": "iste",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.403595798546757",
            "viewCounts": 0,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

export default {
  name: 'RestaurantsTop',
  mixins: [emptyImageFilter],
  components: {
    NavTabs
  },
  data () {
    return {
      restaurants: dummyData.restaurants
    }
  },
  methods: {
    addFavorite (restaurant) {
      restaurant.isFavorited = true
    },
    deleteFavorite (restaurant) {
      restaurant.isFavorited = false
    }
  }
}
</script>