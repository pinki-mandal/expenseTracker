const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  expenseDate: {
    type:String,
    created:Date
  },
  itemName: {
    type: String,
    required:true
  },
  category: {
    type: String,
    required:true
  },
  itemAmount:{
    type:Number,
    required:true
  },
  isDeleted:{
    type:Boolean,
    default:false
  }
} 

);
const Expense = mongoose.model('Expense1', expenseSchema);
module.exports = Expense;