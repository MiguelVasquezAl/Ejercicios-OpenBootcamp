//Instala la dependencia Winston // instalado en la carpeta


// En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

function info_error() {
    throw new Error("Error Fatal!, finalizaste la partida");
}

//Registra el error en un archivo a través de un try...catch
try {
    info_error()
} catch (e) {
    logger.log("error",e.toString);
}