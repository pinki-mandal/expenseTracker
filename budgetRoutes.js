const express = require('express');
const router = express.Router();
const budgetController = require('../controller/budgetController');
router.post('/budget',budgetController.createBudget)
router.get('/budget', budgetController.getBudget);

module.exports=router