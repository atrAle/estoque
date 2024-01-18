const express = require('express');
const router = express.Router();
const SaidaController = require('../controllers/SaidaController');

// Rota para criar um novo Saida
router.post('/Saidas', SaidaController.createSaida);

// Rota para obter todos os Saidas
router.get('/Saidas', SaidaController.getAllSaidas);

// Rota para obter um Saida pelo ID
router.get('/Saidas/:id', SaidaController.getSaidaById);

// Rota para atualizar um Saida
router.put('/Saidas/:id', SaidaController.updateSaida);

// Rota para deletar um Saida
router.delete('/Saidas/:id', SaidaController.deleteSaida);

module.exports = router;