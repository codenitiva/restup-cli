import {Command, flags} from '@oclif/command'
import stringCase from '../utils/string-case'
import phpGenerator from '../utils/php-generator'
import * as chalk from 'chalk'
import cli from 'cli-ux'

export default class Middleware extends Command {
  static description = 'create a RESTup Middleware'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {
      name: 'name',
      required: true,
      description: 'name of the middleware',
      parse: (input: string) => stringCase.toTitleCase(input),
    },
  ]

  async run() {
    const {args} = this.parse(Middleware)

    cli.action.start(`${chalk.blue('Creating')} ${chalk.yellow(`${args.name}Middleware`)} for you`)
    await phpGenerator.generate('middleware', args.name)
    cli.action.stop(chalk.green('\nDone.'))
  }
}
