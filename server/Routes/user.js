const express = require('express');
const getUser = require('../Controller/UserController');
const router = express()


router.get('/user/:id', getUser );


module.exports = router