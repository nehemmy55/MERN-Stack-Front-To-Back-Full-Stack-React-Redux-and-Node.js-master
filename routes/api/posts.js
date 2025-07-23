const  express = require('express')
const router = express.Router()


//@route api/posts
//@desc  test router
//@access  public

router.get('/', (req,res)=>res.send('posts router'))

module.exports = router;