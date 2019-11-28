$(function(){
	$('button').click(function(){
		//Enviamos dos parámetros
		//1. El nombre del archivo que vamos a leer
		//2. La función que extraerá los datos

			//La función recibirá 3 parámetros:
			   //1. Una referencia a la respuest que se esta obteniendo al
			   //ejecutar esta función
			   //2.El Status de la función
			   //3.Un objeto XMLRequest

			   		 //1 Archivo a leer   //2. Función que extraerá
			   $.get("archivo.txt"     , function(dato, status, xhr){
			   		console.log("Mensaje: "
			   				+ dato
			   				+ "\nStatus:"
			   				+ status
			   				+ " "
			   				+ xhr.status
			   			);
			   		//Imprimimos el mensaje en la pagina
			   	  $("#info").html(dato);
			   });

	});
});