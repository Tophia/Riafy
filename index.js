
const mongoose = require('mongoose');
const users = require('./routes/user');
const express = require('express');
const app = express();

mongoose.connect("mongodb://localhost:27017/Riafy", { useNewUrlParser: true,useUnifiedTopology: true })
.then(res => console.log('Connected to db'))
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(express.json());
app.use('/api/users', users);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
 
 
