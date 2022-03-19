'use strict'

const express = require('express');
const userController = require('../controllers/user')



let router = express.Router();
 

router.get('/users', userController.getUsers)







  






module.exports = router;