let listaAmigos = [];

function limparInput(){
    let nome = document.querySelector('input');
    nome.value = '';
}

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (nome.trim() === ''){
        alert('Insira um nome válido.');
    } else if (listaAmigos.includes(nome)){
        alert('Esse nome já foi adicionado à lista, por favor insira outro nome.');
    } else{
        listaAmigos.push(nome);
        console.log(`Nome adicionado: ${nome}`);
    }
    limparInput();
}

console.log(listaAmigos);
