knowledge
=========

The multi-source knowledge distribute database

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/knowledge.svg)](https://npmjs.org/package/knowledge)
[![Downloads/week](https://img.shields.io/npm/dw/knowledge.svg)](https://npmjs.org/package/knowledge)
[![License](https://img.shields.io/npm/l/knowledge.svg)](https://github.com/emadridm/knowledge/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g knowledge
$ knowledge COMMAND
running command...
$ knowledge (-v|--version|version)
knowledge/1.0.0 linux-x64 node-v16.1.0
$ knowledge --help [COMMAND]
USAGE
  $ knowledge COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`knowledge hello [FILE]`](#knowledge-hello-file)
* [`knowledge help [COMMAND]`](#knowledge-help-command)
* [`knowledge init [FILE]`](#knowledge-init-file)

## `knowledge hello [FILE]`

describe the command here

```
USAGE
  $ knowledge hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ knowledge hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/emadridm/knowledge/blob/v1.0.0/src/commands/hello.ts)_

## `knowledge help [COMMAND]`

display help for knowledge

```
USAGE
  $ knowledge help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `knowledge init [FILE]`

describe the command here

```
USAGE
  $ knowledge init [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/init.ts](https://github.com/emadridm/knowledge/blob/v1.0.0/src/commands/init.ts)_
<!-- commandsstop -->
