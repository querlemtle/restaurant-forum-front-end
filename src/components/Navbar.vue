<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link
      class="navbar-brand"
      to="/"
    >
      餐廳評論網
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarSupportedContent" 
      class="navbar-collapse collapse"
    >
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
             v-if="currentUser.isAdmin"
             :to="{ name: 'admin-restaurants' }" 
             class="text-white mr-3"
        >
         管理員後台
       </router-link>

        <!-- is user is login -->
        <template v-if="isAuthenticated">
          <router-link
             :to="{ name: 'user', params: { id: currentUser.id }}" 
             class="text-white mr-3"
          > 
           {{ currentUser.name || '使用者'}} 您好
         </router-link>
         <button
           type="button" 
           class="btn btn-sm btn-outline-success my-2 my-sm-0"
          >
           登出
          </button>
          </template>
      </div>
    </div>

  </nav>
</template>

<script>
// 模擬 API 回傳內容
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  // Vue 會在沒有資料時使用此預設值
  data () {
    return {
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false
    }
  },
  methods : {
    // 向後端 API 拉取資料
    fetchUser() {
      this.currentUser = {
        // 預設值
        ...this.currentUser,
        // API 回傳值，會蓋掉預設值內的同名屬性
        ...dummyUser.currentUser
      },
      this.isAuthenticated = dummyUser.isAuthenticated
    }
  },
  created() {
    this.fetchUser()
  }
}
</script>