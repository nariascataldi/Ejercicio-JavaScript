function saludo(){
    var resultado = prompt('Ingrese su nombre: ', '');
        if (resultado != ''){
            document.getElementById('textoSaludo').innerHTML = 'Bienvenido ' + resultado;
        }else{
            document.getElementById('textoSaludo').innerHTML = '';
            alert('Por favor, ingrese un nombre.');
        }
}