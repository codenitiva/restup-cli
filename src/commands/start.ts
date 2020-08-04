import {Command, flags} from '@oclif/command'
import * as chalk from 'chalk'
import {cli} from 'cli-ux'
import controller from '../utils/command-controller'

export default class Start extends Command {
  static description = 'create a restup project'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {
      name: 'name',
      required: false,
      description: 'name of your project (default: restup-project)',
    },
  ]

  async run() {
    const {args} = this.parse(Start)

    cli.action.start(`${chalk.blue('Creating')} a ${chalk.yellow('RESTup')} project for you`)
    await controller.start(args.name ?? 'restup-project')
    cli.action.stop(chalk.green('\nDone'))
  }
}
