const { Model, DataTypes,  } = require('sequelize')
const conn = require('../BD/conecction')

class Empleado extends Model {}
 Empleado.init({
    Nomina: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    Nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Nombres: DataTypes.STRING(80),
    Primer_apellido: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Segundo_apellido: DataTypes.STRING(50),
    Correo: DataTypes.STRING(100),
    Genero: DataTypes.STRING(2),
    T_cont_administrativo: DataTypes.STRING(10),
    Grado_academico: DataTypes.STRING,
    Rec_dependiente: DataTypes.STRING(10),
    Fac_dept: DataTypes.STRING(50),
    Centro_trabajo: DataTypes.STRING(100),
    Puesto: DataTypes.STRING(100),
    Jefe_inmediato: DataTypes.STRING(100),
    Fecha_Nacimiento: DataTypes.DATEONLY,
    Num_seguro_s: DataTypes.BIGINT,
    Curp: DataTypes.STRING(20),
    Nacionalidad: DataTypes.STRING(20),
    Estado_Civil: DataTypes.STRING(15),
    Direccion: DataTypes.STRING(200),
    Telefono: DataTypes.STRING(20),
    Nivel1: DataTypes.STRING(50),
    Institucion_niv1: DataTypes.STRING,
    Nombre_Titulo1: DataTypes.STRING,
    Nivel2: DataTypes.STRING(50),
    Institucion_niv2: DataTypes.STRING,
    Nombre_Titulo2: DataTypes.STRING,
    Nivel3: DataTypes.STRING(50),
    Institucion_niv3: DataTypes.STRING,
    Nombre_Titulo3: DataTypes.STRING,
    Tipo_contrato: DataTypes.STRING(30),
    Edad: DataTypes.INTEGER(3),
    A_servicio: DataTypes.INTEGER(3),
    Activo: DataTypes.BOOLEAN
}, {
    sequelize: conn,
    modelName: 'empleado'
});



module.exports = Empleado;