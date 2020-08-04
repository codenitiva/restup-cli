import config from './config'
import pathHelper from './path-helper'
import fs from './file-system'
import {RESTUpClasses} from './types'

export default {
  extractCustomClasses(): RESTUpClasses {
    try {
      const {controllers, middlewares, models, routers}: RESTUpClasses = config.load()
      return {controllers, middlewares, models, routers}
    } catch (error) {
      throw error
    }
  },
  scanDirectoriesForClasses(projectName: string): RESTUpClasses {
    const names = fs.readDir.appDir(pathHelper.here(projectName, 'app'))
    return {
      controllers: names[0],
      middlewares: names[1],
      models: names[2],
      routers: names[3],
    }
  },
}
