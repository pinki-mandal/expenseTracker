const Expense = require('../models/category');
const createExpense = async (req, res) => {
  const expense = new Expense({
    value: req.body.value,
    lable: req.body.lable,
  });
  try {
    const newExpense = await expense.save();
    res.status(201).json({ message: "created categories successfully", newExpense })
  } catch (error) {
    res.status(400).json({ message: 'Could not create expense', error: error });
  }
};



const getExpenses = async (req, res) => {
  try {
    const expense = await Expense.find();
    const count = expense.length;
    res.status(200).json({ message:"created categories",count,categories: expense});
  } catch (error) {
    res.status(400).json({ message: 'Could not retrieve expenses', error: error });
  }
};
const deleteExpenseById=async (req, res) => {
  const deletedocument = await Expense.findByIdAndDelete(
    req.params.id,
  );
  res.status(200).json({message:"deleted successfully"})
  // res.send(deletedocument);
};
module.exports = { createExpense, getExpenses, deleteExpenseById };