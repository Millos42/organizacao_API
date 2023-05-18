'use strict' // o strict mode obriga o javascript a mostrar alguns erros que passariam batidos

const { Model, DataTypes } = require("sequelize"); // importa o modelo do sequelize

module.exports = (sequelize, DataTypes) => { //exporta o módulo clients para ser utilizado
    class Dependentes extends Model{} //define que a classe Clients é estendida do modelo do sequelize

    Dependentes.init({ //inicializa a tabela clients passando os dados da tabela  criada no Mysql

      //não passo o ID porque ele está definido como AUTOINCREMENTO no banco de dados  
        nome: DataTypes.STRING(50),
        idade: DataTypes.SMALLINT,
        tipo: DataTypes.STRING(50),
        statuss: DataTypes.STRING(50),
        id_funcionario: DataTypes.SMALLINT
    },
    {
        sequelize, //conexão
        modelName: 'dependentes', // nome da tabela no Banco de dados
        timestamps: false //desabilita os campos created at e created at
    });

    return Dependentes
}