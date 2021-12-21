const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { checkApiKey } = require('./middlewares/auth.handler');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

<<<<<<< HEAD
const whitelist = ['http://localhost:8080', 'https://myapp.co','http://localhost:4200','http://localhost:4000','http://localhost:3000','https://ee-backend21.herokuapp.com'];
=======
const whitelist = ['http://localhost:8080', 'https://myapp.co','https://ee-backend21.herokuapp.com','http://localhost:3000','http://localhost:4200'];
>>>>>>> api-server
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors(options));

require('./utils/auth');

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Hola este es mi Server en Express. API implementada para la carga de los datos - Edgar Mercado ==> +591 70203103');
=======
  res.send('Server en Express con API implementada para la carga de los datos - [Edgar Mercado] ==> `+591 70203103`');
>>>>>>> api-server
});

app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Hola, prueba de servicio');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' +  port);
});
