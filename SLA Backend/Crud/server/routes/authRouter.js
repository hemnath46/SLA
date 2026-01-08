const express = require('express')
const router=  express.Router()
const authController = require('../controllers/authController')
const multer  = require('multer')
// const upload = require('../middleware/upload')
const upload = multer({ dest: './uploads/' })
router.post('/userRegister',upload.single('profilePic'),authController.UserRegister)
router.post('/userLogin',authController.UserLogin)

module.exports = router;



