const express = require('express')
const cors = require('cors')

require('./db/conn')
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


// routes
app.get('*', checkUser)

app.get('/', (req, res) => {
    res.send('hello')
})


app.use('/student', require('./routes/userRoutes'))
app.use('/teacher', require('./routes/teacherRoutes'))