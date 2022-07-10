<template>
  <div class="card">
    <div class="card-header">
        <strong>{{ userFollowers.length }}</strong> followers (追隨者)
    </div>

    <div class="card-body">
      <a 
      href="#"
      v-for="user in userFollowers"
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
    userFollowers: {
      type: Array,
      required: true
    }
  }
}
</script>