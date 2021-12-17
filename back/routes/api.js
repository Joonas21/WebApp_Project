var express = require('express');
var router = express.Router();
const Snippets = require("../models/Snippets")

const data = [
    {"id": 101, "code": "Hello there!"}
    ];

/* GET users listing. */
router.get('/data', function(req, res, next) {
  res.json(data);
});

router.post('/snippets',
  
  (req, res, next) => {

  Snippets.create(
    {
      code: req.body.code,
      comments: req.body.comment
    }
  )

  })

module.exports = router;
