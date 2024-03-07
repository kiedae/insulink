const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');



const app = express();


const PORT = 3001

app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB Connected'))
.catch((err) => console.log('DB not connected', err));


app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

