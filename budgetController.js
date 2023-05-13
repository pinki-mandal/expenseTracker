const budget = require('../models/BudgetModel');

const createBudget = async (req, res) => {
  const expense = new budget({ 
    totalBudget: req.body.totalBudget
    // itemName:req.body.itemName
  });
  try {
    const newExpense = await expense.save();
    res.status(201).json({ message: "created budget successfully", newExpense })
  } catch (error) {
    res.status(400).json({ message: 'Could not create expense', error: error });
  }
};

const getBudget = async (req, res) => {
  try {
    const expense = await budget.find();
    res.json({ message: "created budget", budget: expense })
  } catch (error) {
    res.status(400).json({ message: 'Could not retrieve expenses', error: error });
  }
};

module.exports = { createBudget, getBudget };