import * as fs from 'fs'
import * as path from 'path'
import stringCase from './string-case'

export default {
  generate(type: string, name: string): void {
    const fileText = fs.readFileSync(path.join(__dirname, `../templates/${type}.txt`), 'utf-8')
    fs.writeFileSync(
      path.join(__dirname, `/app/${type}/${name}${stringCase.toTitleCase(type)}.php`),
      fileText.replace(/###/g, name).replace(/##/, `/${name.toLowerCase()}`))
  },
}
