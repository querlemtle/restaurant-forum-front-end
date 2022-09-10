import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser() {
    return apiHelper.get('/get_current_user')
  },
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  update({ userId, formData }) {
    return apiHelper.get(`/users/${userId}`, formData)
  },
  addFavorite({ restaurantId }) {
    // https://github.com/axios/axios#request-method-aliases
    // post 請求有兩個必要參數：url, data；此處沒有要帶資料所以填 null
    return apiHelper.post(`/favorite/${restaurantId}`)
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`)
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  getTopUsers() {
    return apiHelper.get('/users/top')
  },
  addFollowing({userId}) {
    return apiHelper.post(`/following/${userId}`)
  },
  deleteFollowing({userId}) {
    return apiHelper.delete(`/following/${userId}`)
  }
}