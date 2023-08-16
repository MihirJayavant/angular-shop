"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicCustomerSchema = void 0;
exports.basicCustomerSchema = {
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
                pattern: 'Customer',
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
            avatar: {
                type: 'string',
                faker: 'faker.image.avatar',
            },
            dateCreated: {
                type: 'string',
                faker: 'faker.date.past',
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
                            faker: 'faker.random.uuid',
                        },
                        billAmount: {
                            type: 'number',
                            faker: 'faker.finance.amount',
                        },
                        date: {
                            type: 'string',
                            faker: 'faker.date.past',
                        },
                    },
                    required: ['billId', 'billAmount', 'date'],
                },
            },
        },
        required: ['id', 'name', 'type', 'email', 'mobile', 'dateCreated', 'avatar', 'billsHistory'],
    },
};
