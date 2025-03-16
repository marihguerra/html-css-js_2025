function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function gerarNumeroAleatorio(){
    let escolhido = parseInt(Math.random() * 10 + 1);
    if (listaNumerosSorteados.length == 10){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(escolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaNumerosSorteados.push(escolhido);
        return escolhido;
    }
}

function limparInput(){
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparInput();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.clear();
}

function mensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número de 1 a 10:');
}

mensagemInicial()

let listaNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log('Tentativa', tentativas, '\nChute =', chute, '\nNúmero secreto =', numeroSecreto, '\nResultado da comparação:', chute == numeroSecreto);

    if (chute == numeroSecreto){
        exibirTexto('h1',`Acertou!  ${numeroSecreto}!`);
        let palavraTentativa = tentativas == 1 ? 'tentativa': 'tentativas'; 
        let mensagemAcerto = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTexto('p', mensagemAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroSecreto > chute){
            exibirTexto('p',`O número secreto é maior que ${chute}, tente novamente...`);
        } else{
            exibirTexto('p',`O número secreto é menor que ${chute}, tente novamente...`);
        }
        tentativas++;
        limparInput();
    }
}

