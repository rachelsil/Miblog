
//Obtener la referencia del lienzo con fabric.Canvas() y almacenarlo dentro de la variable canvas.
var canvas = new fabric.Canvas('myCanvas');

//Ahora, definimos las coordenadas iniciales de X y Y para el jugador y las almacenamos en las variables.
//utilizamos estos para que se comience en la parte superior del lienzo
player_x = 10;
player_y = 10;

//Definimos el ancho y alto inicial de las imágenes de los bloques y lo almacenamos en las variables.
block_image_width = 30;
block_image_height = 30;

//Ahora definimos la variable player_objetct para almacenar el objeto de la imagen del jugador.
var player_object= "";
var block_image_object= "";

//Ahora añadimos la función player_update() para añadir la imagen del jugador.
// Esta función cargará la imagen del jugador en el lienzo.
function player_update()
{

	//vamos a definir la función fabric.Image.fromURL() de fabric.js para subir una imagen al lienzo.
	fabric.Image.fromURL("player.png", function(Img) {
	
	//Ahora almacena un objeto por defecto de la imagen dentro de nuestra variable
	//Esta variable servirá de identificación para la imagen asi como para manipular la imagen del jugador.
	player_object = Img;

	//añadir el ancho de la imagen del jugador 
	player_object.scaleToWidth(150);
	//añadir el alto de la imagen del jugador utilizando la variable
	player_object.scaleToHeight(140);
	// Ahora vamos a establecer las coordenadas X y Y para la imagen
	player_object.set({
	top:player_y,
	left:player_x
	});

	//Ahora añadimos esta imagen al lienzo.
	canvas.add(player_object);

	});
}

//la función add para añadir diferentes imágenes según la tecla oprimida. Dentro de los paréntesis, vamos a añadir
//la variable get_image. Esta variable contiene la imagen del bloque correspondiente a la tecla que se oprime
function new_image(get_image)
{

	//Ahora vamos a definir la función de fabric.js fromURL() para subir las imágenes al lienzo.
	fabric.Image.fromURL(get_image, function(Img) {
	
	//Ahora almacenamos un objeto por defecto de la imagen dentro de nuestra variable.
	//De la misma manera, la variable block_image_object será usada para manipular la imagen del bloque.
	block_image_object = Img;

	//Ahora añadimos el ancho de la imagen del bloque utilizando la variable
	block_image_object.scaleToWidth(block_image_width);
	
	//Añadiremos el alto de la imagen del bloque utilizando la variable
	block_image_object.scaleToHeight(block_image_height);
	
	//Establecemos las coordenadas X y Y para la imagen.set establece las coordenadas X y Y de la imagen del jugador.
	block_image_object.set({
	top:player_y,
	left:player_x
	});

	//Ahora agregamos la imagen al lienzo con la función canvas.add().
	canvas.add(block_image_object);

	});

}

//agregaremos unevent listener a la ventana para capturar el valor de la tecla presionada.
window.addEventListener("keydown", my_keydown);

//Tenemos que definir la función mi_TeclaPresionada para que podamos ver qué tecla se presiona
function my_keydown(e)
{
	
// e.keyCode obtendrá el valor de la tecla presionada. Lo almacenaremos dentro de una variable
keyPressed = e.keyCode;
//Imprime el valor de la tecla presionada en la pantalla de la consola.
console.log(keyPressed);

//Verifica si las teclas SHIFT y P son presionadas juntas, 80 signtecla P es presionada.
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p y shift presionadas juntas");
	//Luego estamos aumentando el ancho y alto de la imagen del bloque por 10px.
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;

	//Ahora mostraremos el ancho y alto de la imagen del bloque dentro del elemento HTML
	//con id = "anchura_actual" que hemos hecho anteriormente
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}


// Verifica si las teclas SHIFT y M son presionadas juntasl, El valor de la tecla "m" es 77 
if(e.shiftKey && keyPressed == '77')
{
	console.log("m y shift presionadas juntas");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

// Verificar si el valor de la tecla es igual al valor de la tecla de flecha ARRIBA:
	if(keyPressed == '38')
	{
		up();
		console.log("arriba");
	}

	//Comprueba si el valor de la tecla es igual al valor de la tecla de flecha ABAJO:
	if(keyPressed == '40')
	{
		down();
		console.log("abajo");
	}

	//Comprobar si el valor de la tecla es igual al valor de la tecla de flecha IZQUIERDA:
	if(keyPressed == '37')
	{
		left();
		console.log("izquierda");
	}

	// Comprobar si el valor de la tecla es igual al valor de la tecla de flecha  DERECHA:
	if(keyPressed == '39')
	{
		right();
		console.log("derecha");
	}

	//Comprobar si el valor de la tecla es igual al valor de la tecla w
	if(keyPressed == '87')
	{

		//significa que estamos llamando a la nueva_imagen y pasando la imagen del muro
		new_image('wall.jpg'); 
		console.log("w");
	}

	//Comprueba si el valor de la tecla es igual al valor de la tecla g
	if(keyPressed == '71')
	{
		//gnifica que estamos llamando a la nueva_imagen y pasando la imagen de la tierra
		new_image('ground.png'); 
		console.log("g");
	}

	//Comprobar si el valor de la tecla es igual al valor de la tecla l
	if(keyPressed == '76')
	{
		//significa que estamos llamando a la nueva_imageny pasando la imagen verde_claro
		new_image('light_green.png'); 
		console.log("l");
	}

	//Comprobar si el valor de la tecla es igual al valor de la tecla t
	if(keyPressed == '84')
	{
		
		//significa que estamos llamando a la nueva_imagen y pasando la imagen verde_oscuro
		new_image('trunk.jpg'); 
		console.log("t");
	}

	//Comprobar si el valor de la tecla es igual al valor de la tecla r
	if(keyPressed == '82')
	{
		//significa que estamos llamando a la nueva_imagen y pasando la imagen del techo
		new_image('roof.jpg'); 
		console.log("r");
	}

	//Ahora comprobaremos si el valor de la tecla es igual al valor de la tecla “y”
	if(keyPressed == '89')
	{

//significa que estamos llamando a la nueva_imagen y pasando la imagen de la pared amarilla
		new_image('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		new_image('dark_green.png'); 
		console.log("d");
	}

	//El valor de tecla de u es 85.
	if(keyPressed == '85')
	{
		new_image('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		new_image('cloud.jpg'); 
		console.log("c");
	}
	
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura del bloque de la imagen = " + block_image_height);
		console.log("Cuando se presiona la tecla arriba, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("altura del bloque de la imagen = " + block_image_height);
		console.log("Cuando se presiona la tecla abajo, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("ancho del bloque de la imagen = " + block_image_width);
		console.log("Cuando se presiona la tecla izquierda, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("ancho del bloque de la imagen = " + block_image_width);
		console.log("Cuando se presiona la flecha derecha, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
