import * as fs from 'fs'
import * as path from 'path'
import phpFS from './php-fs'
import * as clone from 'git-clone'
import * as rimraf from 'rimraf'

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
  },
}
