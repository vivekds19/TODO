const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vivekds_18:vivekds8905@vivek.c1qjr.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}