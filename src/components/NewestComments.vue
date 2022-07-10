<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div
      v-for="comment in comments"
      :key="comment.id">
        <h4>
          <a href="#">
            {{ comment.Restaurant.name }}
          </a>
        </h4>
        <p>At reiciendis eaque hic excepturi ratione officiis ad ut minus.</p>by
        <a href="#">
          root
        </a>
        at 3 days ago
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>