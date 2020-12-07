const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


require("dotenv").config();

const cookieParser = require('cookie-parser');
// const routes = require('./routes/userRoutes')
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
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => {
        console.log('connected to database')

        // console.log(`connected to port ${PORT}`)
    })
    .catch((err) => {
        console.log(err)
    });


// routes
app.get('*', checkUser)

app.get('/', (req, res) => {
    res.send('hello')
})


app.use('/student',require('./routes/userRoutes'))
app.use('/teacher',require('./routes/teacherRoutes'))