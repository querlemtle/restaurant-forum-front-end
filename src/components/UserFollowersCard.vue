<template>
  <div class="card">
    <div class="card-header">
        <strong>{{ userFollowers.length }}</strong> followers (追隨者)
    </div>

    <div class="card-body">
      <router-link v-for="user in userFollowers"
      :to="{ name: 'user', params: { id: user.id } }"
      :key="user.id"
      >
        <img :src="user.image | emptyImage" width="60" height="60" class="avatar">
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

export default {
  name: 'UserFollowersCard',
  mixins: [emptyImageFilter],
  props: {
    userFollowers: {
      type: Array,
      required: true
    }
  }
}
</script>