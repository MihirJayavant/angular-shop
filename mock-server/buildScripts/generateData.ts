import chalk from 'chalk'
import * as fs from 'fs'

import { basicCustomerSchema } from './basicCustomerSchema'
import { leadSchema } from './leadSchema'
import { combineSchema } from './helper'

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
const compiledBasicCustomerSchema = jsf.generate(basicCustomerSchema)
const compiledLeadSchema = jsf.generate(leadSchema)
const compiledCombinedSchema = combineSchema(compiledBasicCustomerSchema, compiledLeadSchema)

const json = JSON.stringify({ customer: compiledCombinedSchema })

fs.writeFile('./mock-server/buildScripts/db.json', json, err => {
  if (err) {
    console.log(chalk.red(err.message))
  } else {
    console.log(chalk.green('Mock API data generated.'))
  }
})
