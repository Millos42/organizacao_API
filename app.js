const express = require('express'); //Importa o módulo express e armazena na constante

const app = express();

const departamentosRoute = require('./routes/departamentoRoute')
const dependentesRoute = require('./routes/dependentesRoute')
const funcionariosRoute = require('./routes/funcionariosRoute')
const projetosRoute = require('./routes/projetosRoute')

app.use(express.json());
app.use('/departamento', departamentosRoute);
app.use('/dependentes', dependentesRoute);
app.use('/funcionarios', funcionariosRoute);
app.use('/projetos', projetosRoute);



//caso a rota não seja encontrada
app.use((req,res,next) => {
    const erro = new Error('Rota não encontrada.') /*criando uma constante ERRo do tipo ERROR,
    reaproveitando a estrutura já criada pelo contrutor.*/
    erro.status = 404; //modifica o status para 404 NOT FOUND ou Rota não encontrada
    next(erro) // executa a próxima função
});

app.use((error, req, res, next) => {
    res.status(error.status || 500); //verifica o status de erro
    return res.send({
        erro: { // retorna o erro na estrutura criada
            message: error.message
        }
    })
})

module.exports = app;