import { faker } from '@faker-js/faker';
import { Customer } from '../schemas/customerSchema.js';
export const fakeDataController = async (req, res) => {
  try {
    let customersData = [];

    for (let i = 0; i < 10; i++) {
      const customer = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        personalId: faker.string.uuid(),
        baggage: faker.helpers.rangeToNumber({ min: 0 }, { max: 20 }),
      };
      customersData.push(customer);
    }

    const customers = await Customer.insertMany(
      Array.from(
        { length: 100 },
        {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          personalId: faker.string.uuid(),
          baggage: faker.helpers.rangeToNumber({ min: 0 }, { max: 20 }),
        }
      )
    );

    res.status(201).json(customers);
  } catch (e) {
    res.status(500).json(e);
  }
};
