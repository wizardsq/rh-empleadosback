const { Model, DataTypes } = require('sequelize');
const conn = require('../BD/conecction')

class documents extends Model { }

documents.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    SolicitudEmp: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CopiaActaNacimiento: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CurriculumVit: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CopiaActaMatrimonio: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CopiaActaNaciConyuge_Hijos: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CopiaCertificadosPrim_Sec_Prep: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CopiaTituloLic: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CopiaCedulaLic: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CopiaTiutuloMae: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CopiaCedulaMae: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CopiaTituloDoc: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CopiaCedulaDoc: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CopiaCurp: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CopiaCredenElec: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CopiaCalidadMig_Pasaporte: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    CopiaPreafiliacion_IMSS_SS: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    Certificado_Medico: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    Comprobante_Domicilio: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    RFC: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    ID_emp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Empleado', // Nombre del modelo referenciado, asumiendo que ya existe
            key: 'id', // Llave en el modelo referenciado
        }
    }
}, {
    sequelize: conn,
    modelName: 'documents'
});

documents.associate = function (models) {
    documents.belongsTo(models.Empleado, {
        foreignKey: 'ID_emp'
    });
};

module.exports = documents;
