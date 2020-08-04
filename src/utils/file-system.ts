import * as fs from 'fs'
import pathHelper from './path-helper'

export default {
  readDir: {
    classes(path: string, dir: string): any {
      const files = fs.readdirSync(path)
      console.log(files)
      return files ? files.map(file => file.toLowerCase().replace(dir, '').replace('.php', '')) : []
    },
    appDir(root: string): any {
      return fs.readdirSync(root)
      .filter((dir: string) => !dir.endsWith('.php'))
      .map((dir: string) => this.classes(pathHelper.join(root, dir), dir))
    },
  },
}
