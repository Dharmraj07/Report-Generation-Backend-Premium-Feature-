const express = require("express");
const bodyParser = require("body-parser");
//const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");
//const expenseRouter = require('./routes/expenseRoutes');
const userRouter=require('./routes/usersRoutes');
const cors = require("cors");
const Razorpay = require('razorpay');
//const User = require("./models/user");

//const Expense = require("./models/expense");
//const expenseRoutes=require('./routes/expenseRoutes');
const transactionRoutes=require('./routes/transactionRoutes');
const resetpasswordRoutes=require('./routes/resetPasswordRoutes');
const Transaction = require("./models/transaction");
const User = require("./models/users");


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//app.use('/', expenseRouter);
app.use('/',userRouter);
app.use('/',transactionRoutes);
app.use('/',resetpasswordRoutes);
app.listen(8000, () => {
    console.log("port is listening on 8000");
})
