require("dotenv").config()
const connectDb = require("./db/index.js")
connectDb()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expenseRoutes = require("./routes/categoryRoutes");
const ExpenseRoutes=require("./routes/ExpenseRoutes");
const BudegetRoutes=require("./routes/budgetRoutes");
const port=process.env.PORT || 3006



app.use(bodyParser.json());
app.use('/api', expenseRoutes);
app.use('/api', ExpenseRoutes);
app.use('/api', BudegetRoutes);
app.use("/api/users",require("./routes/userRoutes"))
app.listen(port , () => {
  console.log(`server restart ${port}`);


  
});
