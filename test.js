const shelljs = require('shelljs')
const path = require('node:path')
const assert = require('node:assert/strict');
const os = require('node:os');

const dirsFound = shelljs.find(`${process.cwd()}${path.sep}project`).stdout
const expectedDirs = [
    `${process.cwd()}${path.sep}project${os.EOL}`,
    `${process.cwd()}${path.sep}project${path.sep}source${os.EOL}`,
    `${process.cwd()}${path.sep}project${path.sep}source${path.sep}index.js${os.EOL}`,
]

assert.equal(dirsFound, expectedDirs.join(""))