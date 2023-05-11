"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const basicCustomerSchema_1 = require("./basicCustomerSchema");
const leadSchema_1 = require("./leadSchema");
const helper_1 = require("./helper");
const json_schema_faker_1 = require("json-schema-faker");
const faker = require("@faker-js/faker");
json_schema_faker_1.JSONSchemaFaker.extend('faker', () => faker);
const compiledBasicCustomerSchema = json_schema_faker_1.JSONSchemaFaker.generate(basicCustomerSchema_1.basicCustomerSchema);
const compiledLeadSchema = json_schema_faker_1.JSONSchemaFaker.generate(leadSchema_1.leadSchema);
const compiledCombinedSchema = (0, helper_1.combineSchema)(compiledBasicCustomerSchema, compiledLeadSchema);
const json = JSON.stringify({ customer: compiledCombinedSchema });
fs.writeFile('./mock-server/buildScripts/db.json', json, err => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('Mock API data generated.');
    }
});
