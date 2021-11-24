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

// Post can have MANY Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// Comment can have only ONE Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})

module.exports = { User, Post, Comment }