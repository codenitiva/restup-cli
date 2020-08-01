# RESTup CLI
===========

RESTup PHP&#39;s cli (command line interface) to speed up API development with RESTup Framework

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@restup/cli.svg)](https://npmjs.org/package/@restup/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@restup/cli.svg)](https://npmjs.org/package/@restup/cli)
[![License](https://img.shields.io/npm/l/@restup/cli.svg)](https://github.com/werdna521/restup-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @restup/cli
$ restup COMMAND
running command...
$ restup (-v|--version|version)
@restup/cli/0.0.1 win32-x64 node-v14.4.0
$ restup --help [COMMAND]
USAGE
  $ restup COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`restup hello [FILE]`](#restup-hello-file)
* [`restup help [COMMAND]`](#restup-help-command)

## `restup hello [FILE]`

describe the command here

```
USAGE
  $ restup hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ restup hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/werdna521/restup-cli/blob/v0.0.1/src\commands\hello.ts)_

## `restup help [COMMAND]`

display help for restup

```
USAGE
  $ restup help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src\commands\help.ts)_
<!-- commandsstop -->
