<template>
  <div class="card">
    <div class="card-header">
        <strong>{{ userFollowings.length }}</strong> followings (追蹤者)
    </div>

    <div class="card-body">
      <a v-for="user in userFollowings"
      href="#"
      :key="user.id"
      >
        <img :src="user.image" width="60" height="60" class="avatar">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userFollowings: {
      type: Array,
      required: true
    }
  }
}
</script>