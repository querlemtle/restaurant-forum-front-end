import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
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