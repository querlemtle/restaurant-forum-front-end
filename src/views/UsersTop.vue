<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <Spinner v-if="isLoading" />
    <div
      v-else
      class="row text-center"
    >
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
        <span class="badge badge-secondary">追蹤人數：{{ user.followerCount }}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="deleteFollowing(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollowing(user.id)"
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
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  name: 'UsersTop',
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
    Spinner
  },
  data() {
    return {
      users: [],
      isLoading: true
    }
  },
  created() {
    this.fetchTopUsers()
  },
  methods: {
    async fetchTopUsers () {
      try {
        const { data } = await usersAPI.getTopUsers()
        this.users = data.users.map(user => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed
        }))
        this.isLoading = false        
      } catch (error) {
        this.isLoading = false  
        console.error(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人，請稍後再試'
        })
      }
    },
    async addFollowing (userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId })
        if(data.status === 'error') {
          throw new Error(data.message)
        }
        this.users = this.users.map(user => {
          if(user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: ++user.followerCount,
              isFollowed: true
            }
          }
        })
      } catch (error) {
        console.error(error)
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
    },
    async deleteFollowing (userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId })

        if(data.status === 'error') {
          throw new Error(data.message)
        }
        this.users = this.users.map(user => {
          if(user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: --user.followerCount,
              isFollowed: false
            }
          }
        })

      } catch (error) {
        console.error(error)
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    }
  }
}
</script>