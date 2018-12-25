export const basicCustomerSchema = {
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
        pattern: 'Customer'
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
      avatar: {
        type: 'string',
        faker: 'image.avatar'
      },
      dateCreated: {
        type: 'date',
        faker: {
          'custom.preDefineDate': []
        }
      },
      billsHistory: {
        type: 'array',
        minItems: 1,
        maxItems: 10,
        uniqueItems: true,
        items: {
          type: 'object',
          properties: {
            billId: {
              type: 'string',
              faker: 'random.uuid'
            },
            billAmount: {
              type: 'number',
              faker: 'finance.amount'
            },
            date: {
              type: 'string',
              faker: {
                'custom.preDefineDate': []
              }
            }
          },
          required: ['billId', 'billAmount', 'date']
        }
      }
    },
    required: ['id', 'name', 'type', 'email', 'mobile', 'dateCreated', 'avatar', 'billsHistory']
  }
}
