var AppConfig={
 	UrlSocket: 'http://saga.cundinamarca.gov.co:4171', 			//Socket Login			app.js
 	UrlSocketApp: 'http://saga.cundinamarca.gov.co:3322',		//Socket Aplicación		AppSeguimientoActividades.js
 	cl:'1erf2a5f1e87g1',
 	NextLogin:'../Home/',
	// TABLA public.p_perfil
		//ADMIN           (18)			// tipo 'C'
		//CONSULTA        (2)				// tipo 'C'
		//77,89=Planeación -- 91=Administrativo -- 110=Gobierno\Rendición 
 	id_perfil:[2,18,77,89,91,110], 					// tipo 'C'
 	
	 	//ADMIN           (24,69)			// tipo 'A'
	 	//EDICIÓN Y CARGA (79,87,96)		// tipo 'A'
	 	//CONSULTA        (70)				// tipo 'A'
	id_perfil_admin:[24,69,70,79,87,96],	// tipo 'A',
	//id_centros_gestores:[],
	socketGeoAdmin:''
};
