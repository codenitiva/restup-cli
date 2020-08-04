import {Command, flags} from '@oclif/command'
import * as chalk from 'chalk'
import {cli} from 'cli-ux'
import controller from '../utils/command-controller'

export default class Init extends Command {
  static description = 'initialize restup config files on existing restup project'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    const name = await cli.prompt('What is the name of your project? (restup-project)', {required: false})

    cli.action.start(`${chalk.blue('Creating')} a ${chalk.yellow('RESTup')} project for you`)
    await controller.init(name === '' ? 'restup-project' : name)
    cli.action.stop(chalk.green('\nDone'))
  }
}
