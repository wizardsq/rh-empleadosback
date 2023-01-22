const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
//const conexion = require('./BD/conecction')
//const Usuarios = require('./models/models.usuarios')
const Routes = require("./routes/routes")
require('dotenv').config();

const app = express();

app.use(cors())
let port = process.env.PORT 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Rutas
app.use("/api", Routes);

app.listen(port, function(){
});