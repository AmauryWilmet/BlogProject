let mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 1,
    unique: true
  },
  content: {
    type: String,
    minLength: 5
  }
});

let Post = module.exports = mongoose.model('Post', postSchema);
