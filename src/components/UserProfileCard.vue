<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="user.image" width="300px" height="300px" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">{{ user.email }}</p>
        <ul class="list-unstyled list-inline">
          <li><strong>{{ userComments.length }}</strong> 已評論餐廳</li>
          <li><strong>{{ userFavoritedRestaurants.length }}</strong> 收藏的餐廳</li>
          <li><strong>{{ userFollowings.length }}</strong> followings (追蹤者)</li>
          <li><strong>{{ userFollowers.length }}</strong> followers (追隨者)</li>
        </ul>
        <p></p>
        <form
          action="/following/1?_method=DELETE"
          method="POST"
          style="display: contents"
        >
          <template
          v-if="dummyUser.isAuthenticated"
          >
            <button type="submit" class="btn btn-primary">Edit</button>
          </template>
          <template v-else>
            <button
            v-if="user.isFollowed"
            type="submit"
            class="btn btn-danger"
            @click.stop.prevent="deleteFollowed"
            >
            取消追蹤</button>
            <button
            v-else
            type="submit"
            class="btn btn-primary"
            @click.stop.prevent="addFollowed"
            >追蹤</button>
          </template>
        </form>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    },
    userFollowings: {
      type: Array,
      required: true
    },
    userFollowers: {
      type: Array,
      required: true
    },
    userComments: {
      type: Array,
      required: true
    },
    userFavoritedRestaurants: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      user: this.initialUser,
      dummyUser
    }
  },
  methods: {
    addFollowed () {
      this.user = {
        ...this.user,
        isFollowed: true
      }  
    },
    deleteFollowed () {
      this.user = {
        ...this.user,
        isFollowed: false
      }
    }
  }
}
</script>
