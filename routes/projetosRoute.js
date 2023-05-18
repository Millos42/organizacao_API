//Roteador - Define as requisições na rota
const express = require('express'); //importa o express
const router = express.Router();
const projetosController = require('../controllers/projetos');

//Criar as rotas HTTP

router.get('/', (req, res) => {
    projetosController.getAll(req,res)
}); //chama o controlador projetosController

//Cria a rota para retornar um cliente especifico
router.get('/:id', (req, res) => {
    projetosController.get(req,res)
});

//Rota POST - Criar / Cadastrar 
router.post('/', (req, res) => { //cria a requisição do tipo POST
    projetosController.create(req, res)
});

//Rota PUT - Atualizar / Editar
router.put('/:id', (req, res) => {
    projetosController.update(req, res)
});

//Cria a requisição DELETE - Apagar
router.delete('/:id', (req, res) =>{
    projetosController.delete(req, res)
});

module.exports = router;