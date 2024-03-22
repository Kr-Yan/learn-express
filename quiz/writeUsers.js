const express = require('express')
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.post('/adduser',(req,res) => {
    let newuser=req.body;
    fs.readFile(path.resolve(__dirname,'../data/users.json'),(err,data) =>{
        if (err) res.status(500).json({error:"Failed to read user data"});
        let users= JSON.parse(data);
        users.push(newuser);

        fs.writeFile(path.resolve(__dirname, '../data/users.json'),JSON.stringify(users),(err)=>{
            if (err) res.status(500).json({err:"Failed to write user data"});
            else res.send("User added successfully");
        });
    });
});

console.log(router);
module.exports = router;
