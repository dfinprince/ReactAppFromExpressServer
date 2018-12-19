const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3", "list-item4"];
    res.json(list);
    console.log('Sent list of items');
});

// All default gets will return the home page
app.get('*', (req,res) =>{
    console.log(path.join(__dirname+'/../../client/build/index.html'));
    res.sendFile(path.join(__dirname+'/../../client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
