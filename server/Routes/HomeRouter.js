const express = require('express')
const HomeController = require('../Controller/HomeController')
const Router = express.Router()


Router.get('/',HomeController)
 
 module.exports = Router