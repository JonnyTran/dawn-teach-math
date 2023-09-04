import axios from 'axios'
import Constants from '../../constants'
import router from '../router/index'

export default {
  getListEntity: async function (controller) {
    const response = await axios.get(`${Constants.URL_ADRESS}/${controller}`)
    return response
  },

  redirectToEntityDetail: function (routeName, entity) {
    router.push({ name: routeName, params: { id: entity.id } })
  },

  createEntity: function (routeName) {
    router.push({ name: routeName })
  }
}
