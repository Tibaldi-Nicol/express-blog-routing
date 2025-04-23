const express = require('express');
const router = express.Router();

//mostra i post
router.get('/',(req, res)=>{
    res.send('lista post');
});

// SHOW - mostra 1 post specifico
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Visualizzazione del post ${id}`);
  });
  
  // CREATE - crea un post
  router.post('/', (req, res) => {
    res.send('Creazione di un nuovo post');
  });
  
  // UPDATE - modifica un post esistente
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Aggiornamento del post ${id}`);
  });
  
  // DELETE - elimina un post
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Cancellazione del post ${id}`);
  });
  
  module.exports = router;