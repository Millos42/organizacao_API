const Sequelize = require('sequelize'); //importa o Sequelize.
const sequelize = require('../db/db');
const Departamentos = require('../models/departamento');

module.exports = { //exporta o módulo que vai trazer as informações para cada rota
    // SELECT * FROM clients
    async getAll(req, res) {
        const departamentos = await Departamentos(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(departamentos)
    },

    async get(req, res) {
        const departamentos = await Departamentos(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(departamentos)
    },

    async create(req, res) {

        const departamentos = await Departamentos(sequelize, Sequelize.DataTypes).create({

            nome: req.body.nome,
            sigla:req.body.sigla,
            responsavel: req.body.responsavel

        })

        res.status(201).send({
            message: "Departamento cadastrado com sucesso."
        })
    },

    async update(req, res) {

        const departamentos = await Departamentos(sequelize, Sequelize.DataTypes).update({
            nome: req.body.nome,
            sigla:req.body.sigla,
            responsavel: req.body.responsavel
        },
        {

            where: { id: req.params.id }

        });
            res.status(200).send({
            message: ('Departamento atualizado com sucesso.')
        })


    },

    async delete(req,res){
        await Departamentos(sequelize, Sequelize.DataTypes).destroy({
            where: {id: req.params.id}
        })
        res.status(200).send({
            message: ('Departamento excluído com sucesso')
        })
    }


}