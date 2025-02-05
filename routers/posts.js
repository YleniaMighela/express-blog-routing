// qui andranno tutte le rotte con le operazioni CRUD

const express = require('express')
const router = express.Router();


// mi salvo in una costante l'arrai dei post
const dataPosts = require('../data/posts');

// index 
// GET visualizzo tutti gli elementi posts/
router.get('/', function (req, res) {
    // res.send('Lista dei post');
    res.json(dataPosts);
});

// show
// GET visualizzo un unico elemento posts/:id
router.get('/:id', function (req, res) {
    res.send('Dettagli del post con codice numero ' + req.params.id);
});


// store
// POST creo un nuovo elemento posts/
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
    
});


// update
// PUT modifico l'intero elemento posts/:id
router.put('/:id', function (req, res) {
    res.send('Modifica del post con codice numero ' + req.params.id);
});


// modify
//  PATCH modifico parzialmente l'elemento posts/:id
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post  con codice numero ' + req.params.id);
});


// delete
//  DELETE rimuovo un elemento posts/:id
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post  con codice numero ' + req.params.id);
});


module.exports = router;

