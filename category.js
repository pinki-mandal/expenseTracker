const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  value: {
    type: String,
    required:true
  },
  lable: {
    type: String,
    required:true
  },
});
const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;