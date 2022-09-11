<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <Spinner v-if="isLoading" />
    <table
      v-else
      class="table"
    >
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'admin' : 'user' }}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              @click="toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })"
            >
              {{ user.isAdmin ? 'set as user' : 'set as admin' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'
import Spinner from './../components/Spinner'

export default {
  name: 'AdminUsers',
  components: {
    AdminNav,
    Spinner
  },
  data () {
    return {
      users: [],
      isLoading: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.get()
        this.users = data.users

        if (data.status === 'error') {
          throw new Error(data.message)
        }
        this.isLoading = false        
      } catch (error) {
        this.isLoading = false        
        console.error(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    },
    async toggleUserRole({ userId, isAdmin }) {
      try {
        // PUT 請求更改角色權限
        const { data } = await adminAPI.users.update({
          userId,
          isAdmin: (!isAdmin).toString()
        })
        
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 更改畫面顯示
        this.users = this.users.map(user => {
          // 如果當前 id 符合傳入 id，反轉 isAdmin
          if(user.id === userId) {
            return {
              ...user,
              isAdmin: !isAdmin
            }
          }
          // 其他 user 原封不動傳回去
          return user
        })
      } catch (error) {
        console.error(error)
        Toast.fire({
          icon: 'error',
          title: '無法更改角色權限，請稍後再試'
        })
      }
    }
  }
}
</script>