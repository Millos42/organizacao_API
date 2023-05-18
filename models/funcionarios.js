//Cria o modelo da estrutura da tabela pedido do banco de dados

'use strict' //O strict mode obriga o javascript a mostrar alguns erros que passariam batidos

const { Model, DataTypes } = require('sequelize'); //Importa o modelo do sequelize

module.exports = (sequelize, DataTypes) => { //Exporta o módulo pedidos para ser utilizado
    class Funcionarios extends Model { } //Define que a classe Pedidos é estendida do modelo do sequelize

    Funcionarios.init({ //Inicializa a tabela classe Funcionarios passando os dados da tabela criada no Mysql

        //Não passo o ID porque ele está definido como AUTOINCREMENTO no banco de dados
        nome: DataTypes.STRING(50),
        endereco: DataTypes.STRING(50),
        cargo: DataTypes.STRING(50),
        salario: DataTypes.DECIMAL(10,2),
        id_departamento: DataTypes.SMALLINT
    },
        {
            sequelize, //Conexão
            modelName: 'funcionarios', //Nome da tabela no banco de dados
            timestamps: false //Desabilita os campos created at e updated at
        });

    return Funcionarios
};