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
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;