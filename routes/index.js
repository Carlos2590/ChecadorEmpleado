var express = require('express');
var router = express.Router();
var flash = require('connect-flash');
var passport = require('passport');
var Empleado = require('../models/empleado.js');
var Entrada = require('../models/entrada.js');
var Salida = require('../models/salida.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/registro', function(req, res){
	res.render('registro', {message: req.flash('message')});
});

router.get('/entrada', function(req, res){
	res.render('entrada', {message: req.flash('message')});
});

router.get('/salida', function(req, res){
	res.render('salida', {message: req.flash('message')});
});

//REGISTRO PARA USUARIOS
router.post('/registro', function(req, res){

	var No_empleado = req.body.No_empleado;


	Empleado.findOne({"No_empleado": No_empleado}, function(err, doc){

	    if (doc){
	      console.log('Ya existe un registro con este numero de empleado favor de usar uno diferente');
	      res.render('registro', {message: 'Ya existe un registro con este numero de empleado favor de usar uno diferente'})
	    }
	    else{


			var newEmpleado = new Empleado();

			newEmpleado.Departamento = req.body.Departamento;
			newEmpleado.Area = req.body.Area;
			newEmpleado.Ciudad = req.body.Ciudad;
			newEmpleado.Estado = req.body.Estado;
			newEmpleado.Pais = req.body.Pais;
			newEmpleado.No_empleado = req.body.No_empleado;
			newEmpleado.Puesto = req.body.Puesto;
			newEmpleado.Ap_Materno = req.body.Ap_Materno;
			newEmpleado.Ap_Paterno = req.body.Ap_Paterno;
			newEmpleado.Nombre = req.body.Nombre;
				
				
			newEmpleado.save(function(err) {
				if (err){
					console.log('No se pudo registrar el empleado : '+err);
					res.render('registro', {message: 'No se pudo registrar al empleado :'});
				}
				else{
					console.log('Se registro correctamente al empleado');
					res.render('registro', {message: 'Se registro correctamente al empleado'});

				}
			});
		}

	});
});


//checador

router.post('/entrada', function(req, res){

	var No_empleado = req.body.No_empleado;


	Empleado.findOne({"No_empleado": No_empleado}, function(err, doc){

	    if (err || !doc){
	      console.log('Numero de empleado no registrado');
	      res.render('entrada', {message: 'Numero de empleado no registrado'})
	    }
	    else{

	
	    	var d = new Date();

	    	if (d.getMinutes() < 10){
	    		var m = "0"+ d.getMinutes();
	    	}
	    	else{
	    		var m = d.getMinutes();
	    	}
			var newEntrada = new Entrada();

			newEntrada.Minutos_Entrada = d.getMinutes();
			newEntrada.Hora_Entrada = d.getHours();
			newEntrada.No_empleado = req.body.No_empleado;
			newEntrada.Puesto = doc.puesto
			newEntrada.Ap_Paterno = doc.Ap_Paterno
			newEntrada.Nombre = doc.Nombre
				
				
			newEntrada.save(function(err) {
				if (err){
					console.log('No se pudo registrar hora de entrada : '+err);
					res.render('entrada', {message: 'No se pudo registrar hora de entrada: ' +err});
				}
				else{
					console.log(' Hora de Entrada: ' + Date.now);
					res.render('entrada', {message: ' Hora de Entrada: ' + d.getHours() + ':' +m });

				}
			});
		}

	});
});


router.post('/salida', function(req, res){

	var No_empleado = req.body.No_empleado;


	Empleado.findOne({"No_empleado": No_empleado}, function(err, doc){

	    if (err || !doc){
	      console.log('Numero de empleado no registrado');
	      res.render('salida', {message: 'Numero de empleado no registrado'})
	    }
	    else{

	
	    	var d = new Date();

	    	if (d.getMinutes() < 10){
	    		var m = "0"+ d.getMinutes();
	    	}
	    	else{
	    		var m = d.getMinutes();
	    	}
			var newSalida = new Salida();

			newSalida.Minutos_Salida = d.getMinutes();
			newSalida.Hora_Salida = d.getHours();
			newSalida.No_empleado = req.body.No_empleado;
			newSalida.Puesto = doc.puesto
			newSalida.Ap_Paterno = doc.Ap_Paterno
			newSalida.Nombre = doc.Nombre
				
				
			newSalida.save(function(err) {
				if (err){
					console.log('No se pudo registrar hora de salida : '+err);
					res.render('salida', {message: 'No se pudo registrar hora de salida: ' +err});
				}
				else{
					console.log(' Hora de Entrada: ' + Date.now);
					res.render('salida', {message: ' Hora de Salida: ' + d.getHours() + ':' +m });

				}
			});
		}

	});
});



module.exports = router;
