var mongoose = require('mongoose');



var salidaSchema = mongoose.Schema({
	
		
	Nombre:				String,
	Ap_Paterno:			String,
	Puesto:				String,
	No_empleado:		String,	
    Hora_Salida: 		String,
    Minutos_Salida: 	String,
    Dia: 				{type:Date, default: Date.now}

	
	
});

module.exports = mongoose.model('Salida', salidaSchema);