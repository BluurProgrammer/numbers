const toExtensive = require('./extensiveNumber');
const express     = require('express');
const app         = express();

const port = 3000;
const host = 'localhost';

app.get('/:number', (req,res) => 
{
    const number  = req.params.number;
    let extenso   = toExtensive(number);
    const json    = JSON.stringify({extenso});

    res.set({ 'content-type': 'application/json; charset=utf-8' });
    
    res.end(json);
});

app.listen(port, host , () => 
{
    console.log(`App listening at http://${host}:${port}`);
})

