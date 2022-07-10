<template>
  <div class="card">
    <div class="card-header"><strong>{{ userComments.length }}</strong> 已評論餐廳</div>
    <div class="card-body">
      <a 
      href="#"
      v-for="restaurant in userComments"
      :key="restaurant.id"
      >
        <img
          :src="restaurant.Restaurant.image"
          width="60"
          height="60"
          class="avatar"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userComments: {
      type: Array,
      required: true
    }
  }
}
</script>
