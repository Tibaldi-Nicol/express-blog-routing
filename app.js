


const express = require('express');
const app = express();
const PORT = 3000;

const postsRouter = require('./routers/posts'); // IMPORTA il file posts.js

app.use(express.json()); // Serve per leggere i dati JSON che inviamo con POST/PUT
app.use('/posts', postsRouter); // Tutte le rotte saranno prefissate con /posts


app.listen(PORT,()=>{
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});



