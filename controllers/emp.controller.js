const { sequelize } = require('../models/models.empleados')
const empleados = require('../models/models.empleados')


const ObtenerAllEmp = async (req, res) => {
    empleados.findAll().then((users) => {
        res.json(users)
    }).catch((err) => {
        console.error(err)
        res.status(500).json({ message: "An error occurred" });
    })
}

const CrearEmp = async (req, res) => {
    try {
        const Empleado = {
            Nomina: req.body.Nomina,
            Nombre: req.body.Nombre,
            Nombres: req.body.Nombres,
            Primer_apellido: req.body.Primerapellido,
            Segundo_apellido: req.body.Segundoapellido,
            Correo: req.body.Correo,
            Genero: req.body.Genero,
            T_cont_administrativo: req.body.Contrato,
            Grado_academico: req.body.Grado,
            Rec_dependiente: req.body.Rectoria,
            Fac_dept: req.body.Facultad,
            Centro_trabajo: req.body.Centro,
            Puesto: req.body.Puesto,
            Jefe_inmediato: req.body.Jefe,
            Fecha_Nacimiento: req.body.Fecha || null ,
            Num_seguro_s: req.body.SeguroS || null,
            Curp: req.body.Curp || null,
            Nacionalidad: req.body.Nacionalidad,
            Estado_Civil: req.body.EstadoCivil,
            Direccion: req.body.Direccion,
            Telefono: req.body.Telefono,
            Nivel1: req.body.Nivel1,
            Institucion_niv1: req.body.Institucion1,
            Nombre_Titulo1: req.body.Titulo1,
            Nivel2: req.body.Nivel2,
            Institucion_niv2: req.body.Institucion2,
            Nombre_Titulo2: req.body.Titulo2,
            Nivel3: req.body.Nivel3,
            Institucion_niv3: req.body.Institucion3,
            Nombre_Titulo3: req.body.Titulo3,
            Tipo_contrato: req.body.TipoContrato,
            Edad: req.body.Edad || null,
            A_servicio: req.body.Aservicio || null,
        }
        empleados.create(Empleado).then(()=>{
            res.sendStatus(200)
        }).catch((err) => {
            console.log(err)
            res.sendStatus(401)
        })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const UpdateEmp = async (req, res) => {
    const updateEmp = req.body
    empleados.update(updateEmp, {where: {id: req.params.id}}).
    then(() => res.sendStatus(200)).
    catch((err) => console.log(err))
}

const DeleteEmp = async (req, res) => {
    const DeletEmp = req.body
    console.log(DeletEmp)
    empleados.update(DeletEmp, {where: {id: req.params.id}}).
    then(() => res.sendStatus(200)).
    catch((err) => console.log(err))
}

const ActiveEmp = async (req, res) => {
    const ActivEmp = req.body
    console.log(ActivEmp)
    empleados.update(ActivEmp, {where: {id: req.params.id}}).
    then(() => res.sendStatus(200)).
    catch((err) => console.log(err))
}

const DatosEmp = async (req, res) => {
    empleados.findAll({attributes: ['Genero', 'T_cont_administrativo', 'Grado_academico', 'Rec_dependiente', 'Fac_dept', 'Centro_trabajo', 'Nacionalidad', 'Estado_Civil', 'Tipo_contrato', 'Edad', 'A_servicio'] }).
    then((dato) => {
        res.json(dato)
    }).catch((err) => {
        console.error(err)
        res.status(500).json({ message: "An error occurred" });
    })
}

const InfoEmp = async (req, res) => {
    empleados.findAll({
        attributes: [
            [sequelize.fn('COUNT', sequelize.col('*')), 'Total de empleados'],
            [sequelize.fn('SUM', sequelize.literal('Nacionalidad = "MEXICANA"')), 'Total Empleados Mexicanos'],
            [sequelize.fn('SUM', sequelize.literal('Nacionalidad != "MEXICANA"')), 'Total Empleados Extranjeros'],
            [sequelize.fn('SUM', sequelize.literal('Genero = "M"')), 'Total Empleados Hombres'],
            [sequelize.fn('SUM', sequelize.literal('Genero = "F"')), 'Total Empleados Mujeres'],
        ]
    })
    .then(results => {
        res.json(results[0])
    })
    .catch(error => {
        console.log(error);
    });
}

module.exports = { ObtenerAllEmp, CrearEmp, UpdateEmp, DeleteEmp, DatosEmp, ActiveEmp, InfoEmp }