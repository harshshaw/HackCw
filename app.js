const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
console.log("Starting Server");
app.listen(PORT, () => console.log(`server started on port :${PORT}`));

/* mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (err) return console.log(err);
    console.log("MongoDb connected");
}); */