var express = require('express');
var router = express.Router();
var conexion = require("../conexiones/connMySQL");
var controlador = require('../controladores/controladorPelicula');

router.get('/', controlador.listar);
router.get('/formInsertar', controlador.formInsertar);
router.post('/insertar', controlador.insertar);
router.get('/formEditar/:id', controlador.formEditar);
router.post('/editar/:id', controlador.editar);
router.get('/eliminar/:id', controlador.eliminar);

module.exports = router;
