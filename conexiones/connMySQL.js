var mysql = require("mysql"),
      opciones = {
            port: 3306,
            host: "localhost",
            user: "root",
            password: "12345678",
            database: "dbcine",
      };

      fnConectado = function(err){
            if(err){
                  console.log("Error = " + err);
            } else{
                  console.log("MySQL conectado en el PID = " + conexion.threadId);
            }
      };

var conexion = mysql.createConnection( opciones);
conexion.connect(fnConectado);

module.exports = conexion;
