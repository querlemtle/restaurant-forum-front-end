<template>
  <div id="restaurant-forum">
    <Navbar/> 
    <main class="mt-5 bg-white">
      <router-view/>
    </main>
  </div>
</template>

// ./src/App.vue
<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar,
  }

}
</script>