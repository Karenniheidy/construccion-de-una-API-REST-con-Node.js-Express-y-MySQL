let express = require('express');
let cors = require('cors');
let mysql = require('mysql2');

let pruebaRoutes = require('./routes/pruebaRoutes');
let usuariosRoute = require('./routes/usuariosRoute');
let productosRoute = require('./routes/productosRoute');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/api', pruebaRoutes);
app.use('/api', usuariosRoute);
app.use('/api', productosRoute);

app.listen(PORT, () => {
    console.log("servidor en ejecucion " + PORT);
});