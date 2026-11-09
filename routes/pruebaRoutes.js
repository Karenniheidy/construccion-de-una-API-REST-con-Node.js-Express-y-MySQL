let express = require('express');
let PruebaController = require('../controllers/pruebaController');

let router = express.Router();
let controllerP = new PruebaController();

router.get('/bienvenida', controllerP.bienvenida);
router.get('/verificar', controllerP.verificar);
router.post('/recibir', controllerP.recibir);
router.post('/sumar', controllerP.sumar);

module.exports = router;