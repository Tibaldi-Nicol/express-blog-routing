const express = require('express');
const router = express.Router();

//mostra i post
router.get('/',(req, res)=>{
    res.send('lista post');
});