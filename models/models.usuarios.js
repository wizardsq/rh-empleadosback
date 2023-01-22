const { Model, DataTypes,  } = require('sequelize')
const conn = require('../BD/conecction')


class Usuarios extends Model  {}
Usuarios.init({
    Nombre_usuario: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Correo:{ 
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Contrasena: {
        type: DataTypes.STRING(180),
        allowNull: false
    },
    ID_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
            model: 'Roles',
            key: 'id'
        }
    },
    token: {
        type: DataTypes.STRING(150)
    }
}, {
    sequelize: conn,
    modelName: 'usuarios'
})

Usuarios.sync({force: false})

module.exports = Usuarios;


