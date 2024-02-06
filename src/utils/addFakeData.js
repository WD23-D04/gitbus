import { faker } from '@faker-js/faker';
import { Bus } from '../schemas/busSchema.js';
import { Customer } from '../schemas/customerSchema.js';
import { Employee } from '../schemas/employeeSchema.js';
import { Route } from '../schemas/routeSchema.js';
import { Stop } from '../schemas/stopSchema.js';
import { Travel } from '../schemas/travelSchema.js';

const generateRandomNumber = (i) => Math.floor(Math.random() * i);

const busData = Array.from({ length: 100 }, () => ({
  manufactur: faker.vehicle.manufacturer(),
  model: faker.vehicle.model(),
  specialPackage: faker.string.sample({ min: 3, max: 8 }),
  buyedOn: faker.date.recent(),
  seat: faker.airline.seat(),
}));

const customersData = Array.from({ length: 1000 }, () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  personalId: faker.string.uuid(),
  baggage: faker.helpers.rangeToNumber({ min: 0 }, { max: 20 }),
}));

const employeeData = Array.from({ length: 60 }, () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  startedDate: faker.date.past(),
  role: faker.company.buzzNoun(),
  vacationDays: faker.number.int({ min: 15, max: 30 }),
  vacationTaken: Array.from({ length: generateRandomNumber(3) }, () => ({
    start: faker.date.recent(),
    end: faker.date.recent(),
  })),
  leaveDays: Array.from({ length: generateRandomNumber(3) }, () => ({
    start: faker.date.recent(),
    end: faker.date.recent(),
  })),
  services: Array.from({ length: generateRandomNumber(30) }, () =>
    faker.database.mongodbObjectId()
  ),
}));

const routeData = Array.from({ length: 30 }, () => ({
  stops: Array.from({ length: generateRandomNumber(12) }, () =>
    faker.database.mongodbObjectId()
  ),
}));

const stopData = Array.from({ length: 80 }, () => ({
  name: faker.airline.airport(),
  standingRoom: faker.number.int({ max: 15 }),
  notes: Array.from({ length: generateRandomNumber(3) }, () =>
    faker.lorem.paragraph()
  ),
}));

const travelData = Array.from({ length: 100 }, () => ({
  date: faker.date.future(),
  route: faker.database.mongodbObjectId(),
  customers: Array.from({ length: generateRandomNumber(50) }, () => ({
    customer_id: faker.database.mongodbObjectId(),
    from: faker.database.mongodbObjectId(),
    to: faker.database.mongodbObjectId(),
  })),
  price: faker.commerce.price(),
  employees: Array.from({ length: generateRandomNumber(3) }, () =>
    faker.database.mongodbObjectId()
  ),
  bus: faker.database.mongodbObjectId(),
}));

/* 

ATTENTION:

addFakeData is in fact an express controller (with the only goal of adding fake data into mongoDbAtlas)!

*/



export const getFakeData = async (collection) => {
  try {
    const data = await collection.find();
    return data;
  } catch (e) {
    res.status(500).json(e);
  }
};

export const addFakeData = async (req, res) => {
  try {
    const insertData = async (collection, data) =>
      await getFakeData(collection).then((data) =>
        data.length > 3000 ? null : collection.insertMany(data)
      );

    /* const _customers = await getFakeData(Customer)
    .then(data => data.length > 3000 ? null : Customer.insertMany(customersData))
    .catch(error => {
        throw error;
    });
    const employees = !tooManyEmployees && await Employee.insertMany(employeeData);
    const tooManyStops = await getFakeData(Stop)
    const stops = !tooManyStops.length && await Stop.insertMany(stopData);
    const tooManyBus = await getFakeData(But)
    const bus = !tooManyBus.length && await Bus.insertMany(busData);
    const travels = await Travel.insertMany(travelData); */

    res.status(201).json(insertData(Customer, customersData));
    /* res.status(201).json({ customers, employees, stops, bus, travels}); */
  } catch (e) {
    res.status(500).json(e);
  }
};

/* NOT WORKING 
    const routes = await Route.insertMany(routeData);
     */

export const deleteAllFakeData = async (req, res) => {
  try {
    const collection = Customer.deleteMany({});
    res.status(200).json(collection);
  } catch (e) {
    res.status(500).json(e);
  }
};
