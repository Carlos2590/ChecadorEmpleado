var mongoose = require('mongoose');

var empleadoSchema = mongoose.Schema({
	
		
	Nombre:			String,
	Ap_Paterno:		String,
	Ap_Materno:		String,
	Puesto:			String,
	No_empleado:	String,	
	Pais:			String,
	Estado:			String,
	Ciudad:			String,
	Area:			String,
	Departamento:	String,
    createdAt: 		{type:Date, default: Date.now}
	
	
});

module.exports = mongoose.model('Empleado', empleadoSchema);