const express = require('express');
const router = express.Router();


router.get('/usernames', (req,res) =>{
    const usernames= req.users.map(user =>({id: user.id, username: user.username}));
    res.json(usernames);
});

router.get('/username/:name',(req,res)=>{
    const {name}= req.params;
    const user= users.find(user=> user.username == name);
    if (user) {
        res.json({id:user.id, username:user.username, email: user.email});
    } else{
        res.status(404).json({error:'User not found'});
    }
    
});

console.log(router);
module.exports = router;


