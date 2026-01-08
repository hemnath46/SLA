const express = require('express')
const router=  express.Router()
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middleware/jwtMiddleware')

router.get('/get_user', userController.getUser)
router.post('/create_user', userController.createUser)
router.put('/update_user/:id',jwtMiddleware, userController.updateUser)

// router.delete('/delete_user/:id', userController.deleteUser)
// router.get('/get_user', (req,res)=>{})

module.exports = router;