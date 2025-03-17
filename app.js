let amigos = [];
let lista = '';

//Agregamos amigos y validamos que no hayan espacios en blanco
function agregarAmigo() {
    if (document.getElementById('amigo').value === '') {
        alert('Debes escribir el nombre de tu amigo!');
        
    }else if(amigos.includes(document.getElementById('amigo').value)){
        alert('Este amigo ya fue agregado!');

    }else{
        let amigo = document.getElementById('amigo').value;
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        console.log(amigos);
        mostrarAmigos(); // Se llama a la función para mostrar los amigos
    }
}

function mostrarAmigos() {
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; //limpiamos la lista de amigos a mostrar para evitar duplicados.

    let contenidoLista = ''; // Variable para construir el contenido de la lista, ya que no se puede concatenar directamente a lista.innerHTML

    for (i = 0; i < amigos.length; i++) {
        contenidoLista += `<li>${amigos[i]}</li>`;
    }
    lista.innerHTML = contenidoLista; // Asignamos el contenido construido a la lista
}

function sortearAmigo(){
    if(amigos.length < 2){
        alert('Debes agregar al menos dos amigos para sortear!');
    }else{
        //ELEGIR AL QUE SERÁ MI AMIGO SECRETO AL AZAR
        let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;
        console.log(amigoSecreto);
    }
}