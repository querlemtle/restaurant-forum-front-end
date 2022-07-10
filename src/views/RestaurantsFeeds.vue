<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <!-- 最新評論 NewestComments-->
        <NewestComments :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'

const dummyData = {
  "restaurants": [
        {
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
            }
        },
        {
            "id": 2,
            "name": "Tess Mohr PhD",
            "tel": "(812) 169-0812 x3246",
            "address": "789 Elsie Flats",
            "opening_hours": "08:00",
            "description": "Aperiam qui est numquam. Tempora natus consequuntur nihil quos accusantium adipisci. Ratione quo consequatur excepturi.\n \rRepellendus officiis at enim. Nisi debitis dolores. Totam modi qui voluptas. Cum eum ut rem. Voluptatem rem voluptatem rerum. Omnis ex ad nesciunt nulla quibusdam animi pariatur.\n \rVoluptatem sit aut aut commodi porro sapiente iste autem repellat. Quibusdam repellendus dolore repellendus expedita aut quo qui rerum suscipit. Ab voluptas maxime et eius dicta. Quia iusto odit cupiditate similique repudiandae aliquid quae quia sed.",
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
            }
        },
        {
            "id": 3,
            "name": "Rosamond Deckow",
            "tel": "1-513-150-0024 x18954",
            "address": "2249 Kshlerin Plaza",
            "opening_hours": "08:00",
            "description": "Aut tempore maiores. Dolorum itaque animi. Minima repellendus dolores voluptas sequi iusto enim repudiandae id.",
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
            }
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
            }
        },
        {
            "id": 5,
            "name": "Kendall Hodkiewicz",
            "tel": "487-218-7410 x64559",
            "address": "9430 Rosenbaum Fork",
            "opening_hours": "08:00",
            "description": "Unde et voluptate necessitatibus quaerat provident voluptatum aut quasi voluptate. Consequatur nemo facilis deserunt et aut esse quisquam. Est cum quia dolorum alias.",
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
            }
        },
        {
            "id": 6,
            "name": "Desmond Wiza",
            "tel": "209-485-8454 x145",
            "address": "983 Kelsi View",
            "opening_hours": "08:00",
            "description": "Nihil voluptatem odit maiores magni repudiandae doloribus voluptates aliquid quam. Perferendis consequatur nulla. Maiores reprehenderit et. Illum esse neque et quasi maxime voluptatem.",
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
            }
        },
        {
            "id": 7,
            "name": "Rollin Cruickshank",
            "tel": "351.004.7774 x97020",
            "address": "6911 Lorenz Gateway",
            "opening_hours": "08:00",
            "description": "Et aut voluptatibus nesciunt cum alias eaque eos vitae. Odio labore et debitis dicta eaque aut molestiae voluptatibus cupiditate. Excepturi omnis sunt autem eveniet earum.",
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
            }
        },
        {
            "id": 8,
            "name": "Rosemarie Schroeder",
            "tel": "159-454-8593 x2751",
            "address": "7776 Davonte Ridge",
            "opening_hours": "08:00",
            "description": "Rerum delectus cupiditate voluptate molestiae. Iusto ipsa dolorem corporis vel. Alias fugiat suscipit id vero pariatur qui dolores commodi suscipit.\n \rEos doloribus quasi sed aliquid provident dolores. Assumenda culpa adipisci sed quis. In et similique magnam sunt. Magni aut cum ipsa sapiente.\n \rSuscipit sed est quo aut officia quis mollitia pariatur ut. Soluta ullam culpa eos dolor molestiae. Sit nostrum eius vel reprehenderit tempore.",
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
            }
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
            }
        },
        {
            "id": 10,
            "name": "Eli Lockman",
            "tel": "313.053.5649 x98354",
            "address": "610 Roma Light",
            "opening_hours": "08:00",
            "description": "Et aut molestiae maxime quia quam dolor ut impedit optio. Illo totam in et earum. Doloremque excepturi eligendi ipsa corrupti.",
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
            }
        }
    ],
  "comments": [
        {
            "id": 12,
            "text": "Non sit praesentium voluptatem odit pariatur nihil.",
            "UserId": 1,
            "RestaurantId": 12,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$S8ZluMfYv61FlwiU0CDz8OBNOnmeiJo/lAM/5vHVvg3f9KMcZ4XS2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "Restaurant": {
                "id": 12,
                "name": "Sienna Dietrich",
                "tel": "109-988-1512",
                "address": "5029 Prudence Station",
                "opening_hours": "08:00",
                "description": "Vero natus neque beatae laborum voluptate. Tempora ipsum aut praesentium id. Tenetur nihil impedit similique similique et id itaque minus quia. Nostrum dolor doloremque omnis deleniti expedita eveniet quas quia.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.91339759672869",
                "viewCounts": 0,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 39,
            "text": "Libero beatae est vel rerum aliquam quibusdam dolor.",
            "UserId": 1,
            "RestaurantId": 39,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$S8ZluMfYv61FlwiU0CDz8OBNOnmeiJo/lAM/5vHVvg3f9KMcZ4XS2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "Restaurant": {
                "id": 39,
                "name": "Alfonso Reilly",
                "tel": "337-132-9751",
                "address": "0901 Consuelo Spring",
                "opening_hours": "08:00",
                "description": "Atque ea aut corporis excepturi voluptas. Nostrum nostrum eveniet ut molestiae. Vero asperiores cum veniam nobis enim ratione eaque labore quibusdam. In dolore ea impedit et.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.71426608847767",
                "viewCounts": 0,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 56,
            "text": "Impedit laudantium consequatur.",
            "UserId": 1,
            "RestaurantId": 6,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$S8ZluMfYv61FlwiU0CDz8OBNOnmeiJo/lAM/5vHVvg3f9KMcZ4XS2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "Restaurant": {
                "id": 6,
                "name": "Desmond Wiza",
                "tel": "209-485-8454 x145",
                "address": "983 Kelsi View",
                "opening_hours": "08:00",
                "description": "Nihil voluptatem odit maiores magni repudiandae doloribus voluptates aliquid quam. Perferendis consequatur nulla. Maiores reprehenderit et. Illum esse neque et quasi maxime voluptatem.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.29075183471862",
                "viewCounts": 0,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 75,
            "text": "Ut deleniti eum.",
            "UserId": 1,
            "RestaurantId": 25,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$S8ZluMfYv61FlwiU0CDz8OBNOnmeiJo/lAM/5vHVvg3f9KMcZ4XS2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "Restaurant": {
                "id": 25,
                "name": "Ida Williamson",
                "tel": "1-229-849-6320",
                "address": "633 Mateo Tunnel",
                "opening_hours": "08:00",
                "description": "Aspernatur excepturi aliquid sequi et. Quod non et est consequatur. Itaque quasi tenetur. Consequatur ab consequuntur quidem animi.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.1426431525976888",
                "viewCounts": 0,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 98,
            "text": "Est molestias dolorem qui officia repudiandae omnis illum laborum.",
            "UserId": 1,
            "RestaurantId": 48,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$S8ZluMfYv61FlwiU0CDz8OBNOnmeiJo/lAM/5vHVvg3f9KMcZ4XS2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "Restaurant": {
                "id": 48,
                "name": "Mrs. Meta Breitenberg",
                "tel": "(357) 644-8903",
                "address": "2549 Brenna Village",
                "opening_hours": "08:00",
                "description": "Minima odit aliquid voluptatem tenetur suscipit culpa perferendis vel. Nulla omnis incidunt incidunt est. Neque nihil praesentium non harum ut aut. Error quibusdam et sed in dolorem exercitationem numquam nam culpa.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.56487958594363",
                "viewCounts": 0,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 124,
            "text": "Id minima voluptas.",
            "UserId": 1,
            "RestaurantId": 24,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$S8ZluMfYv61FlwiU0CDz8OBNOnmeiJo/lAM/5vHVvg3f9KMcZ4XS2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z"
            },
            "Restaurant": {
                "id": 24,
                "name": "Leonardo Kutch III",
                "tel": "408.689.9182 x7297",
                "address": "948 Beer Haven",
                "opening_hours": "08:00",
                "description": "Perspiciatis atque ad totam sit. Temporibus ipsam ratione. In voluptates ab vel quis non. Adipisci eum minus. Velit iure et voluptates neque dicta dolorum quam voluptatem.\n \rNumquam omnis at maiores laborum tenetur blanditiis sit consectetur. Ut molestiae sed assumenda. Veniam magnam quam ratione exercitationem dolorem ex dignissimos rerum. Harum possimus deserunt vitae error tenetur autem possimus. Voluptatibus velit exercitationem sed dolor adipisci recusandae ratione magni quibusdam. Et atque enim et et alias accusantium error dolores fugit.\n \rEos aut illum rerum. Ut et est et officiis omnis doloremque sed. Iure fugiat ad ut. Dolorum ab necessitatibus eaque distinctio inventore totam ad. Et odio doloremque debitis incidunt consequatur enim. A quibusdam in eveniet accusantium vel.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.992674831173023",
                "viewCounts": 0,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z",
                "CategoryId": 5
            }
        },
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
            },
            "Restaurant": {
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
                "CategoryId": 2
            }
        },
        {
            "id": 22,
            "text": "Sed doloribus reprehenderit soluta cumque.",
            "UserId": 2,
            "RestaurantId": 22,
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
            },
            "Restaurant": {
                "id": 22,
                "name": "Peggie Rempel",
                "tel": "345.655.3954",
                "address": "883 Eldridge Shoals",
                "opening_hours": "08:00",
                "description": "Quia magni quas dolorem dolores ex eveniet. Vitae ad sunt vitae labore totam id enim ut. Quo nulla non quod iste alias ratione.\n \rUt dolor molestiae eius minus. Earum aspernatur velit error ab placeat sed est. Libero blanditiis vel illo facere. Et omnis aliquid. In reiciendis distinctio maiores qui rem labore repellat dolorem.\n \rAut consequuntur nihil explicabo debitis non consequatur veniam libero. Officiis sit veniam enim vitae neque ut consectetur voluptatum ipsam. Maxime est quia quia sapiente veniam error molestias id dolorem.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.1250100906193",
                "viewCounts": 0,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 37,
            "text": "Mollitia voluptatem consequuntur.",
            "UserId": 2,
            "RestaurantId": 37,
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
            },
            "Restaurant": {
                "id": 37,
                "name": "Brandon Trantow",
                "tel": "(012) 003-7332 x75813",
                "address": "286 Mayer Square",
                "opening_hours": "08:00",
                "description": "Illo excepturi quod molestias nobis ut repudiandae optio eum et. Labore aspernatur rem repellendus dolor laboriosam porro. Deserunt consectetur eaque voluptatibus officia. Vel sed quae ut reprehenderit aliquam fugit enim quasi.\n \rExplicabo suscipit facere ut iste ea praesentium. Et deserunt corrupti eaque qui officia autem. Facilis ipsa molestiae perferendis tempore earum sit voluptate neque maxime. Eum praesentium ex iusto et quos dolorem fugiat. Molestias enim qui veniam labore et.\n \rNecessitatibus quasi aut et sit. Deserunt ea beatae soluta consequatur est consectetur corrupti. In minus sunt quidem et tempore eum ipsum. Inventore illo adipisci officiis repellat accusantium.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.86720605158082",
                "viewCounts": 0,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 60,
            "text": "Odit culpa aliquam earum quia cupiditate magni autem.",
            "UserId": 2,
            "RestaurantId": 10,
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
            },
            "Restaurant": {
                "id": 10,
                "name": "Eli Lockman",
                "tel": "313.053.5649 x98354",
                "address": "610 Roma Light",
                "opening_hours": "08:00",
                "description": "Et aut molestiae maxime quia quam dolor ut impedit optio. Illo totam in et earum. Doloremque excepturi eligendi ipsa corrupti.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.599477501120845",
                "viewCounts": 0,
                "createdAt": "2022-07-06T12:16:09.000Z",
                "updatedAt": "2022-07-06T12:16:09.000Z",
                "CategoryId": 4
            }
        }
    ]
}

export default {
  name: 'restaurantFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      // fetch API
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments.filter(comment => comment.Restaurant)
    },
  }
}
</script>