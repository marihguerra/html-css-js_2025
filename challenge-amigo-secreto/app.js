let listaAmigos = [];

function limparInput(){
    let nome = document.querySelector('input');
    nome.value = '';
}

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if (nome.trim() === ''){
        alert('Insira um nome válido.');
    } else if (listaAmigos.includes(nome)){
        alert('Esse nome já foi adicionado à lista, por favor insira outro nome.');
    } else{
        listaAmigos.push(nome);
        exibirAmigoNaLista();
        console.log(`Nome adicionado: ${nome}`);
    }
    limparInput();
}

function exibirAmigoNaLista(){
    let listaPai = document.getElementById('listaDeAmigos');
    listaPai.innerHTML = '';
    listaAmigos.forEach(nome => {
        let itemLista = document.createElement('li');
        listaPai.appendChild(itemLista);
        itemLista.textContent = nome;
    });
}

console.log(listaAmigos);
