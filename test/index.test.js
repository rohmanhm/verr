import execa from 'execa'
import path from 'path'
import test from 'ava'

const actualVersion = require('../package.json').version
const verr = path.join(__dirname, '../index.js')
const checkthis = path.join(__dirname, './checkthis.js')

test.before(t => {
  // ask permission
  execa.shellSync(`chmod +x ${ verr }`)
})

test('should check the correct version', async t => {
  const execverr = await execa.shell(`${ verr } ${ verr }`)
  const version = await execverr.stdout

  t.is(actualVersion, version)
})
