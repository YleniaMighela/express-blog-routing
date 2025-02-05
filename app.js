const express = require('express')
const app = express()
const port = 3000

// definisco la cartella per i file statici
app.use(express.static('public'));


// definsco la prima rotta con un semplice messaggio
app.get('/', (req, res) => {

    res.send("Server del mio blog")
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    });