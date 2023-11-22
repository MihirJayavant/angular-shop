'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.leadSchema = void 0
exports.leadSchema = {
  type: 'array',
  minItems: 0,
  maxItems: 25,
  uniqueItems: true,
  items: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        faker: 'faker.datatype.uuid',
      },
      name: {
        type: 'string',
        faker: 'faker.name.fullName',
      },
      type: {
        type: 'string',
        pattern: 'Lead',
      },
      email: {
        type: 'string',
        format: 'email',
        faker: 'faker.internet.email',
      },
      mobile: {
        type: 'string',
        faker: 'faker.phone.number',
      },
      dateCreated: {
        type: 'string',
        faker: 'faker.date.past',
      },
    },
    required: ['id', 'name', 'type', 'email', 'mobile', 'dateCreated'],
  },
}
