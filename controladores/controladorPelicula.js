var modelo = require("../modelos/modeloPeliculas");

var Controlador = function(){};

Controlador.listar = function(req, res, next){
      modelo.listar(function(err, registros){
            // console.log("primera vez: " + registros);
            if(err){
                  console.log(err);
            }else{
                  var datos = {
                        registros: registros // ??
                  };
                  res.render("index",datos);

                  // console.log("segunda vez: " + registros);
                  // console.log(datos);
            }
      });
};

Controlador.formInsertar = function(req, res, next){
      res.render("formInsertar");
};

Controlador.insertar = function(req, res, next){

      var registro = {
            titulo : req.body.titulo,
            director : req.body.director,
            trailer : req.body.trailer,
            imagen : req.body.imagen
      };

      modelo.insertar(registro, function(err){
            if(err){
                  console.log(err);
            }else{
                  res.redirect("/");
            }

      });
};

Controlador.formEditar = function(req, res, next){
            var id = req.params.id;

      modelo.formEditar(id, function(err, registros){ //registros trae todos los datos apartir de id obtenido por la url
            // console.log(registros);
            if(err){
                  console.log(err);
            }else{
                  var datos =  {
                        registro : registros[0] //registro a secas, debe ser el mismo nombre del thisArg del forEach
                  };
                  // console.log(datos);
                  res.render("formEditar",datos);
            }
      });
};

Controlador.editar = function(req, res, next){
      var id = req.params.id;

      var data = {
            titulo : req.body.titulo,
            director : req.body.director,
            imagen : req.body.imagen
      };

      modelo.editar(id, data, function(err){
            console.log("AQUI ESTA DATA: ");
            console.log(data);
            if(err){
                  console.log(err);
            }else{
                  res.redirect("/");
            }
      });
};

Controlador.eliminar = function(req, res, next){
      var id = req.params.id;

      modelo.eliminar(id, function(err){
            if(err){
                  console.log(err);
            }else{
                  res.redirect("/");
            }
      });
};

module.exports = Controlador;
