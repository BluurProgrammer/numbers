const toExtensive = require('./extensiveNumber');
const express     = require('express');
const app         = express();

const PORT = 3000;
const HOST = '0.0.0.0'; // localhost ou 127.0.0.1

app.get('/:number', (req,res) => 
{
    const number  = req.params.number;
    let extenso   = toExtensive(number);
    const json    = JSON.stringify({extenso});

    res.set({ 'content-type': 'application/json; charset=utf-8' });
    
    res.end(json);
});

app.listen(PORT, HOST , () => 
{
    console.log(`App listening at http://${HOST}:${PORT}`);
})

