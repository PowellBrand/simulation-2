const express = require('express')
, massive = require('massive')
, bodyParser = require('body-parser')
, cors = require('cors')
, controller = require('./controller/controller')
, dotenv = require('dotenv').config();

//middleware
//74C
const app = express();
app.use(bodyParser.json());
app.use(cors());

//connect to db
massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db',db)
})

//Properties endpoints

//74D-3
app.post('/api/properties', controller.create);
//74D-1
app.get('/api/properties', controller.getAll);
//74D-4
app.delete('/api/properties/:id', controller.delete);
app.get('/api/properties/filter', controller.filter);


//connect to port
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`I'm listening on port: ${port}.`);
})