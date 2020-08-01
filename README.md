RESTup CLI
===========

RESTup PHP&#39;s cli (command line interface) to speed up API development with RESTup Framework

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@restup/cli.svg)](https://npmjs.org/package/@restup/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@restup/cli.svg)](https://npmjs.org/package/@restup/cli)
[![License](https://img.shields.io/npm/l/@restup/cli.svg)](https://github.com/codenitiva/restup-cli/blob/master/package.json)

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
* [`restup controller [FILE]`](#restup-controller-file)
* [`restup hello [FILE]`](#restup-hello-file)
* [`restup help [COMMAND]`](#restup-help-command)

## `restup controller [FILE]`

create a RESTup controller

```
USAGE
  $ restup controller [FILE]

OPTIONS
  -h, --help       show CLI help
```

_See code: [src\commands\controller.ts](https://github.com/codenitiva/restup-cli/blob/v0.0.1/src\commands\controller.ts)_

## `restup middleware [FILE]`

create a RESTup middleware

```
USAGE
  $ restup middleware [FILE]

OPTIONS
  -h, --help       show CLI help
```

_See code: [src\commands\middleware.ts](https://github.com/codenitiva/restup-cli/blob/v0.0.1/src\commands\middleware.ts)_

## `restup router [FILE]`

create a RESTup router

```
USAGE
  $ restup router [FILE]

OPTIONS
  -h, --help       show CLI help
```

_See code: [src\commands\router.ts](https://github.com/codenitiva/restup-cli/blob/v0.0.1/src\commands\router.ts)_

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
