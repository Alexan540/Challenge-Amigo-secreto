// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
//Funcion agregar amigo
function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigo = amigoInput.value.trim();

    if (amigo === "") {
        alert("Los campos no pueden estar vacios...");
    } else {
        amigos.push(amigo);
        actualizarLista();
        amigoInput.value = ""; // Limpiar el campo de texto
    }
}
//Funcion para actualizar la lista de amigos
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
//Funcion de sorteo aleatorio
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("El minimo de personas para hacer el sorteo son 2");
        return;
    }

    let sorteados = [...amigos];
    for (let i = sorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sorteados[i], sorteados[j]] = [sorteados[j], sorteados[i]]; // Intercambiar
    }

    mostrarResultado(sorteados);
}
//Funcion para mostrar resultado
function mostrarResultado(sorteados) {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = ""; // Limpiar el resultado anterior

    sorteados.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${amigos[index]} -> ${amigo}`;
        resultadoElemento.appendChild(li);
    });
}
