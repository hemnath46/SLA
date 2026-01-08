const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
// const validateUser = require('../middleware/validateUser');

// router.get('/get_user', controller.getData);
router.post('/create_user', controller.postData);


module.exports = router;