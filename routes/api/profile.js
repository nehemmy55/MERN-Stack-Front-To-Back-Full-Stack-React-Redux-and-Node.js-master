const  express = require('express')
const router = express.Router()


//@route api/profile
//@desc  test router
//@access  public

router.get('/', (req,res)=>res.send('profile router'))

module.exports = router;