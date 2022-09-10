<template>
  <div class="card">
    <div class="card-header"><strong>{{ userComments.length }}</strong> 已評論餐廳</div>
    <div class="card-body">
      <router-link 
      :to="{ name: 'restaurant', params: { id: restaurant.id } }"
      v-for="restaurant in userComments"
      :key="restaurant.id"
      >
        <img
          :src="restaurant.Restaurant.image | emptyImage"
          width="60"
          height="60"
          class="mr-1"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

export default {
  name: 'UserCommentsCard',
  mixins: [emptyImageFilter],
  props: {
    userComments: {
      type: Array,
      required: true
    }
  }
}
</script>
