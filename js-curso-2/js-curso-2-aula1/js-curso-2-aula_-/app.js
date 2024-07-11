
let numeroSecreto = gerarNumeroAleatorio();

function exibirTela() {
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
}

exibirTela('h1', 'Jogo do número secreto');
exibirTela('p', 'Escolha um numero entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) { 
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementbyId('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numeroSecreto) { exibirTextoNaTela ('p', '0 número secreto é menor');
            } else {
                    exibirTextoNaTela('p', 'O número secreto é maior');
            }
            tentativas++;
            limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}