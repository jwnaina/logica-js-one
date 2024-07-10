let titulo =  document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function cliqueBotao() {
    return console.log('O botao foi clicado');
}

function alertaBotao() {
    alert('Eu amo JS');
}

function promptBotao() {
    let cidade = prompt('Digite o nome de uma cidade');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function somaDois() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
    
}