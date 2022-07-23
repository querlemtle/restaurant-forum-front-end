import { apiHelper } from './../utils/helpers'

export default {
  // 帶入需要的參數
  signIn({ email, password }) {
    // 這裡 return 的會是一個 Promise
    // Vue 元件接到 Promise 物件後，就可以用 then 做後續操作
    return apiHelper.post('/signin', {
      email,
      password
    })
  },
  signUp({ data }) {
    return apiHelper.post('/signup', {
      ...data
    })
  }
}