let express = require('express');
let ProductosController = require('../controllers/productosController');

let router = express.Router();
let productosC = new ProductosController();

router.post('/productos', productosC.guardar);
router.get('/productos', productosC.traer);
router.get('/productos/:id', productosC.buscar);
router.put('/productos/:id', productosC.actualizar);
router.delete('/productos/:id', productosC.eliminar);
router.get('/productos/agotados', productosC.agotados);
router.get('/productos/bajo-stock', productosC.bajoStock);

module.exports = router;