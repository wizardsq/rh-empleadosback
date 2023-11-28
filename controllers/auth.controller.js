const empleados = require('../models/models.empleados')
const usuarios = require('../models/models.usuarios')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const XLSX = require('xlsx')
const GenerarSQL_csv = require('../middelwares/midd.GSC')

require('dotenv').config();

// Funcion de flecha para la autenticacion y generacion de un token para el login
const Login = async (req, res) => {
    console.log('hola',req.body)
    try {
        const user = await usuarios.findOne({ where: { correo: req.body.correo } })

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const compPassw = await bcrypt.compare(req.body.passw, user.Contrasena)
        if (!compPassw) {
            return res.status(401).json({ message: 'Invalid password' })
        }

        const token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 86400
        })
        const rol = user.ID_rol
        console.log(res)
        res.status(200).json({ token, rol })
    } catch (err) {
        console.log(err)
    }
}

const CreateUser = async (req, res) => {
    const saltRounds = 10
    const passw = req.body.password
    const passwenc = await bcrypt.hash(passw, saltRounds)
    console.log(passwenc)
    try {
        const user = {
            Nombre_usuario: req.body.Nombre,
            Correo: req.body.Correo,
            Contrasena: passwenc,
            ID_rol: req.body.rol
        }
        console.log(user)
        await usuarios.create(user).then(() => {
            res.sendStatus(200)
        }).catch((err) => {
            res.send(err)
        })

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const CreateUserFile = async (req, res) => {
    try {
        const file = req.file
        const workbook = XLSX.read(file.buffer, { type: 'buffer' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_csv(sheet);
        const sql = GenerarSQL_csv(data)

        empleados.sequelize.query(sql).then(resp => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
    } catch (err) {
        console.log(err)
        res.sendStatus(401)
    }
}




module.exports = { Login, CreateUserFile, CreateUser }