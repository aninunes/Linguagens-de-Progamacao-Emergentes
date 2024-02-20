// Importando com require
const funcoes = require('./Funcoes');
funcoes.ola();
funcoes.saida("Usei minha função de saida");

// Importando com desestruturação
const { ola, saida } = require('./Funcoes');
ola();
saida("Importei com desestruturação");
