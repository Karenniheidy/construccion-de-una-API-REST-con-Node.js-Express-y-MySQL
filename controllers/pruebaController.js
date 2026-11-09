class PruebaController {
    bienvenida(req, res) {
        res.json({ mensaje: "Bienvenido a la API REST de la comercializadora de tecnología" });
    }

    verificar(req, res) {
        res.json({ mensaje: "El servidor funciona correctamente", activo: true });
    }

    recibir(req, res) {
        const { nombre, edad } = req.body;
        res.json({ mensaje: `Datos recibidos: nombre ${nombre}, edad ${edad}` });
    }

    sumar(req, res) {
        const { numero1, numero2 } = req.body;
        const resultado = Number(numero1) + Number(numero2);
        res.json({ resultado });
    }
}

module.exports = PruebaController;