// Users
const { User } = require('../models');

const userData =  [
  {
    name: 'User 1',
    password: '$2a$10$e2Sdo5NYI/.btd9sUCIvJe/XjC6zsj1MUMd9MUlty29lwoolyFJTW',
  },
  {
    name: 'User 2',
    password: '$2a$10$e2Sdo5NYI/.btd9sUCIvJe/XjC6zsj1MUMd9MUlty29lwoolyFJTW',
  },
  {
    name: 'User 3',
    password: '$2a$10$e2Sdo5NYI/.btd9sUCIvJe/XjC6zsj1MUMd9MUlty29lwoolyFJTW',
  },
  {
    name: 'User 4',
    password: '$2a$10$e2Sdo5NYI/.btd9sUCIvJe/XjC6zsj1MUMd9MUlty29lwoolyFJTW',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
