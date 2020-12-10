const { Router } = require('express')
const tController = require('../controllers/teacherController')

const router = Router()

router.post('/signup',tController.signup_post)
router.post('/login',tController.login_post)
router.get('/logout', tController.logout_get);
router.get('/:id',tController.getallfiles)
router.get('/student/:filename',tController.getfiles)
router.post('/student/score',tController.postScore)


module.exports = router;