const express = require('express');
const {getUser, getData} = require('../Controller/UserController');
const router = express()


router.get('/user/:id', getUser );
router.get('/metrics/:id', getData  )


module.exports = router