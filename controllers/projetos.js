//Cria as funções de controle da busca
const Sequelize = require('sequelize'); //importa o Sequelize.
const sequelize = require('../db/db'); //importa a conexão com o banco de dados.
const Projetos = require('../models/projetos'); //importa a classse Clients da pasta models.

module.exports = { //exporta o módulo que vai trazer as informações para cada rota
    // SELECT * FROM clients
    async getAll(req, res){
        const projetos = await Projetos(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(projetos)
    },

    async get(req,res){
        const projetos = await Projetos(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id}
        })

        res.status(200).send(projetos)
    },
    async create(req, res) {
        const projetos = await Projetos(sequelize, Sequelize.DataTypes).create({
            nome_projeto: req.body.nome_projeto,
            tipo_projeto: req.body.tipo_projeto,
            custo: req.body.custo
        })

        res.status(201).send({
            message: "Projeto cadastrado com sucesso."
        })
    },
    async update(req, res) {
        const projetos = await Projetos(sequelize, Sequelize.DataTypes).update({
            nome_projeto: req.body.nome_projeto,
            tipo_projeto: req.body.tipo_projeto,
            custo: req.body.custo
        },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send({
            message: ('Projeto atualizado com sucesso.')
        })
    },
    async delete(req, res) {
        await Projetos(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: ('Projeto excluído com sucesso.')
        })
    }
};