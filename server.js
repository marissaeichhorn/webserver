const express = require('express');
const path = require('path');
const request = require('request');

const port = 8080;

erdbeerchen()

let app = express();
app.listen(port,()=>{console.log("listening to port 8080")});
app.get('/',(req, resp)=>resp.sendFile(path.join(__dirname, '/erdbeere.html')));

/*
function erdbeerchen() {
    const options = {
        'method': 'GET',
        'url': 'https://api.chucknorris.io/jokes/random',
        'headers': {
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
}
 */