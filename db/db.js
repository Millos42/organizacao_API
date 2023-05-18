// Realiza a conexão com o banco de dados;

const {Sequelize} = require('sequelize'); /* importando o conteúdo do sequiliz 
para ser utilizado na conexão */

const sequelize = new Sequelize('organização', 'root', 'root',{
   host: 'localhost',
   dialect: 'mysql',
});/* Cria uma conexão do tipo sequeliza, passando as informações essenciais para a conexão 
com o banco de dados (nome_banco, usuário, senha, local e tipo_banco utilizados).*/

sequelize.authenticate()//chama o método próprio para a autenticação do sequelize;
.then(function() { //verifica se deu certo e envia uma mensagem;
    console.log('Conexão realizada com sucesso!')
})
.catch(function(){ //verifica se deu errado e envia uma mensagem de erro;
    console.log('ERRO: Não foi possível realizar a conexão')
});

module.exports = sequelize; 