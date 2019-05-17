require('dotenv').config();
const express = require('express');
const ctrl = require('./controller')
const massive = require('massive')

//========Setting up server=========
const app = express()
// ====Middleware===
app.use(express.json());


// ======.Env=========
const {
  SERVER_PORT, CONNECTION_STRING
} = process.env;


// =======Database Connection======
massive(CONNECTION_STRING)
  .then(dbInstance => {
  app.set('db', dbInstance);
console.log('Pepe Base Connected')
})
.catch(error => {
  if(error) throw error;
})

// =========Endpoints===========
app.post ('/api/updateProduct', ctrl.addproduct)
// app.delete('/api/deleteForm', ctrl.deletForm)


// =========App Listening===========
app.listen(SERVER_PORT, () => {
  console.log('Pepe Memein on 4000')
}) 