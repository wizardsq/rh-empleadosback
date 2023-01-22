const { Sequelize  } = require('sequelize')
require('dotenv').config();

const conn =  new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST, 
    dialect: 'mysql',
})

try {
    conn.authenticate()
    console.log('inicio con exito')
}catch(error){
    console.error('Hubo un error al establecer la conexion', error)
}

module.exports = conn