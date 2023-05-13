const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  totalBudget: {
    type: String,
    required:true
  }
});
const Expense = mongoose.model('budget', expenseSchema);
module.exports = Expense;