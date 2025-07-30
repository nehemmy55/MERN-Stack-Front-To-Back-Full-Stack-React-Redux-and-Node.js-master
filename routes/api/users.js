const  express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');

// const User = require('../../models/User')

//@route  POST api/user
//@desc  regisster user
//@access  public

router.post('/', [
    check('name', 'name is required')
    .not()
    .isEmpty(), 
    check('email', 'please include valid email').isEmail(),
    check('password', 'please use more than 6 characters').isLength({min:6})
],(req,res)=>{
   // console.log(req.body);
   const errors = validationResult(req)
   if (!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
   }

   //see if user exist

   //Get users gravatar

   // Encrypt password

   // Return jsonwebtoken


    res.send('users router');})

module.exports = router;