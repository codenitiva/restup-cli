import {Command, flags} from '@oclif/command'

export default class Init extends Command {
  static description = 'initialize restup config files on existing restup project'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {}
}
