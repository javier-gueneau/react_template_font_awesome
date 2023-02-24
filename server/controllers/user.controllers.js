const User = require('../models/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const {secret}=require('../config/jwt.config')

module.exports.checkAuth =(req,res)=>{
  jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
    if (err) { 
      res.status(401).json({verified: false});
    } else {
      res.json({msg:'Token OK'})
    }
  });
}

module.exports.registerUser = (req, res) => {
  //req.body contendrá los datos del formulario desde Postman o desde React
    console.log(req.body)
    const user = new User(req.body);
    user
      .save()
      .then(() => {
          res.json({ msg: "success!", user: user });
      })
      .catch(err => res.json(`This is error in User-Controller (Javier), ${err}`));
  };


module.exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user === null) {
          res.status(401).json({ msg: "User not found" });
        } else {
          bcrypt
            .compare(req.body.password, user.password)
            .then(passwordIsValid => {
              if (passwordIsValid) {
                  const newJWT = jwt.sign({
                      _id: user._id
                },secret)

                res
                  .cookie("usertoken", newJWT, secret, {
                    httpOnly: true
                  })
                  .json({user,msg: "success!" }); // aqui está la madre del cordero , para devolver datos a Front.
                
                console.log(user)

              } else {
                res.status(401).json({ msg: "Invalid data" });
              }
            })
            .catch(err => res.status(400).json({ msg: "invalid login attempt" }));
        }
      })
      .catch(err => res.json('there is an error ESTE', err));
  };