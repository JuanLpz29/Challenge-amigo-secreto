let amigos = [];

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
    }
}

function mostrarAmigos() {
    let lista = '';
    for (i = 0; i < amigos.length; i++) {
        lista += `<li>${amigos[i]}</li>`;
    }
    document.getElementById('listaAmigos').innerHTML = lista;
}