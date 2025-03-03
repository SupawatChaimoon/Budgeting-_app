const express = require('express')
const { getPockets, getUsers, getUserById } = require('../controller/usersController');

//routes object
const router = express.Router();

//routes

// GET ALL USER 
router.get('/usersAll', getUsers);

// GET USERS BY ID
router.get('/user/:id', getUserById);
module.exports = router