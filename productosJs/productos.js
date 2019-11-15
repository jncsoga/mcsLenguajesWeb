var productId = 1;
class Producto {
	constructor(nombre,precio,anio){
		this.nombre = nombre;
		this.precio = precio;
		this.anio   = anio;
	}

}
class Interfaz {
	addProducto(producto){


		const miDiv = '<div id=pr'+ productId
			+' class = "productos">'
			+'	<div class = "card text-center mb-4">'
			+'     <div class="card-body">       '
			+'       <strong>Nombre: </strong>'

			+'			<div class="d-inline" id="nombre' + productId + '">'
			+ 				producto.nombre
			+'			</div>'

			+'       <strong>Precio: </strong>'
			+'			<div class="d-inline" id="precio' + productId + '">'
			+ 				producto.precio
			+'			</div>'

			+'       <strong>Año: </strong>   '
			+'			<div class="d-inline" id="anio' + productId + '">'
			+ 				producto.anio
			+'			</div>'

			+'       <a href="#" class="btn btn-danger"'
			+         'name="borrar" '
			+		  'id='+ productId +' >Borrar</a>'

			+'       <a href="#" class="btn btn-success"'
			+         'name="editar" '
			+		  'id='+ productId +' >Editar</a>'

			+'     </div>'
			+'  </div>'
			+'</div>';
		$("#listado").append(miDiv);
		productId++;

		$("#productos-form").trigger('reset');
	}
	deleteProducto(id){

		//se borra directamente con el remove
		var producto = "#pr" + id;
		$(producto).remove();
	}

	mensaje(mensaje, tipo){
		const miDiv = '<div class="alert alert-'+ tipo + ' mt-2" '
			+ '    role="alert">'
			+ '    ' + mensaje
			+ '</div>';

		$("#App").before(miDiv);

		setTimeout(function(){
			$(".alert").remove();
		},3000);
	}

	editProducto(id){
		//Obtener los datos del produto a editar
		//trim() remueve los espacios del pricipio y al final
		var nombre = $("#nombre"+ id).text().trim();
		var precio = $("#precio"+ id).text().trim();
		var anio = $("#anio"+ id).text().trim();

		//Asignamos los datos al modal
		$("input[name=modalIdProducto]").val(""+id);
		$("#modalNombre").val(nombre);
		$("#modalPrecio").val(precio);
		$("#modalAnio").val(anio);

		//Mostramos el modal
		$("#miModal").modal("show");
	}//Fin del método editProducto
}



//Evento que maneje clic en el boton de
//Guardar el formulario con Jquery

$(()=>{ //<-equivale a function
	$("#boton").on("click", ()=>{
		//alert("Enviando formulario");
		//Obtener datos del formulario
		//Se sustituye const nombre = document.getElementById("nombre").value; por:
		const nombre = $("#nombre").val();
		const precio = $("#precio").val();
		const anio = $("#anio").val();
		//alert(nombre + " - " + precio + " - " + anio);

		const producto = new Producto(nombre,precio,anio);

		//empezar a agregar y mostrar los productos a la pagina
		const interfaz = new Interfaz();

		if(nombre === '' || precio ===''){
			//interfaz.mensaje("Completa el formulario", "danger");
			mensaje = "Completa el ";
			if (nombre===''){
				mensaje+="nombre";
				//document.getElementById("nombre").focus();
				$("#nombre").focus();
			}
			else if (precio ===''){
				// document.getElementById("precio").focus();
				$("#precio").focus();
				mensaje+="precio";
			}
			interfaz.mensaje(mensaje, "warning");
		} else {
			const producto = new Producto(nombre,precio,anio);
			//console.log(producto);

			//const interfaz = new Interfaz();

			interfaz.addProducto(producto);
			interfaz.mensaje("Producto añadido correctamente", "success");
		}

		//evitar que la pagina se recargue al hacer click
		event.preventDefault();

		//Cargar el fromulario a estado inicial
		$("#productos-form").trigger('reset');
	});//Fin de agregar

	$("#listado").on("click", ".btn.btn-danger", function(event){

		//Obtener sobre que boton se hizo onclick
		var id = $(this).attr('id');
		//alert(id);

		const interfaz = new Interfaz();
		//Eliminamos el producto desde la interfaz
		interfaz.deleteProducto(id);
		interfaz.mensaje("Producto eliminado correctamente", "danger");

		event.preventDefault();
	});//Fin de funcion borrar

	//Evento para boron editar producto
	$("#listado").on("click", '.btn.btn-success', function(event){

		var id= $(this).attr("id");
		//alert(id);
		const interfaz = new Interfaz();

		interfaz.editProducto(id);
		event.preventDefault();

	});//Fin del evento editar

	$("#guardarModal").on("click", function () {
		const id = $("input[name=modalIdProducto]").val();
		const nombre = $("#modalNombre").val();
		const precio = $("#modalPrecio").val();
		const anio = $("#modalAnio").val();

		alert(id);
		alert(nombre);
		alert(precio);
		alert(anio);

		$("#nombre"+id).text(nombre);
		$("#precio"+id).text(precio);
		$("#anio"+id).text(anio);

		$('#miModal').modal('hide');

	})
});//Fin del JQuery