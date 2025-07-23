const  express = require('express')
const router = express.Router()


//@route api/user
//@desc  test router
//@access  public

router.get('/', (req,res)=>res.send('user router'))

module.exports = router;