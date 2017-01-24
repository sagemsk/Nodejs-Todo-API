const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;