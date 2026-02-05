/**
 * DESAFIO: Sistema de Validação de Compra de Games
 * Conceitos: Conversão de tipos, Operadores Aritméticos e Lógica de Permissão.
 */

let precoInput = "100"; 
let saldoInput = "150";
let idadeUsuario = 15;
let jogoClassificacao = 16;

// 1. Convertendo strings para números e calculando taxa
let precoNumerico = +precoInput;
let saldoNumerico = +saldoInput;
let precoComImposto = precoNumerico * 1.10; 

// 2. Lógica de permissão: Dinheiro suficiente E idade permitida
let podeComprar = (saldoNumerico >= precoComImposto && idadeUsuario >= jogoClassificacao) 
    ? 'Pode comprar o jogo!' 
    : 'Venda proibida.';

console.log(podeComprar);
