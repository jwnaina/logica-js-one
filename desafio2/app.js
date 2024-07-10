function olaMundo () { //exibir Olá, mundo no console
    console.log('Olá, mundo!');
}

olaMundo();

function olaNome(nome) { //olá {nome} no console
    console.log(`Olá, ${nome}`);
}

olaNome("Janaina");

function calcDobro(numero) { //recebe numero de parametro e retorna o dobro
    return numero * 2;
}

let dobro = calcDobro(6);
console.log(dobro);

function calcMedia(a, b, c) { //recebe tres numeros de parametro e retorna a media
    return (a + b + c) / 3;
}

let media = calcMedia(8, 7, 10);
console.log(media);

function encontrarMaior(a, b) { //reebe dois numeros e retorna o maior
   return a > b ? a : b;
}

let maior = encontrarMaior(15, 9); 
console.log(maior);

function quadrado(numero) {
    return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado);