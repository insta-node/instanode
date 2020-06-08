const express = require('express');
const router = express.Router();
const Home = require('./models/Home');

router.get('/', (req, res, next) => {
  res.json('Hello');
});

module.exports = router;
