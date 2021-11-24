const { Post } = require('../models');

const postdata = [
  {
    title: 'Filenaming best practices',
    content: 'Use underscores in filenames instead of spaces!',
    user_id: 1,
    comment_id: 1 
  },
  {
    title: 'Fonts for coding',
    content: 'Use a mono-spaced font like Consolas when writing code',
    user_id: 1,
    comment_id: 2, 
  },
  {
    title: 'Learn Linux',
    content: 'Learn the bash shell, but be careful with rm -rf',
    user_id: 2,
    comment_id: 3
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;