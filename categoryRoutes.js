const express = require('express');
const router = express.Router();
const categorieController = require('../controller/categorieController');
router.post('/categori', categorieController.createExpense);
router.get('/categori', categorieController.getExpenses);
router.delete('/categori/:id',categorieController.deleteExpenseById)



module.exports = router;