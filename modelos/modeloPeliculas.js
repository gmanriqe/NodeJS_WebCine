var conexion = require("../conexiones/connMySQL");
var Modelo = function(){};

Modelo.listar = function(cb){
      var sql = "SELECT * FROM peliculas";
      conexion.query(sql, cb);
};

Modelo.insertar = function(registro ,cb){
      var sql = "INSERT INTO peliculas set ?";
      conexion.query(sql, registro, cb);
};

Modelo.formEditar = function(id, cb){
      var sql = "SELECT * FROM peliculas WHERE id=?";
      conexion.query(sql, id, cb);
};

Modelo.editar = function(id, data, cb){
      console.log(data);
      var sql = "UPDATE peliculas set titulo=?, director=?, imagen=? WHERE id=?";
      conexion.query(sql,[data.titulo, data.director, data.imagen, id],cb );
};

Modelo.eliminar = function(id, cb){
      var sql = "DELETE FROM peliculas WHERE id=?";
      conexion.query(sql,id,cb);
};

module.exports = Modelo;
