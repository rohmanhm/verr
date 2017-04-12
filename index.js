#!/usr/bin/env node
'use strict'

const commander = require('commander')
const execa = require('execa')
const pkgJSON = require('./package.json')

commander
  .version(pkgJSON.version)
  .usage('<file>')
  .parse(process.argv)

const pkg = commander.args[0]

if (!pkg) return console.info('There is nothing to check')

execa.shell(`${ pkg } --version`)
  .then(result => {
    console.log(result.stdout)
  })
  .catch(error => {
    console.log(error.stderr)
  })
