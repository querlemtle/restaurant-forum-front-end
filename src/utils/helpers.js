import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'http://localhost:3000/api'

// 自訂 axios 實例，把它存到 apiHelper 變數裡
const axiosInstance = axios.create({
  baseURL
})

// intercept requests before handled by then or catch
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  err => Promise.reject(err)
)

export const apiHelper = axiosInstance

// 參照官網設定，並放進一個 Toast 變數，再 export，便可在其他檔案引用
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})