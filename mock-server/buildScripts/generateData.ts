import * as chalk from 'chalk'
import * as fs from 'fs'

import { customerSchema } from './customerSchema'

const jsf = require('json-schema-faker')
const faker = require('faker')

jsf.extend('faker', () => {
  faker.custom = {
    preDefineDate: () => {
      const date = new Date(faker.date.past(10).toString())
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
  }
  return faker
})
const compiledGroupSchema = jsf.generate(customerSchema)

const json = JSON.stringify({ customer: compiledGroupSchema })

fs.writeFile('./mock-server/buildScripts/db.json', json, err => {
  if (err) {
    console.log(chalk.default.red(err.message))
  } else {
    console.log(chalk.default.green('Mock API data generated.'))
  }
})
