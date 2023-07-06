import {compileFromFile } from '../src/index'
import * as fs from 'fs'

// compile from file
const file = "leading_num.json"
compileFromFile(file)
  .then(ts => fs.writeFileSync('foo.d.ts', ts))
console.log("Done:", file)