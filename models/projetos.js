'use strict' // o strict mode obriga o javascript a mostrar alguns erros que passariam batidos

const { Model, DataTypes } = require("sequelize"); // importa o modelo do sequelize

module.exports = (sequelize, DataTypes) => { //exporta o módulo clients para ser utilizado
    class Projetos extends Model{} //define que a classe Clients é estendida do modelo do sequelize

    Projetos.init({ //inicializa a tabela clients passando os dados da tabela  criada no Mysql

      //não passo o ID porque ele está definido como AUTOINCREMENTO no banco de dados  
        nome_projeto: DataTypes.STRING(100),
        tipo_projeto: DataTypes.STRING(100),
        custo: DataTypes.DECIMAL(10,2)
    },
    {
        sequelize, //conexão
        modelName: 'projetos', // nome da tabela no Banco de dados
        timestamps: false //desabilita os campos created at e created at
    });

    return Projetos
}