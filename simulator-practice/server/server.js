const express = require('express');
var server = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const ctrl = require('./ctrl/ctrl')
const app = express();
const port = 3232;


app.use(bodyParser.json());
app.use(cors());

app.get('/api/users', ctrl.read);
app.post('/api/users', ctrl.create);
app.put('/api/users/:id', ctrl.update);
app.delete('/api/users/:id', ctrl.delete);
app.get('http://worldclockapi.com/api/json/est/now',ctrl.read)



app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});