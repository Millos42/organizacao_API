//Roteador - Define as requisições na rota
const express = require('express'); //importa o express
const router = express.Router();
const dependentesController = require('../controllers/dependentes');

//Criar as rotas HTTP

router.get('/', (req, res) => {
    dependentesController.getAll(req,res)
}); //chama o controlador dependentesController

//Cria a rota para retornar um cliente especifico
router.get('/:id', (req, res) => {
    dependentesController.get(req,res)
});

//Rota POST - Criar / Cadastrar 
router.post('/', (req, res) => { //cria a requisição do tipo POST
    dependentesController.create(req, res)
});

//Rota PUT - Atualizar / Editar
router.put('/:id', (req, res) => {
    dependentesController.update(req, res)
});

//Cria a requisição DELETE - Apagar
router.delete('/:id', (req, res) =>{
    dependentesController.delete(req, res)
});

module.exports = router;