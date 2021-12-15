var express = require('express');
var router = express.Router();

const data = [
    {"id": 101, "code": "Hello there!"}
    ];

/* GET users listing. */
router.get('/data', function(req, res, next) {
  res.json(data);
});

module.exports = router;
