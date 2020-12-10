const { Router } = require('express')
const mongoose = require('mongoose')
const uController = require('../controllers/userController')
const path = require('path')
const multer = require('multer')
const Grid = require('gridfs-stream')
const GridFsStorage = require('multer-gridfs-storage')
const crypto = require('crypto')
const conn = require('../db/conn')

const router = Router()

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
router.get('/score/:id',uController.getscores)
// router.get('/:filename',(req,res)=>{
  // gfs.files.findOne({filename: req.params.filename},(err,file)=>{
  //   // if(!file || file.length === 0 ){
  //   //   return res.status(404).json({
  //   //     err: 'No files found'
  //   //   })
  //   // }
  //   const readStream = gfs.createReadStream(file.filename)
  //   readStream.pipe(res)
  // })
// })
// router.get('/file',async(req,res)=>{
//   const files= await gfs.files.find().toArray()
//     // (err,file)=>{
//     // if(!file || file.length === 0 ){
//     //   return res.status(404).json({
//     //     err: 'No files found'
//     //   })
//     // }
//     // const readStream = gfs.createReadStream(file.filename)
//     // readStream.pipe(res)}
//     console.log(files)
//     res.json(files)
// })


module.exports = router;