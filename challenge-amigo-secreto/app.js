let listaAmigos = [];

function limparInput(){
    let nome = document.querySelector('input');
    nome.value = '';
}

function gerarIndice(){
    return parseInt(Math.floor(Math.random() * listaAmigos.length));
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value.trim();
    if (nome === ''){
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

function sortearAmigo(){
    if (listaAmigos != []){
        let indiceAleatorio = gerarIndice();
        let amigoEscolhido = listaAmigos[indiceAleatorio];
        console.log(`Amigo sorteado: ${amigoEscolhido}`);
        let campoResultado = document.getElementById('resultado');
        campoResultado.innerHTML = `Amigo sorteado: ${amigoEscolhido}`;
    } else {
        alert('Você precisa adicionar nomes para serem sorteados.')
    }
}