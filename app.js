// Importo i moduli necessari
const express = require('express');
const path = require('path');

// Importo il router dei post
const postsRouter = require('./routers/posts');

// Inizializzo express
const app = express();
const port = 3000;

// Configurazione per file statici
app.use(express.static(path.join(__dirname, 'public')));

// Middleware per il parsing del body delle richieste
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotta principale
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

// Registro il router dei post con il prefisso /posts
app.use('/posts', postsRouter);

// Il server rimane in ascolto
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});