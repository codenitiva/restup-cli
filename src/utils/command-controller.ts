import * as fs from 'fs'
import * as path from 'path'
import phpFS from './php-fs'

export default {
  generate(type: string, name: string): void {
    const fileText = fs.readFileSync(path.join(__dirname, `../templates/${type}.txt`), 'utf-8')
    phpFS.generateFile(fileText, type, name)
    phpFS.generateRequirements()
  },
}
