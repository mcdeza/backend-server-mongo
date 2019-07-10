// REQUIRES
var express = require('express');
var mongoose = require('mongoose');


// Inicializar variables
var app = express();

// Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
})

// Conexión a la BD
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, resp) => {

    if (err) throw express;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

})


// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server corriendo en el puerto 3000: \x1b[32m%s\x1b[0m', 'online');
})