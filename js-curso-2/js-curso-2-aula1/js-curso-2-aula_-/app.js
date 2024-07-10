
let numeroSecreto = gerarNumeroAleatorio();

function exibirTela() {
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
}

exibirTela('h1', 'Jogo do número secreto');
exibirTela('p', 'Escolha um numero entre 1 e 10');

function verificarChute ()  {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}