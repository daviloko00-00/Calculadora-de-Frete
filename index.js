const promptSync = require("prompt-sync")();
let nomes = [];
let enderecos = [];
let distancias = [];
let situacoes = [];
let valores = [];
let clientes = [];


const fs = require("fs");
const path = require("path");
do{i = 1
    let nome = promptSync(`Digite o nome do clinte ${i}: `);
    let endereco = promptSync(`Digite o endereço do cliente ${i}: `);
    let distancia = promptSync(`Digite a distancia ${i}: `);
    let situacao = promptSync(`Digite a situação do cliente. 1. normal. 2. Urgente (Escreva o número 1 ou 2): `);
    let valor = promptSync(`Digite o valor da viagem ${i} por km em reais: `);
    if ((!isNaN(nome))| !isNaN(endereco)| isNaN(distancia)| isNaN(situacao)|isNaN(valor)){
        console.log("INFORMAÇÕES INCORRETAS. TENTE NOVAMENTE");
    }
    if (situacao == 1){
        situacao = "normal";
        valor = valor;
    }else if (situacao == 2) {
        situacao = "urgente";
        valor = valor + (0.2*valor);
    }
    
        nomes[i] = nome;
        enderecos[i] = endereco;
        distancias[i] = distancia;
        situacoes[i] = situacao;
        valores[i] = valor;
     cliente = console.log(`nome: ${nomes[i]}\n endereço: = ${enderecos[i]}\n distancia ${distancias[i]} \n situação : ${situacoes[i]}\n valor : ${valores[i]} `)
    opcao = promptSync(`Cliente registrado, caso deseja continuar tecle enter, caso não digite "n": `)
    cliente = clientes[i];
    if (opcao == "n"){
        console.log("saindo...")
  
    }




        
    
    

}while( opcao !== "n");

console.log(clientes)

