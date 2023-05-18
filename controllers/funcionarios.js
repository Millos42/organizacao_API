//Cria as funções de controle da busca
const Sequelize = require('sequelize'); //importa o Sequelize.
const sequelize = require('../db/db'); //importa a conexão com o banco de dados.
const Funcionarios = require('../models/funcionarios'); //importa a classse Clients da pasta models.

module.exports = { //exporta o módulo que vai trazer as informações para cada rota
    // SELECT * FROM clients
    async getAll(req, res){
        const funcionarios = await Funcionarios(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(funcionarios)
    },

    async get(req,res){
        const funcionarios = await Funcionarios(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id}
        })

        res.status(200).send(funcionarios)
    },
    async create(req, res) {
        const funcionarios = await Funcionarios(sequelize, Sequelize.DataTypes).create({
            nome: req.body.nome,
            endereco: req.body.endereco,
            cargo: req.body.cargo,
            salario: req.body.salario,
            id_departamento: req.body.id_departamento
        })

        res.status(201).send({
            message: "Funcionario cadastrado com sucesso."
        })
    },
    async update(req, res) {
        const funcionarios = await Funcionarios(sequelize, Sequelize.DataTypes).update({
            nome: req.body.nome,
            endereco: req.body.endereco,
            cargo: req.body.cargo,
            salario: req.body.salario,
            id_departamento: req.body.id_departamento
        },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send({
            message: ('Funcionario atualizado com sucesso.')
        })
    },
    async delete(req, res) {
        await Funcionarios(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: ('Funcionario excluído com sucesso.')
        })
    }
};