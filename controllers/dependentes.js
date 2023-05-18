const Sequelize = require('sequelize'); //importa o Sequelize.
const sequelize = require('../db/db');
const Dependentes = require('../models/dependentes');

module.exports = { //exporta o módulo que vai trazer as informações para cada rota
    // SELECT * FROM clients
    async getAll(req, res) {
        const dependentes = await Dependentes(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(dependentes)
    },

    async get(req, res) {
        const dependentes = await Dependentes(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(dependentes)
    },

    async create(req, res) {

        const dependentes = await Dependentes(sequelize, Sequelize.DataTypes).create({

            nome: req.body.nome,
            idade: req.body.idade,
            tipo: req.body.tipo,
            statuss: req.body.statuss,
            id_funcionario: req.body.id_funcionario 
        })

        res.status(201).send({
            message: "Dependentes cadastrado com sucesso."
        })
    },

    async update(req, res) {

        const dependentes = await Dependentes(sequelize, Sequelize.DataTypes).update({
            nome:req.body.nome,
            idade:req.body.idade,
            tipo: req.body.tipo,
            statuss: req.body.statuss,
            id_funcionario: req.body.id_funcionario
        },
        {

            where: { id: req.params.id }

        });
            res.status(200).send({
            message: ('Dependentes atualizado com sucesso.')
        })


    },

    async delete(req,res){
        await Dependentes(sequelize, Sequelize.DataTypes).destroy({
            where: {id: req.params.id}
        })
        res.status(200).send({
            message: ('Dependentes excluído com sucesso')
        })
    }


}