import * as path from 'path'

export default {
  here(...pathname: string[]): string {
    return path.join(process.cwd(), pathname.join('/'))
  },
  lib(...pathname: string[]): string {
    return path.join(__dirname, pathname.join('/'))
  },
  join(...pathname: string[]): string {
    return path.join(pathname.join('/'))
  },
}
