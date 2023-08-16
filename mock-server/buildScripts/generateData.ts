import * as fs from 'fs'

import { basicCustomerSchema } from './basicCustomerSchema'
import { leadSchema } from './leadSchema'
import { combineSchema } from './helper'
import { JSONSchemaFaker } from 'json-schema-faker'
import * as faker from '@faker-js/faker'

JSONSchemaFaker.extend('faker', () => faker)
const compiledBasicCustomerSchema = JSONSchemaFaker.generate(basicCustomerSchema as any) as any[]
const compiledLeadSchema = JSONSchemaFaker.generate(leadSchema as any) as any[]

const compiledCombinedSchema = combineSchema(compiledBasicCustomerSchema, compiledLeadSchema)

const json = JSON.stringify({ customer: compiledCombinedSchema })

fs.writeFile('./mock-server/buildScripts/db.json', json, err => {
  if (err) {
    console.log(err.message)
  } else {
    console.log('Mock API data generated.')
  }
})
