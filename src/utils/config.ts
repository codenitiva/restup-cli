import * as fs from 'fs'
import * as path from 'path'

export default {
  load(): any {
    const rawJSON = fs.readFileSync(path.join(process.cwd(), '.restup/restup.config.json'), 'utf-8')
    return JSON.parse(rawJSON)
  },
  save(data: any): void {
    fs.writeFileSync(path.join(process.cwd(), '.restup/restup.config.json'), JSON.stringify(data, null, 2))
  },
  push(key: string, data: string): void {
    const configJSON = this.load()
    configJSON[key].push(data)
    this.save(configJSON)
  },
  set(key: string, data: string | string[]) {
    const configJSON = this.load()
    configJSON[key] = data
    this.save(configJSON)
  },
  setMany(keys: string[], data: string | string[]) {
    keys.forEach((key: string, index: number) => {
      this.set(key, data[index])
    })
  },
}
