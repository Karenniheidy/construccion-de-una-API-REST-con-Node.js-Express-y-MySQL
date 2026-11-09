let express = require('express');
let UsuariosController = require('../controllers/usuariosController');

let router = express.Router();
let usuariosC = new UsuariosController();

router.post('/usuarios', usuariosC.guardar);
router.get('/usuarios', usuariosC.traer);
router.get('/usuarios/:id', usuariosC.buscar);
router.put('/usuarios/:id', usuariosC.actualizar);
router.delete('/usuarios/:id', usuariosC.eliminar);

module.exports = router;