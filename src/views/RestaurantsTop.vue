<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              src="https://loremflickr.com/320/240/food,dessert,restaurant/?random=2"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              Mrs. Mckenzie Johnston
            </h5>
            <span class="badge badge-secondary">收藏數：0</span>
            <p class="card-text">
              Quia pariatur perferendis architecto tenetur omnis
            </p>
            <a
              href="#"
              class="btn btn-primary mr-2"
            >Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'

export default {
  components: {
    NavTabs
  },
}
</script>