<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
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

const dummyUsers = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$S8ZluMfYv61FlwiU0CDz8OBNOnmeiJo/lAM/5vHVvg3f9KMcZ4XS2",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z"
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$g1oNfya7s7mfe9AuUI61TOzU4GKFXWwRQpeUuKVQ4NH46PRt2EIv2",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z"
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$3GDQ3s.F8r3ShGV2fsBvI.t.kxWONIu5Gr7Zq5RenQYVegYSoj3zu",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-07-06T12:16:09.000Z",
            "updatedAt": "2022-07-06T12:16:09.000Z"
        }
    ]
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: 'root1',
    email: 'root@example.com',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  name: 'AdminUsers',
  data () {
    return {
      users: [],
      currentUser: dummyUser.currentUser
    }
  },
  components: {
    AdminNav
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      this.users = dummyUsers.users
    },
    toggleUserRole({ userId, isAdmin }) {
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
    }
  }
}
</script>