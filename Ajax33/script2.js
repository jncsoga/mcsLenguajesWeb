$(function(){
	$('button').on({
		'click':function(){
			$.getJSON("datos.json", function(datos){
				var texto = "Nombre: "
				          + datos.nombre
				          + ", "
				          + "Apellido: "
				          + datos.apellido
				          + ", "
				          + datos.edad
				          + "</BR>";
				          $("#info").html(texto);
			});
		}
	});
});