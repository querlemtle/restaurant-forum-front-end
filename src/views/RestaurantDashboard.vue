<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Wellington Larson",
        "tel": "878.252.4713 x35160",
        "address": "092 Lindsay Hollow",
        "opening_hours": "08:00",
        "description": "Voluptatem ut excepturi quo dolore vitae consequatur minus sit placeat. Facilis voluptatem deleniti. Saepe nihil laboriosam. Laudantium explicabo fugit. Similique quis quia enim voluptas.",
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
        "Comments": [
            {
                "id": 1,
                "text": "Vitae autem sint numquam architecto doloremque dolor maxime sapiente.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$g1oNfya7s7mfe9AuUI61TOzU4GKFXWwRQpeUuKVQ4NH46PRt2EIv2",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-07-06T12:16:09.000Z",
                    "updatedAt": "2022-07-06T12:16:09.000Z"
                }
            },
            {
                "id": 101,
                "text": "Sunt id eligendi error iusto natus vel sit sint.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$g1oNfya7s7mfe9AuUI61TOzU4GKFXWwRQpeUuKVQ4NH46PRt2EIv2",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-07-06T12:16:09.000Z",
                    "updatedAt": "2022-07-06T12:16:09.000Z"
                }
            },
            {
                "id": 51,
                "text": "Officia dolor animi deleniti nulla.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$3GDQ3s.F8r3ShGV2fsBvI.t.kxWONIu5Gr7Zq5RenQYVegYSoj3zu",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-07-06T12:16:09.000Z",
                    "updatedAt": "2022-07-06T12:16:09.000Z"
                }
            }
        ]
    }
}

export default {
  data () {
    return {
      restaurant: dummyData.restaurant
    }
  }
}
</script>