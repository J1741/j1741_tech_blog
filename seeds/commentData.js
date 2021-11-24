const { Comment } = require('../models');

const commentdata = [
  {
    content: 'you can also use camelCase for filenames',
    user_id: 3,
    post_id: 1,
  },
  {
    content: 'Consolas is my favorite font',
    user_id: 3,
    post_id: 2,
  },
  {
    content: 'What is your favorite Linux distro?',
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;