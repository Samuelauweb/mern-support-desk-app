const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')

const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
// router.post('/', (req, res) => {
//   res.send('Register Route')
// })

router.post('/login', loginUser)
// router.post('/login', (req, res) => {
//   res.send('Login Route')
// })

router.get('/me', protect, getMe)

module.exports = router
