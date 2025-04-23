


const express = require('express');
const app = express();
const PORT = 3000;


app.get('/',(req, res)=>{
    res.send('Server Express Attivo!')
});

app.listen(PORT,()=>{
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});



