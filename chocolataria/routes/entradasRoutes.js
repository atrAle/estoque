const express = require('express');
const router = express.Router();
const EntradaController = require('../controllers/EntradaController');

// Rota para criar um novo Entrada
router.post('/Entradas', EntradaController.createEntrada);

// Rota para obter todos os Entradas
router.get('/Entradas', EntradaController.getAllEntradas);

// Rota para obter um Entrada pelo ID
router.get('/Entradas/:id', EntradaController.getEntradaById);

// Rota para atualizar um Entrada
router.put('/Entradas/:id', EntradaController.updateEntrada);

// Rota para deletar um Entrada
router.delete('/Entradas/:id', EntradaController.deleteEntrada);

module.exports = router;