let amigos = [];

//Agregamos amigos y validamos que no hayan espacios en blanco
function agregarAmigo() {
    if (document.getElementById('amigo').value === '') {
        alert('Debes escribir el nombre de tu amigo!');
        
    
    }else{
        let amigo = document.getElementById('amigo').value;
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        console.log(amigos);
    }
}


