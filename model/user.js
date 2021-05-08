const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    company: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
        
    },
    Market_Cap: {
        type: Number,
        required: true
        
    },
    Current_Market_Price_of_stock: {
        type: Number,
        required: true
    },
    StockPE: {
        type: Number,
        required: true
    },
    Dividend_Yield: {
        type: Number,
        required: true
    },
    ROCE: {
        type: Number,
        required: true
    },
    ROE: {
        type: Number,
        required: true
    },
    Debt_to_equity: {
        type: Number,
        required: true
    },
    EPS:{
        type: Number,
        required: true
    },
    Reserves:{
        type: Number,
        required: true
    },
    Debt:{
        type: Number,
        required: true
    },
}));

exports.User = User;
