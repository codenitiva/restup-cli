import * as fs from 'fs'
import * as path from 'path'
import stringCase from './string-case'

export default {
  generate(type: string, name: string): void {
    // load text from templates
    const fileText = fs.readFileSync(path.join(__dirname, `../templates/${type}.txt`), 'utf-8')

    // create file
    fs.writeFileSync(
      path.join(process.cwd(), `/app/${type}/${name}${stringCase.toTitleCase(type)}.php`),
      fileText.replace(/###/g, name).replace(/##/, `/${name.toLowerCase()}`))

    // append dependency to requirements.php
    fs.appendFileSync(path.join(process.cwd(), '/requirements.php'),
      `require_once(__DIR__ . '/app/${type}/${name}${stringCase.toTitleCase(type)}.php');\r`)
  },
}
