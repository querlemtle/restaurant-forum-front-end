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
          <button type="submit" class="btn btn-danger">取消追蹤</button>
        </form>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
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
      user: this.initialUser
    }
  }
}
</script>
