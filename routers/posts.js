// qui andranno tutte le rotte con le operazioni CRUD

const express = require('express')
const router = express.Router();


// index
router.get('/', function (req, res) {
    res.send('Lista dei post');
    });

    // show
    router.get('/:id', function (req, res) {
    res.send('Dettagli del post con codice numero ' + req.params.id);
    });


    // store
    router.post('/', function (req, res) {
    res.send('Creazione nuovo post');

    });


    // update
    router.put('/:id', function (req, res) {
    res.send('Modifica del post con codice numero ' + req.params.id);
    });


    // modify
    router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post  con codice numero ' + req.params.id);
    });


    // delete
    router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post  con codice numero ' + req.params.id);
    });


    module.exports = router;