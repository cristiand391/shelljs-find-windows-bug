const shelljs = require('shelljs')
const path = require('node:path')
const assert = require('node:assert/strict');

const dirsFound = shelljs.find(`${process.cwd()}${path.sep}project`).stdout
const expectedDirs = [
    `${process.cwd()}/project\n`,
    `${process.cwd()}/project/source\n`,
    `${process.cwd()}/project/source/index.js\n`,
].map(dir => dir.replace(/\\/g, '/'));

assert.equal(dirsFound, expectedDirs.join(""))