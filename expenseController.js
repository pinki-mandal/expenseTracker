// const Expense = require('../models/Expense');
const Expense1 = require('../models/expenseModel');
const createexpence = async (req, res) => {
  const expense = new Expense1({
    expenseDate:req.body.expenseDate,
    itemName: req.body.itemName,
    category: req.body.category,
    itemAmount: req.body.itemAmount
  });
  try {
    const newExpense = await expense.save();
    res.status(201).json({ message: "created expence successfully", newExpense })
  } catch (error) {
    res.status(400).json({ message: 'Could not create expense', error: error });
  }
};
const getexpence = async (req, res) => {
  try {
    const expense = await Expense1.find();
    const count = expense.length;
    res.json({ message:"created expense",count, expence: expense })
  } catch (error) {
    res.status(400).json({ message: 'Could not retrieve expenses', error: error });
  }
};


const updateExpense=async (req, res) => {
    const updatedDocument = await Expense1.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send({message:"updated successfuuly"});
  };


module.exports = { createexpence, getexpence, updateExpense };