<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        :disabled="isProcessing"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from './../apis/authorization'
import { Toast } from './../utils/helpers'

  export default {
    data() {
      return {
        email: '',
        password: '',
        isProcessing: false
      }
    },
    methods: {
      async handleSubmit () {
        try {
          if(!this.email || !this.password){
            Toast.fire({
              icon: 'warning',
              title: '請填入帳號和密碼'
            })
            return
          }

          // 暫時關閉按鈕
          this.isProcessing = true 

          const response = await authorizationAPI.signIn({
            email: this.email,
            password: this.password
          })

          // 從 API 回傳之 response 取出 data
          const { data } = response

          if(data.status === 'error') {
            throw new Error(data.message)
          }

          // 把 data.token 存到 localStorage
          localStorage.setItem('token', data.token)
          
          // 透過 setCurrentUser 把使用者資料存到 Vuex 的 state
          this.$store.commit('setCurrentUser', data.user)
          
          // vue-router 轉址到 /restaurants
          this.$router.push('/restaurants')
        } catch (error) {
          // 清空密碼
          this.password = ''
          // 重新開放按鈕
          this.isProcessing = false
          Toast.fire({
            icon: 'warning',
            title: '請確認您輸入了正確的帳號密碼'
          })
        }
      }
    }
  }  
</script>