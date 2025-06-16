const promptSync = require("prompt-sync")();
let nomes = [];
let enderecos = [];
let distancias = [];
let situacoes = [];
let valores = [];
let clientes = [];
let valorestotais = []
i = 1

const fs = require("fs");
const path = require("path");
fs.writeFileSync("listagem completa.txt", "", "utf8");
do {
    do {
        let nome = promptSync(`Digite o nome do clinte ${i}: `);
        let endereco = promptSync(`Digite o endereço do cliente ${i}: `);
        let distancia = promptSync(`Digite a distancia ${i}: `);
        let situacao = promptSync(`Digite a situação do cliente. 1. normal. 2. Urgente (Escreva o número 1 ou 2): `);
        let valor = promptSync(`Digite o valor da viagem ${i} por km em reais: `);
        if ((!isNaN(nome)) | !isNaN(endereco) | isNaN(distancia) | isNaN(situacao) | isNaN(valor)) {
            console.log("INFORMAÇÕES INCORRETAS. TENTE NOVAMENTE");
        }
    } while ((!isNaN(nome)) | !isNaN(endereco) | isNaN(distancia) | isNaN(situacao) | isNaN(valor));
    if (situacao == 1) {
        situacao = "normal";
        valortotal = valor * distancia;
    } else if (situacao == 2) {
        situacao = "urgente";
        valortotal = (valor + (0.2 * valor)) * distancia;
    }

    nomes[i] = nome;
    enderecos[i] = endereco;
    distancias[i] = distancia;
    situacoes[i] = situacao;
    valorestotais[i] = valortotal;
    cliente = console.log(`nome: ${nomes[i]}\n endereço: = ${enderecos[i]}\n distancia ${distancias[i]} \n situação : ${situacoes[i]}\n valor total : ${valorestotais[i]} \n valor por km ${valores[i]} `)
    opcao = promptSync(`Cliente registrado, caso deseja continuar tecle enter, caso não digite "n": `)
    cliente = clientes[i];
    if (opcao == "n") {
        console.log("saindo...")

    }

    let textoporlinha = `nome: ${nomes[i]}\n endereço: = ${enderecos[i]}\n distancia ${distancias[i]} \n situação : ${situacoes[i]}\n valor total : ${valorestotais[i]} \n valor por km ${valores[i]}`;
    fs.appendFileSync("listagem completa.txt", textoporlinha, "utf8");
    fs.appendFileSync("listagem completa.txt", "\n\n", "utf8")

    i++;
} while (opcao !== "n");
console.log("arquivo feito com a listagem completa")