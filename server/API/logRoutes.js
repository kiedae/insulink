const express = require('express');
const router = express.Router();
const Log = require('../Models/log');

router.post('/create-log', async (req, res) => {
    // checks if the user is logged in
    const loggedIn = req.user;

    if(!loggedIn) {
        res.console.error("Must Be Logged in to Create or View Logs");
    } 

    //create the log if logged in 
    Log.Create
})
