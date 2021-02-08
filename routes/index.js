var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hey/:word', (req, res) => {

  console.log(`Word entered: ${req.params.word}`);

  res.status(200).send("entered: " + req.params.word)

})

module.exports = router;
