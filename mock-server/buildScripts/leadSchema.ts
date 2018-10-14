export const leadSchema = {
  type: 'array',
  minItems: 0,
  maxItems: 25,
  uniqueItems: true,
  items: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        faker: 'random.uuid'
      },
      name: {
        type: 'string',
        faker: 'name.findName'
      },
      type: {
        type: 'string',
        pattern: 'Lead'
      },
      email: {
        type: 'string',
        format: 'email',
        faker: 'internet.email'
      },
      mobile: {
        type: 'string',
        faker: 'phone.phoneNumberFormat'
      },
      dateCreated: {
        type: 'date',
        faker: {
          'custom.preDefineDate': []
        }
      }
    },
    required: ['id', 'name', 'type', 'email', 'mobile', 'dateCreated']
  }
}
