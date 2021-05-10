
const mongoose = require('mongoose');
const users = require('./routes/user');
const express = require('express');
const app = express();
const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 80;

// place holder for the data
const users = [
  {
    Company: "first1",
    Market_Cap: "11111",
    Current_Market_Price_of_stock: "1111",
    StockPE: "11111",
    Dividend_Yield:"11111",
    ROCE:"11111",
    ROE:"11111",
    Debt_to_equity:"11111",
    EPS:"11111",
    Reserves:"11111",
    Debt:"11111"
  },
  {
    Company: "first1",
    Market_Cap: "11111",
    Current_Market_Price_of_stock: "1111",
    StockPE: "11111",
    Dividend_Yield:"11111",
    ROCE:"11111",
    ROE:"11111",
    Debt_to_equity:"11111",
    EPS:"11111",
    Reserves:"11111",
    Debt:"11111"
  },
  {
    Company: "first1",
    Market_Cap: "11111",
    Current_Market_Price_of_stock: "1111",
    StockPE: "11111",
    Dividend_Yield:"11111",
    ROCE:"11111",
    ROE:"11111",
    Debt_to_equity:"11111",
    EPS:"11111",
    Reserves:"11111",
    Debt:"11111"
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
mongoose.connect("mongodb://localhost:27017/Riafy", { useNewUrlParser: true,useUnifiedTopology: true })
.then(res => console.log('Connected to db'))
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(express.json());
app.use('/api/users', users);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
 
 
