const { Model, DataTypes,  } = require('sequelize')
const conn = require('../BD/conecction')


class Roles extends Model  {}
Roles.init({
    Nombre_rol: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
}, {
    sequelize: conn,
    modelName: 'roles'
},
Roles.associations = function(models) {
    Roles.belongsTo(models.Roles, {
        foreignKey: 'ID_rol'
    })
})

Roles.sync({force: false})

module.exports = Roles;

