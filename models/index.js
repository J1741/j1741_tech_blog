const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// TO-DO: specify table relationships
// user can have MANY posts
// post can have ONLY ONE user
// post can have MANY comments
// comment can have only ONE user

module.exports = { User, Post, Comment };