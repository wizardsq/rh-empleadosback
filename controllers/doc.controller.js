const { sequelize } = require('../models/model.document')
const documents = require('../models/model.document')

const ObtenerAllDoc = async (req, res) => {
    console.log(req.params.id)
    documents.findAll({where: {ID_emp: req.params.id}}).then((users) => {
        console.log(users)
        res.json(users)
    }).catch((err) => {
        console.error(err)
        res.status(500).json({ message: "An error occurred" });
    })
}

const CreateDoc = async (req, res) => {
    const doc = req.body;
    console.log(doc)
    documents.create(doc).then(() => 
        res.sendStatus(200)
    ).catch((err) => {
        console.error(err)
        res.status(500).json({ message: "An error occurred" });
    })
}

const UpdateDoc = async (req, res) => {
    const id = req.params.id;
    const doc = req.body;
    console.log(id)
    console.log(doc)
    documents.update(doc, {where: {id: id}}).then(() => 
        res.sendStatus(200)
    ).catch((err) => {
        console.error(err)
        res.status(500).json({ message: "An error occurred" });
    })

}

module.exports = {  ObtenerAllDoc, UpdateDoc, CreateDoc}