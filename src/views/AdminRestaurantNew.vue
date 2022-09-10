<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm
    @after-submit="handleAfterSubmit"
    :is-processing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm
  },
  data () {
    return {
      isProcessing: false
    }
  },
  methods: {
    async handleAfterSubmit (formData) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.create({ formData })

        if(data.status === 'error') {
          throw new Error(data.message)
        }
        // 若成功，進行轉址到 `/admin/restaurants`
        this.$router.push({ name: 'admin-restaurants' }) 
      } catch (error) {
        this.isProcessing = false
        console.error(error)
        Toast.fire({
          icon: 'error',
          title: '無法建立餐廳，請稍後再試'
        })
      }
    }
  }
}
</script>