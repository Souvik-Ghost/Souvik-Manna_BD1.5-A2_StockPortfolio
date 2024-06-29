const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.get('/', (req, res) => {
  res.send("Welcome to Stock portfolios analysis API!");
});
app.listen(port, () => {
  console.log("Server running on port: " + port);
});

//1
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);
  let stockValue = (marketPrice - boughtAt) * quantity;
  res.send(stockValue.toString());
});
//calculate-returns?boughtAt=300&marketPrice=400&quantity=2

//2
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let totalRreturn = stock1 + stock2 + stock3 + stock4;
  res.send(totalRreturn.toString());
});
//total-returns?stock1=100&stock2=200&stock3=200&stock4=400

//3
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});
//calculate-return-percentage?boughtAt=400&returns=200

//4
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturnPercentage.toString());
});
//total-return-percentage?stock1=10&stock2=20&stock3=20&stock4=40

//5
app.get('/status', (res, req) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  if (returnPercentage > 0) {
    res.send("Profit");
  }
  else {
    res.send("Loss");
  }
});
//status?returnPercentage=90