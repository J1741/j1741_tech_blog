const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User can have MANY Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Post can have ONLY ONE user
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// Post can have MANY comments
// ** refactored so comment belongs to user **
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

// User can have MANY Comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Comment can have ONLY ONE user
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post, Comment }