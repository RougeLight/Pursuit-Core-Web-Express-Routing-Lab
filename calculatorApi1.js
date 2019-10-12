const express = require('express')
const calc = express()
const port = 1660
const  mul = (a, b) => a * b;
const add = (a, b) => a + b;
const div = (a, b) => a / b;
const sub = (a, b) => a - b;


calc.get('/', (req,res) => {
   res.send('This is a calculator')
})

calc.get('/calculator', (req,res) =>)

calc.get('/add',(req,res) => {
   res.send('Addition page')
   let num1 = request.params.num1;
   let num2 = request.params.num2;

   data = {
      num1 = num1, 
   }
})

calc.get('/sub', (req,res) => {
   res.send('Subtraction page')
})

calc.get('/div', (req,res) => {
   res.send('Division page')
})

calc.get('/mul', (req,res) => {
   res.send('Multiplication page')
})

calc.use('*', (req,res) => {
   res.status(404);
   res.send('This was not found')
})

calc.listen(port, () => {
   console.log('Listening to port 1660')
})