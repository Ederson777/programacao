// document.getElementById("titulo").innerHTML = "Opa, tudo bem?";

// document.write("Algum Texto");

// window.alert("Mensagem de Exemplo");

// console.log("A mensagem que eu inserir aqui, aparecerá no console.");


// var nome = "Bonieky";
// var idade = 90;
// alert(nome);

// var x = 10;
// var y = 15;

// var total = x + y;

// alert(total);

// var nome = "Bonieky";
// var idade = 90;

// var total = nome + idade;

// alert(total);
// alert(idade);

// /**
//  * variáveis 
//  * condicionais
//  * 
//  */

// var hora = 17;

// if ( hora == 12 || hora == 18 ) {
//     console.log("Você está na hora do rush");
// }


// var nome = "Ederson";

// console.log(window.nome );

// let nome = "Ederson";

// if (nome == "Ederson") {
//     let idade = 90;
// }

// console.log(idade);

// const nome = "Bonieky";

// const nome = {nome:'Ederson', sobrenome:'Samuel'};
// nome.nome = 'Pedro';

// console.log(nome);

// var pessoa = {nome:'Bonieky', sobrenome:'Lacerda'};
// console.log(pessoa);

// var nome = "Ederson";
// var idade = 90;

// var salvo = true;
// var salvo = false;

// let nome = "Ederson";
// console.log(window.nome);

// let nome = "Ederson";
// console.log(nome);

// const nome = {nome:'Ederson', sobrenome:'Samuel'};
// nome.nome = 'Pedro';
// console.log(nome);

// var nome = "Ederson";
// var idade = 90;
// var salvo = true;
// var cidade;

// var tipo = typeof idade;
// console.log(tipo);

// document.getElementById("titulo").innerHTML = "Olá, Mundo!";

// var titulo = document.getElementById("titulo");
// titulo.innerHTML = "Segundo Título";

// var campo = document.getElementById("campo");
// campo.value = "Ederson";

// var paragrafo = document.getElementById("paragrafo")
// paragrafo.innerHTML = "Novo Conteúdo";


function alterar(titulo) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").innerHTML = titulo;
}

function somar(x, y) {
    let total = x + y;

    return total;
}

var resultado = somar(10, 15);
console.log(resultado);
