const { User } = require('../models');

const userdata = [
  {
    username: 'fred',
    password: 'fredpassword'
  },
  {
    username: 'luke',
    password: 'lukepassword'
  },
  {
    username: 'yoda',
    password: 'yodapassword'
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;