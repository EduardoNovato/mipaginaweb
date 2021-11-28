const express = require('express');
const app = express();

const port = process.env.PORT || 8989; //Puerto lo defini en 8080 pero tu puedes poner el puerto que quieras 

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//direccion statica que inicia el servidor en la carpeta public
app.use(express.static(__dirname + "/public"));

//rutas de la web
app.use('/', require('./router/rutas-web'));

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
});

//para prender el servidor usamos Nodemon (importante instalarlo de manera global)
//comando para instalar Nodemon de manera global (npm install -g nodemon)
//comando para correr el servidor de Nodemon (npm run dev)