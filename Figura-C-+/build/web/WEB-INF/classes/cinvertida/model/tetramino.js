
function serviceWeb(params) {
    
    fetch('https://tablero.php')//nombre del servicio web
    .then((respuesta) => {
        return respuesta.json();
    }).then((respuesta) => {
        generado.innerHTML = (respuesta);
    })

}