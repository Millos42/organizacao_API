//Roteador - Define as requisições na rota
const express = require('express'); //importa o express
const router = express.Router();
const funcionariosController = require('../controllers/funcionarios');

//Criar as rotas HTTP

router.get('/', (req, res) => {
    funcionariosController.getAll(req,res)
}); //chama o controlador funcionariosController

//Cria a rota para retornar um cliente especifico
router.get('/:id', (req, res) => {
    funcionariosController.get(req,res)
});

//Rota POST - Criar / Cadastrar 
router.post('/', (req, res) => { //cria a requisição do tipo POST
    funcionariosController.create(req, res)
});

//Rota PUT - Atualizar / Editar
router.put('/:id', (req, res) => {
    funcionariosController.update(req, res)
});

//Cria a requisição DELETE - Apagar
router.delete('/:id', (req, res) =>{
    funcionariosController.delete(req, res)
});

module.exports = router;