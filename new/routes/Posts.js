const express = require('express')
const router = express.Router()
const {Income} = require("../models")
const {Expense} = require("../models")


router.get("/",  async (req, res) =>{
    const [listOfIncome, listOfExpense] = await Promise.all([
        Income.findAll(),
        Expense.findAll()
    ]);
    
    res.json({ listOfIncome, listOfExpense });
})

router.post("/createIncome", async (req,res)=>{
    const post = req.body
   await Income.create(post)
   res.json(post)
})

router.post("/createExpense", async (req,res)=>{
    const post2 = req.body
   await Expense.create(post2)
   res.json(post2)
})



module.exports = router