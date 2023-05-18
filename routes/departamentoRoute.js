const express = require('express'); //importa o express
const router = express.Router();
const departamentosController = require('../controllers/departamento')

// Criando rotas HTTP
router.get('/', (req, res) => {
    departamentosController.getAll(req,res)
}); //chama o controlador departamentoController

//Cria a rota para retornar um cliente especifico
router.get('/:id', (req, res) => {
    departamentosController.get(req,res)
});

//Rota POST - Criar / Cadastrar
router.post('/', (req, res) => { //cria a requisição do tipo POST
    departamentosController.create(req,res)
});

//Rota PUT - Atualizar / Editar
router.put('/:id', (req, res) => {
    departamentosController.update(req,res)
});


//Cria a requisição DELETE - Apagar
router.delete('/:id', (req, res) => {
    departamentosController.delete(req,res)
});

module.exports = router;


