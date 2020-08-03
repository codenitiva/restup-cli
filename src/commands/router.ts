import {Command, flags} from '@oclif/command'
import stringCase from '../utils/string-case'
import controller from '../utils/command-controller'
import * as chalk from 'chalk'
import cli from 'cli-ux'

export default class Router extends Command {
  static description = 'create a RESTup router'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {
      name: 'name',
      required: true,
      description: 'name of the router',
      parse: (input: string) => stringCase.toTitleCase(input),
    },
  ]

  async run() {
    const {args} = this.parse(Router)

    cli.action.start(`${chalk.blue('Creating')} ${chalk.yellow(`${args.name}Router`)} for you`)
    await controller.generate('router', args.name)
    cli.action.stop(chalk.green('\nDone.'))
  }
}
