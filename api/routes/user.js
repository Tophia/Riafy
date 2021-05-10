const { User } = require('../model/user');
const express = require('express');
const fs = require('fs');
const router = express.Router();
router.get('/', async function(req, res, next) {
    try {
        res.json(await User.findOne());
      } catch (err) {
        console.error('Error in fetching Company', err.message);
        next(err);
      }
    });

router.post('/', async (req, res) => {
    

    let user = await User.findOne({ company: req.body.company });
    if (user) {
        return res.status(400).send('That company already exisits!');
    } else {
        user = new User({
            company: req.body.company,
            Market_Cap: req.body.Market_Cap,
            Current_Market_Price_of_stock: req.body.Current_Market_Price_of_stock,
            StockPE: req.body.StockPE,
            Dividend_Yield: req.body.Dividend_Yield,
            ROCE: req.body.ROCE,
            ROE: req.body.ROE,
            Debt_to_equity: req.body.Debt_to_equity,
            EPS: req.body.EPS,
            Reserves: req.body.Reserves,
            Debt: req.body.Debt
        });
        await user.save();
        res.send(user);
    }
});
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await User.findOneAndDelete(req.params.id));
    } catch (err) {
      console.error('Error while deleting Company', err.message);
      next(err);
    }
  });

module.exports = router;
 
