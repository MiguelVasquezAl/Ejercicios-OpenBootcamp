//Instala la dependencia Winston // instalado en la carpeta


// En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
function error() {
    console.error("Error Fatal!, finalizaste la partida");
}
console.log(error());


//Registra el error en un archivo a través de un try...catch
try {
    console.log("Se ejecuta satisfactoriamente");
} catch (error) {
    console.log(error());
}