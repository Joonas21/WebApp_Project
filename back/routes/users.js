var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const {body, validationResult } = require("express-validator");
const User = require("../models/User");
const Snippets = require("../models/Snippets")
const jwt = require("jsonwebtoken");
const validateToken = require("../auth/validateToken.js")
const multer = require("multer")
const storage = multer.memoryStorage();
const upload = multer({storage})


/* GET users listing. */
router.get('/list', validateToken, (req, res, next) => {
  User.find({}, (err, users) =>{
    if(err) return next(err);
    res.json(users);
  })
  
});

router.post('/login', 
  upload.none(),
  (req, res, next) => {
    console.log(req.body);

    User.findOne({username: req.body.password}, (err, user) =>{
    if(err) throw err;
    if(!user) {
      return res.status(403).json({message: "Login failed :("});
    } else {
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch) {
          const jwtPayload = {
            id: user._id,
            username: user.username
          }
          console.log(process.env.SECRET)
          jwt.sign(
            jwtPayload,
            process.env.SECRET,
            {
              expiresIn: 120
            },
            (err, token) => {
              console.log(err)
              res.json({success: true, token});
            }
          );
        }
      })
    }

    })

});


router.get('/register', (req, res, next) => {
});

router.post('/register', 
  body("username").isLength({min: 3}).trim().escape(),
  body("password").isLength({min: 5}),
  (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    User.findOne({username: req.body.username}, (err, user) => {
      if(err) {
        console.log(err);
        throw err
      };
      if(user){
        return res.status(403).json({username: "Username already in use."});
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if(err) throw err;
            User.create(
              {
                username: req.body.username,
                password: hash
              },
              (err, ok) => {
                if(err) throw err;
                return res.redirect("/users/login");
              }
            );
          });
        });
      }
    });
});

router.get('/snippets', (req, res, next) => {
  Snippets.find({}, (err, snippet) => {

    if (err) return next(err);
    if(snippet) {
      return res.json(snippet);
    } else {
      return res.status(404).send("Not found");
    }
  })

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

// https://stackoverflow.com/questions/32129722/pushing-into-an-array-inside-of-a-mongoose-object
router.post('/:id', upload.none(), (req, res, next) => {

  // Here i search the snippet matching the id and add the comments to it
  Snippets.findOneAndUpdate(
    {"_id": req.params.id},
    {$push: {"comments": {comment: req.body.comment}}},
    function(err, model){
      if(err){
        console.log("ERROR: ", err);
        res.send(500, err);
      } else {
        res.status(200).send(model);
      }
    }
  );

});

module.exports = router;
