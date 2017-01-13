var mongoose = require('mongoose');



var entradaSchema = mongoose.Schema({
	
		
	Nombre:				String,
	Ap_Paterno:			String,
	Puesto:				String,
	No_empleado:		String,	
    Hora_Entrada: 		String,
    Minutos_Entrada: 	String,
    Dia: 				{type:Date, default: Date.now}

	
	
});

module.exports = mongoose.model('Entrada', entradaSchema);