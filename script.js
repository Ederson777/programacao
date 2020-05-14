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


// function alterar(titulo) {
//     document.getElementById("titulo").innerHTML = titulo;
//     document.getElementById("campo").innerHTML = titulo;
// }

// function somar(x, y) {
//     let total = x + y;

//     return total;
// }

// var resultado = somar(10, 15);
// console.log(resultado);

// function clicou() {
//     document.getElementById("titulo").innerHTML = "Obrigado!";
// }

// function digitou(e) {
//     if(e.keyCode == 13 && e.ctrlkey == true) {
//         let texto = document.getElementById("campo").Value;

//         console.log(texto);
//     }
// }

function azul() {
    limpar();
    document.getElementById("titulo").classList.add('azul');
}

function vermelho() {
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}

function verde() {
    limpar();
    document.getElementById("titulo").classList.add('verde');
}
function limpar() {
    document.getElementById("titulo").classList.remove("azul");
    document.getElementById("titulo").classList.remove("vermelho");
    document.getElementById("titulo").classList.remove("verde");
}

function mostrarTelefone(elemento) {
    elemento.style.display = 'none';
    document.getElementById("telefone").style.display = "block";
}

// array

// let carro1 = 'Palio';
// let carro2 = 'Uno';
// let carro3 = 'Corolla';
// let carro4 = 'Ferrari';

// let carros = ['Palio', 'Uno', 'Corolla', 'Ferrari'];

// let carros = [
//     'Palio',
//     'Uno',
//     'Corolla',
//     'Ferrari'
// ];


// let ingredientes = [
//     ['uva', 'pera', 'maça'],
//     ['arroz', 'macarrão']
// ];

// console.log(ingredientes[1][0] );

// let carro = [
//     'Palio',
//     'Uno',
//     'Corolla',
//     'Ferrari'
// ];

// let carro = {
//     nome:'Fiat',
//     modelo:'Uno',
//     peso:'800kg',
//     ligado:false,
//     desligado:true,
//     ligar:function() {
//         this.ligado = true;
//         console.log("vrum vrum");
//     },
//     desligar:function() {
//         this.desligado = false;
//     },
//     acelerar:function() {
//        if(this.ligado == true) {
//            console.log("Rinnrinnnrinnn");
//        } else {
//            console.log(this.nome+" "+this.modelo+" Não está ligado!");
//        }
//     }
// };

// // console.log(carro['nome']);
// // console.log(carro.nome);

// console.log( "Modelo: "+carro.modelo );

// carro.ligar();
// carro.desligar();
// carro.acelerar();

// let carros = [
//     {nome: 'Fiat', modelo:'Palio'},
//     {nome: 'Fiat', modelo:'Uno'},
//     {nome: 'Toyota', modelo:'Corolla'},
//     {nome: 'Ferrari', modelo:'Spider'}
// ];

// console.log(carros[1].nome);

// let dia = 3;
// let diaNome = '';
// switch(dia) {
//     case 1:
//         diaNome = 'Segunda-Feira';
//         break;
//     case 2:
//         diaNome = 'Terça-Feira';
//         break;
//     case 3:
//         diaNome = 'Quarta-Feira';
//         break;
//     case 4:
//         diaNome = 'Quinta-Feira';
//         break;
//     case 5:
//         diaNome = 'Sexta-Feira';
//         break;
//     case 6:
//         diaNome = 'Sábado'
//         break;
//     case 7:
//         diaNome = 'Domingo';
//         break;
// }

// document.getElementById("dia").innerHTML = "Hoje é: "+diaNome;


// FOR LOOP
// // FOR LOOP ARRAY

// let carros = [ 'Ferrari', 'Fusca', 'Palio', 'Corolla' ];

// let html = '<ul/>';

// for(let i) {
//     html += '<li>'+ +'</li>';
// }

// html += '</ul>';

// document.getElementById("demo").innerHTML = texto;

// let nome = 'Ederson Samuel';

// let resultado = '';

// if(nome.indexOf('Samuel') > -1) {
//     resultado = 'Achou!';
// } else {
//     resultado = 'Não achou!';
// }

// console.log(resultado);

// let nome = 'Ederson Samuel';

// let resultado = nome.slice(-17, -10);

// console.log(resultado);

// let nome = 'Ederson Samuel';
// let resultado = nome.substr();
// console.log(resultado);

// let nome = 'Ederson Samuel';
// let resultado = nome.trim();
// console.log("resultado: ", resultado);

// let nome = 'Ovo;massa;corante;farinha';
// let resultado = nome.split(';');
// console.log(resultado);

// let n = 10;
// let res = n.toString() + 5;
// console.log(res);

// let n = 10.5494943295;
// let res = 'R$ '+n.toFixed(2);
// console.log(res);

// let n = '25.9';
// let res = parseInt(n) + 5;
// console.log(res);


// let n = '25.9';
// let res = parseFloat(n) + 5;
// console.log(res);

// let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
// let res = lista.toString();
// console.log(res);

// let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

// let res = lista.join('-');
// console.log(res);


// let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
// let res = lista.indexOf('Corante');
// console.log(res);

// let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

// lista.pop();

// let res = lista;

// console.log(res);

// let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

// // lista.push('Prato');
// // lista[4] = 'Liquidificador';
// lista[ lista.length ] = 'Liquidificador';

// let res = lista;

// console.log(res);

// let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
// let lista2 = ['Prato', 'Liquidificador', 'Forno'];

// let res = lista.concat(lista2);

// console.log(res);

// let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

// lista.sort();
// lista.reverse();

// let res = lista;

// console.log(res);

// let lista = [45, 4, 9, 16, 25];
// let lista2 = [];

// lista2 = lista.map(function(item) {
//     return item * 2;
// });

// for(let i in lista) {
//     lista2.push(lista[i] * 2);
// }

// let res = lista2;

// console.log(res);

// let lista = [45, 4, 9, 16, 25];
// let lista2 = [];

// lista2 = lista.filter(function(item) {
//     if(item > 20) {
//         return true;
//     } else {
//         return false;
//     }
// });

// let res = lista2;

// console.log(res);

// let lista = [45, 4, 9, 16, 25];
// let lista2 = [];

// lista2 = lista.every(function(item) {
//     if(item > 20) {
//         return true;
//     } else {
//         return false;
//     }
// });

// let res = lista2;

// console.log(res);

let lista = [
    {id:1, nome:'Ederson', sobrenome:'Samuel'},
    {id:2, nome:'Bonieky', sobrenome:'Lacerda'},
    {id:3, nome:'Fulano', sobrenome:'Da Silva'},
    {id:4, nome: 'Prefeitura', sobrenome:'Medicilándia', cnpf:'17.852.788/0001-52'}
];

let pessoa = lista.find(function(item){
    return (item.cnpf == '17.852.788/0001-52') ? true : false;
});

let res = pessoa;

console.log(res);
