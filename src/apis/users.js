import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser() {
    return apiHelper.get('/get_current_user', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  update({ userId, formData }) {
    return apiHelper.get(`/users/${userId}`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addFavorite({ restaurantId }) {
    // https://github.com/axios/axios#request-method-aliases
    // post 請求有兩個必要參數：url, data；此處沒有要帶資料所以填 null
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopUsers() {
    return apiHelper.get('/users/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addFollowing({userId}) {
    return apiHelper.post(`/following/${userId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteFollowing({userId}) {
    return apiHelper.delete(`/following/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}