const express = require('express');
const router = express.Router();
const expenseController = require('../controller/expenseController');
router.post('/expense', expenseController.createexpence);
router.get('/expense', expenseController.getexpence);
router.put('/expense/:id',expenseController.updateExpense);

module.exports=router