<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <!-- user card -->
      <div 
        class="col-3"
        v-for="user in users"
        :key="user.id"
      >
        <router-link 
        :to="{ name: 'user', params: { id: user.id }}"
        >
          <img
            :src="user.image | emptyImage"
            width="140px"
            height="140px"
          >
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="deleteFollowed(user)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollowed(user)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import { emptyImageFilter } from './../utils/mixins'

const dummyData = {
  "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$S8ZluMfYv61FlwiU0CDz8OBNOnmeiJo/lAM/5vHVvg3f9KMcZ4XS2",
            "isAdmin": true,
            "image": "https://i.imgur.com/58ImzMM.png",
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$g1oNfya7s7mfe9AuUI61TOzU4GKFXWwRQpeUuKVQ4NH46PRt2EIv2",
            "isAdmin": false,
            "image": "https://randomuser.me/api/portraits/men/7.jpg",
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$3GDQ3s.F8r3ShGV2fsBvI.t.kxWONIu5Gr7Zq5RenQYVegYSoj3zu",
            "isAdmin": false,
            "image": "https://randomuser.me/api/portraits/women/50.jpg",
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}

export default {
  name: 'UsersTop',
  mixins: [emptyImageFilter],
  components: {
    NavTabs
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchTopUsers()
  },
  methods: {
    fetchTopUsers () {
      const { users } = dummyData
      this.users = users
    },
    addFollowed (user) {
      user.isFollowed = true
    },
    deleteFollowed (user) {
      user.isFollowed = false
    }
  }
}
</script>