import * as fs from 'fs'
import * as path from 'path'

export default {
  create(name: string, prefixPath = ''): any {
    const template = fs.readFileSync(path.join(__dirname, '../templates/config.txt'), 'utf-8')
    // TODO load cli version from system
    if (!fs.existsSync(path.join(process.cwd(), prefixPath, '.restup')))
      fs.mkdirSync(path.join(process.cwd(), prefixPath, '.restup'))
    fs.writeFileSync(
      path.join(process.cwd(), prefixPath, '.restup/restup.config.json'),
      template.replace(/#n/, name).replace(/#d/, 'A project created with RESTup CLI').replace(/#v/, '1.0.12'))
  },
  load(prefixPath = ''): any {
    const rawJSON = fs.readFileSync(path.join(process.cwd(), prefixPath, '.restup/restup.config.json'), 'utf-8')
    return JSON.parse(rawJSON)
  },
  save(data: any, prefixPath = ''): void {
    fs.writeFileSync(path.join(process.cwd(), prefixPath, '.restup/restup.config.json'), JSON.stringify(data, null, 2))
  },
  push(key: string, data: string, prefixPath = ''): void {
    const configJSON = this.load(prefixPath)
    configJSON[key].push(data)
    this.save(configJSON, prefixPath)
  },
  set(key: string, data: string | string[], prefixPath = '') {
    const configJSON = this.load(prefixPath)
    configJSON[key] = data
    this.save(configJSON, prefixPath)
  },
  setMany(keys: string[], data: string[] | string[][], prefixPath = '') {
    keys.forEach((key: string, index: number) => {
      this.set(key, data[index], prefixPath)
    })
  },
}
