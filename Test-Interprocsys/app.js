const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Funcion la conexion !');
});

app.listen(27017, function () {
  console.log('Example app listening on port 27017!');
});

const morgan = require('morgan');
app.use(morgan('tiny'));
//////
const cors = require('cors');
app.use(cors());

// Para acceder al directorio actual
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  // Middleware para Vue.js router modo history
  const history = require('connect-history-api-fallback');
  app.use(history());
  app.use(express.static(path.join(__dirname, 'public')));

  
  // Conexión base de datos
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/interprocsys';
const options = {useNewUrlParser: true, useCreateIndex: true};

// Or using promises
mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  () => { console.log('Conectado a DB') },
  /** handle initial connection error */
  err => { console.log(err) }
);

