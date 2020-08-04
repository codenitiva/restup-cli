import * as fs from 'fs'
import * as path from 'path'
import * as clone from 'git-clone'
import * as rimraf from 'rimraf'
import phpFS from './php-fs'
import doctor from './doctor'
import config from './config'

export default {
  generate(type: string, name: string): void {
    const fileText = fs.readFileSync(path.join(__dirname, `../templates/${type}.txt`), 'utf-8')
    phpFS.generateFile(fileText, type, name)
    phpFS.generateRequirements()
  },
  async start(name: string): Promise<void> {
    await new Promise((resolve, reject) => {
      clone('https://github.com/codenitiva/restup-php', name, (err: Error) => {
        if (err) reject(err)
        resolve()
      })
    })

    await new Promise((resolve, reject) => {
      rimraf(path.join(process.cwd(), name, '.git'), (err: Error) => {
        if (err) reject(err)
        resolve()
      })
    })

    config.create(name, name)

    const classes = doctor.scanDirectoriesForClasses(name)
    config.setMany(
      Object.keys(classes),
      [classes.controllers, classes.middlewares, classes.models, classes.routers],
      name)
  },
}
