const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/../../client/build')));

// An api endpoint that returns a short list of topics
app.get('/api/getTopics', (req,res) => {
    var topics = ["what-is-react", "function-components", "storing-a-history-of-moves"];
    res.json(topics);
    console.log('Sent list of topics');
});

// All default gets will return the home page
app.get('*', (req,res) =>{
    console.log(path.join(__dirname, '/../../client/build/index.html'));
    res.sendFile(path.join(__dirname, '/../../client/build/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log('App is listening on port ' + port);
