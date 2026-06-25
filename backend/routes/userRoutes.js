const express = require('express');
const router = express.Router();

const {Login, SignUp, SignIn} = require('../controllers/userController.js');

router.post('/logout', LogOut);
router.post('/signup', SignUp);
router.post('/singin', SignIn);

module.exports = router;