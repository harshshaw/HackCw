const { Router } = require('express')
const mongoose = require('mongoose')
const uController = require('../controllers/userController')
const path = require('path')
const multer = require('multer')
const Grid = require('gridfs-stream')
const GridFsStorage = require('multer-gridfs-storage')
const crypto = require('crypto')

const router = Router()

const conn = mongoose.createConnection(process.env.DB_URI,{useNewUrlParser: true, useUnifiedTopology:true},()=>{
    console.log('Connected to db for pdf')
})

// initialize gfs 
let gfs;
conn.once('open', () => {
    gfs = Grid(conn.db,mongoose.mongo)
    gfs.collection('pdfs')
})

const storage = new GridFsStorage({
    url: process.env.DB_URI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'pdfs'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });


router.post('/signup',uController.signup_post)
router.post('/login',uController.login_post)
router.get('/logout', uController.logout_get);
router.post('/uploadfiles',upload.single('file'),uController.upload_post)


module.exports = router;