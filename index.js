const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
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
    console.log("Servidor corriendo en el puerto: " + port);
});