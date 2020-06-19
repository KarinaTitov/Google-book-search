const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  img: { type: String, required: true},
  title: { type: String, required: true },
  description: String,
  author: { type: String, required: true },
  url: {type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;