<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <!-- 預覽圖 -->
        <img 
        v-if="user.image"
        :src="user.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChanges"
        >
      </div>

      <button
        :disabled="isProcessing"
        type="submit"
        class="btn btn-primary"
      >
        {{ isProcessing ? '更新中...' : 'Submit' }}
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'UserEdit',
  data () {
    return {
      user: {
        id: -1,
        name: '',
        image: '',
        email: ''
      },
      isProcessing: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    currentUser () {
      if(this.currentUser.id === -1) return
      const { id } = this.$route.params
      this.setUser(id)
    }
  },
  created () {
    if (this.currentUser.id === -1) return
    const { id } = this.$route.params
    this.setUser(id)
  },
  methods: {
    setUser (userId) {
        // 取出當前使用者的 id, name, image
        const { id, name, image } = this.currentUser
        
        // 如果當前使用者 id 與路由的使用者 id 不相同
        // 轉址到 404 頁面
        if (id.toString() !== userId.toString()) {
          this.$router.push({ name: 'not-found' })
          return
        }

        // 當前使用者 id 等於路由的使用者 id
        // 更新 data()
        this.user = {
          ...this.user,
          id,
          name,
          image    
        }
    },
    handleFileChanges (e) {
      const files = e.target.files
      // 若沒有上傳圖片，結束
      if(!files.length) return
      // 產生預覽圖
      const imageURL = window.URL.createObjectURL(files[0])
      this.user.image = imageURL
    },
    async handleSubmit (e) {
      try {
        // 若使用者名稱空白，跳出錯誤提示並結束
        if (!this.user.name) {
          Toast.fire({
            icon: 'warning',
            title: '請填入名稱'
          })
          return
        }

        const form = e.target
        const formData = new FormData(form)
        const userId = this.currentUser.id
        // 暫時關掉按鈕
        this.isProcessing = true

        const { data } = await usersAPI.update({ userId, formData })

        if (data.status === 'error') {
          throw new Error(data.message)
        }
        // 重新開啟按鈕
        this.isProcessing = false
        // 轉址到使用者頁面
        this.$router.push({ name: 'user', params: { id: userId } })
      } catch (error) {
        console.error(error.message)
        // 重新開啟按鈕
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新使用者資料，請稍後再試'
        })
      }
    }
  }  
}
</script>