import config from './config'
import {RESTUpConfigType} from './types'

export default {
  extractCustomClasses(): RESTUpConfigType {
    try {
      const {controllers, middlewares, models, routers}: RESTUpConfigType = config.load()
      return {controllers, middlewares, models, routers}
    } catch (error) {
      throw error
    }
  },
}
