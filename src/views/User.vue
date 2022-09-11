<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <Spinner v-if="isLoading" />
      <template v-else>
        <div class="card mb-3">
          <!-- UserProfileCard -->
          <UserProfileCard
            :initial-user="user"
            :initial-is-followed="isFollowed"
          />
        </div>

        <div class="row">
          <div class="col-md-4">
            <!-- UserFollowingsCard -->
            <UserFollowingsCard
              :user-followings="userFollowings"
            />
            <br>
            <!-- UserFollowersCard  -->
            <UserFollowersCard
              :user-followers="userFollowers"
            />
          </div>

          <div class="col-md-8">
            <!-- UserCommentsCard -->
            <UserCommentsCard
              :user-comments="userComments"
            />
            <br>
            <!-- UserFavoritedRestaurantsCard -->
            <UserFavoritedRestaurantsCard
              :user-favorited-restaurants="userFavoritedRestaurants"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import UserProfileCard from './../components/UserProfileCard'
import UserFollowingsCard from './../components/UserFollowingsCard'
import UserFollowersCard from './../components/UserFollowersCard'
import UserCommentsCard from './../components/UserCommentsCard'
import UserFavoritedRestaurantsCard from './../components/UserFavoritedRestaurantsCard'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'
import Spinner from './../components/Spinner'

export default {
  name: 'User',
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
    Spinner
  },
  data () {
    return {
      user: {
        id: -1,
        name: '',
        email: '',
        image: '',
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0
      },
      userFollowings: [],
      userFollowers: [],
      userComments: [],
      userFavoritedRestaurants: [],
      isFollowed: false,
      isLoading: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  beforeRouteUpdate(to, from, next){
    const { id } = to.params
    this.fetchUser(id)
    next()
  },
  methods: {
    async fetchUser (userId) {
      try {
        const { data } = await usersAPI.get({ userId })

        if(data.status === 'error') {
          throw new Error(data.message)
        }

        const { profile, isFollowed } = data
        const {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings
        } = profile

        // 更新 data ()
        this.user = {
          ...this.user,
          id,
          name,
          email,
          image,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length
        }

        this.userFollowings = Followings
        this.userFollowers = Followers
        this.userComments = Comments
        this.userFavoritedRestaurants = FavoritedRestaurants
        this.isFollowed = isFollowed
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }  
    }
  }
}
</script>