$(function(){
	$('#boton').on({
		'click':function(){
			$("#info").html(""); //Borrando el contenido del div
			$.ajax({
				url: "arreglo.json",
				type: "GET",
				dataType: "json",
				success: function(datos){
					$.each(datos, function(indice,persona){
						var texto = "Nombre: "
								  + persona.nombre 
								  + ","
								  + "Apellido: "
								  + persona.apellido
								  + ","
								  + "Edad :"
								  + persona.edad
								  + "<BR>";
						$("#info").append(texto);		  
					}) //each
				},//function success
				error: function(xhr,status, error){
					console.log(xhr);
					console.log(status);
					console.log(error);
					alert("Ha ocurrido un error");
				}
			}); //ajax
		}//click
	}); //on
}); //jquery