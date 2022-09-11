<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img
        :src="user.image | emptyImage"
        width="300px"
        height="300px"
      >
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">
          {{ user.name }}
        </h5>
        <p class="card-text">
          {{ user.email }}
        </p>
        <ul class="list-unstyled list-inline">
          <li><strong>{{ user.commentsLength }}</strong> 已評論餐廳</li>
          <li><strong>{{ user.favoritedRestaurantsLength }}</strong> 收藏的餐廳</li>
          <li><strong>{{ user.followingsLength }}</strong> followings (追蹤者)</li>
          <li><strong>{{ user.followersLength }}</strong> followers (追隨者)</li>
        </ul>
        <p />
        <form
          action="/following/1?_method=DELETE"
          method="POST"
          style="display: contents"
        >
          <template v-if="currentUser.id === user.id">
            <router-link :to="{ name: 'user-edit', params: { id: user.id }}">
              <button
                type="submit"
                class="btn btn-primary"
              >
                Edit
              </button>
            </router-link>
          </template>
          <template v-else>
            <button
              v-if="isFollowed"
              type="submit"
              class="btn btn-danger"
              :disabled="isProcessing"              
              @click.stop.prevent="deleteFollowing(user.id)"
            >
              取消追蹤
            </button>
            <button
              v-else
              type="submit"
              class="btn btn-primary"
              :disabled="isProcessing"              
              @click.stop.prevent="addFollowing(user.id)"
            >
              追蹤
            </button>
          </template>
        </form>
        <p />
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'UserProfileCard',
  mixins: [emptyImageFilter],
  props: {
    initialUser: {
      type: Object,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      user: this.initialUser,
      isFollowed: this.initialIsFollowed,
      isProcessing: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    initialUser(newValue) {
      this.user = {
        ...this.user,
        ...newValue
      }
    },
    initialIsFollowed(newValue) {
      this.isFollowed = newValue
    }
  },
  methods: {
    async addFollowing (userId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.addFollowing({ userId })

        if(data.status === 'error') {
          throw new Error(data.message)
        }

        // 隱藏追蹤按鈕
        this.isFollowed = true
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤使用者，請稍後再試'
        })
      }
    },
    async deleteFollowing (userId) {
      try {
        this.isProcessing = true        
        const { data } = await usersAPI.deleteFollowing({ userId })

        if(data.status === 'error') {
          throw new Error(data.message)
        }

        // 隱藏取消追蹤按鈕
        this.isFollowed = false
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤使用者，請稍後再試'
        })
      }
    }
  }
}
</script>
