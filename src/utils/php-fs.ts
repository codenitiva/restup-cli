import * as fs from 'fs'
import * as path from 'path'
import doctor from './doctor'
import stringCase from './string-case'
import config from './config'

const PHP_TEMPLATES = {
  requirement(type: string, name: string): string {
    return `require_once(__DIR__ . '/app/${type}/${stringCase.toTitleCase(name)}${stringCase.toTitleCase(type)}.php');\r`
  },
}

const generateRequireOnces = (dependencies: string[], type: string): string => {
  return dependencies.map(dep => PHP_TEMPLATES.requirement(type, dep)).join('')
}

export default {
  generateRequirements(): void {
    const {controllers, middlewares, models, routers} = doctor.extractCustomClasses()
    const requirementsTemplate = fs.readFileSync(path.join(__dirname, '../templates/requirements.txt'), 'utf-8')

    fs.writeFileSync(path.join(process.cwd(), '/requirements.php'),
      requirementsTemplate
      .replace(/#controllers/g, generateRequireOnces(controllers, 'controller'))
      .replace(/#middlewares/g, generateRequireOnces(middlewares, 'middleware'))
      .replace(/#models/g, generateRequireOnces(models, 'model'))
      .replace(/#routers/g, generateRequireOnces(routers, 'router'))
    )
  },
  generateFile(fileText: string, type: string, name: string): void {
    fs.writeFileSync(
      path.join(process.cwd(), `/app/${type}/${name}${stringCase.toTitleCase(type)}.php`),
      fileText.replace(/###/g, name).replace(/##/, `${name.toLowerCase()}`))
    const configJSON = config.load()
    configJSON[`${type}s`].push(name.toLowerCase())
    config.save(configJSON)
  },
}
