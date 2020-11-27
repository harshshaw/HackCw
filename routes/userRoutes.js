const { Router } = require('express')
const uController = require('../controllers/userController')

const router = Router()

router.post('/signup',uController.signup_post)
router.post('/login',uController.login_post)
router.get('/logout', uController.logout_get);


module.exports = router;