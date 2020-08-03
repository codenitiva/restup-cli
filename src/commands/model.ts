import {Command, flags} from '@oclif/command'
import stringCase from '../utils/string-case'
import controller from '../utils/command-controller'
import * as chalk from 'chalk'
import cli from 'cli-ux'

export default class Middleware extends Command {
  static description = 'create a RESTup Model'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {
      name: 'name',
      required: true,
      description: 'name of the model',
      parse: (input: string) => stringCase.toTitleCase(input),
    },
  ]

  async run() {
    const {args} = this.parse(Middleware)

    cli.action.start(`${chalk.blue('Creating')} ${chalk.yellow(`${args.name}`)} for you`)
    await controller.generate('model', args.name)
    cli.action.stop(chalk.green('\nDone.'))
  }
}
