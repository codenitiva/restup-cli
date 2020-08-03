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
}
