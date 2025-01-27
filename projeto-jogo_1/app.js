alert('Bem vindo ao jogo do número secreto!');

let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log('Número secreto = ', numeroSecreto);
alert('Acabei de pensar em um número entre 1 e 10... você consegue adivinhar qual foi?');
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt('Digite um número: ');
    console.log(`Tentativa ${tentativas}`,'\nNúmero chutado = ', chute, '\nResultado da comparação:', chute == numeroSecreto);
    if (chute == numeroSecreto){
        break;
    } else{
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}, tente novamente...`);
        } else{
            alert(`O número secreto é menor que ${chute}, tente novamente...`);
        }
    }
    tentativas++;
}

let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
alert(`Isso aí! Você adivinhou o número secreto (${numeroSecreto}) em ${tentativas} ${palavraTentativa} :)`);


//inicial 
//if (chute == numeroSecreto) {
//    alert(`Isso aí! Você adivinhou o número secreto! (${numeroSecreto}).`);
//} else {
//    alert('Você errou! O número secreto era '+ numeroSecreto +' e você chutou '+ chute +'.');