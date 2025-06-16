let nomes = [];
let enderecos = [];
let distancias = [];
let situações = [];


const fs = require("fs");
const promptSync = require("prompt-sync");
const path = require("path");
do{i = 1
    let nome = promptSync(`Digite o nome do clinte ${i}: `)
    let endereco = promptSync(`Digite o endereço do cliente ${i}: `)
    let distancia = promptSync(`Digite a distancia ${i}: `)
    let situacao = promptSync(`Digite a situação do cliente. 1. nomrmal. 2. Urgente: `)
    let valor = promptSync(`Digite o valor da viagem ${i} por km em reais: `)
        nomes[i] = nome;
        enderecos[i] = endereco;
        distancias[i] = distancia;
        situacoes[i] = situacao;

        
    
    

}while( opcao != n)

