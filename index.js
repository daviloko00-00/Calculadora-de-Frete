const promptSync = require("prompt-sync")();

let nomes = [];// declarção das variáveis que serão utilizadas e arrays para armazenamento de dados;

let enderecos = [];
let distancias = [];
let situacoes = [];
let valores = [];
let clientes = [];
let valorestotais = []
i = 1
let opcao;
let nome;
let endereco;
let distancia;
let situacao;
let valor;

const fs = require("fs");
const path = require("path");

fs.writeFileSync("listagem completa.txt", "", "utf8");// inicia um arquivo vazio para armazenar os dados dos clientes
let valortotal;
do {
    do{
        // Entrada de dados do cliente, com validação para garantir que os dados sejam inseridos corretamente.

        let nome = promptSync(`Digite o nome do clinte ${i}: `);
        let endereco = promptSync(`Digite o endereço do cliente ${i}: `);
        let distancia = promptSync(`Digite a distancia ${i}: `);
        let situacao = promptSync(`Digite a situação do cliente. 1. normal. 2. Urgente (Escreva o número 1 ou 2): `);
        let valor = promptSync(`Digite o valor da viagem ${i} por km em reais: `);
        if ((!isNaN(nome)) || !isNaN(endereco) || isNaN(distancia) || isNaN(situacao) || isNaN(valor)) {
            console.log("INFORMAÇÕES INCORRETAS. TENTE NOVAMENTE");
        }
    } while ((!isNaN(nome)) || !isNaN(endereco) || isNaN(distancia) || isNaN(situacao) || isNaN(valor));

    //calculo do valor total da viagem com base na situação do cliente

    if (situacao == 1) {
        situacao = "normal";
        valortotal = valor * distancia;
    } else if (situacao == 2) {
        situacao = "urgente";
        valortotal = valor + 0.2*valor;
    }

    // Armazenamento dos dados inseridos pelo usuário nos arrays correspondentes

    nomes[i] = nome;
    enderecos[i] = endereco;
    distancias[i] = distancia;
    situacoes[i] = situacao;
    valores[i] = valor;
    valorestotais[i] = valortotal;
    // Exibição dos dados do cliente e confirmação de registro
    cliente = console.log(`nome: ${nomes[i]}\n endereço: = ${enderecos[i]}\n distancia ${distancias[i]} \n situação : ${situacoes[i]}\n valor total : ${valorestotais[i].toFixed(2)} \n valor por km ${valores[i].toFixed(2)} `)
    // Adiciona o cliente ao array de clientes

    opcao = promptSync(`Cliente registrado, caso deseja continuar tecle enter, caso não digite "n": `)
    cliente = clientes[i];
    if (opcao == "n") {
        console.log("saindo...")

    }

    // Armazenamento dos dados no arquivo "listagem completa.txt", onde cada cliente é adicionado em uma nova linha com formatação adequada.

    let textoporlinha = `nome: ${nomes[i]}\n endereço: = ${enderecos[i]}\n distancia ${distancias[i]} \n situação : ${situacoes[i]}\n valor total : ${valorestotais[i].toFixed(2)} \n valor por km ${valores[i].toFixed(2)}`;
    fs.appendFileSync("listagem completa.txt", textoporlinha, "utf8");
    fs.appendFileSync("listagem completa.txt", "\n\n", "utf8")

    i++;
} while (opcao !== "n");

// Exibe uma mensagem indicando que o arquivo foi criado com sucesso.

console.log("arquivo feito com a listagem completa")