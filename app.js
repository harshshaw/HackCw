const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// const path = require('path')
// const multer = require('multer')
// const Grid = require('gridfs-stream')
// const GridFsStorage = require('multer-gridfs-storage')
// const crypto = require('crypto')


require("dotenv").config();

const cookieParser = require('cookie-parser');
const { checkUser } = require('./middleware/authMiddleware')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const PORT = process.env.PORT || 5000;
console.log("Starting Server");
app.listen(PORT, () => console.log(`server started on port :${PORT}`));

const dbURI = process.env.DB_URI;
// const conn = mongoose.createConnection(dbURI,{useNewUrlParser: true, useUnifiedTopology:true},()=>{
//     console.log('Connected to db for pdf')
// })
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => {
        console.log('connected to database')
    })
    .catch((err) => {
        console.log(err)
    });

// initialize gfs 
// let gfs;
// conn.once('open', () => {
//     gfs = Grid(conn.db,mongoose.mongo)
//     gfs.collection('pdfs')
// })

// const storage = new GridFsStorage({
//     url: dbURI,
//     file: (req, file) => {
//       return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//           if (err) {
//             return reject(err);
//           }
//           const filename = buf.toString('hex') + path.extname(file.originalname);
//           const fileInfo = {
//             filename: filename,
//             bucketName: 'pdfs'
//           };
//           resolve(fileInfo);
//         });
//       });
//     }
//   });
//   const upload = multer({ storage });

// routes
app.get('*', checkUser)

app.get('/', (req, res) => {
    res.send('hello')
})
// app.post('/uploadfiles',upload.single('file'), (req, res) =>{
//     console.log(req.file)
//     res.json(req.file)
// })

app.use('/student',require('./routes/userRoutes'))
app.use('/teacher',require('./routes/teacherRoutes'))