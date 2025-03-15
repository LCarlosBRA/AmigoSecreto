let amigos = [];

function adicionarAmigo(){
    let nome = document.querySelector("input");
    let resultado = document.getElementById("resultado");   
    resultado.innerHTML = '';
    if (nome.value === '') {
        alert("Por favor, insira um nome.");
    } else{
        amigos.push(nome.value);
        nome.value = '';
        atualizarLista();
    }
}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos");    
    lista.innerHTML = "";
    for(i = 0; i <= (amigos.length - 1) ; i++){
        let elementoLista = document.createElement("li");
        elementoLista.textContent = amigos[i];
        lista.appendChild(elementoLista);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, adicione pelo menos 2 amigos antes de sortear.');
    } else {
        let sortearAmigo = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').innerHTML = 'O amigo secreto sorteado é: ' + sortearAmigo;
        lista.innerHTML = '';
    }
}