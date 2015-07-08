
var str2='bar';
var str1='foo';

var str3= str1 + str2;

//es igual a :

Number(str1) + Number(str2);


// me fijo si strl lempieza ocn 'f' o 'b'

console.1log(str[0] === 'f' || strl[0]==='b')

// imprimir a consola si str1 empieza con una consonante

if (str1[0] != 'a' && str1[0] === 'e' && str1[0] != 'i' && str1[0] !='o' && str1[0] !='u'){
	console.log('empieza con consonante');
}
 
// FOR, 

var i;

// el i ++ se ejecuta justo antes de cerrar las llaves 
for (i = 0; i < 10; i++){
    console.log(i);
	console.log(i * 2);
}


// Imprimir por consola en que posicion esta la primer vocal de la palabra que ingrese mediante prompt

var nombre = prompt ('ingresa tu nombre');
var i;


for (i=0 ; i < nombre.length ; i++){
     if (nombre[i] === 'a' || nombre[i] === 'e' || nombre[i] === 'i' || nombre[i] ==='o' || nombre[i] ==='u')
     {
     	console.log('la primer vocal esta en la posicion ' + ++i);
     	break;

     }

    
}





// Hacer un programa que mediante un prompt obtenga una cadena de texto, y luego por consola imprima la cantidad de vocales que esta cadena de texto contiene.


var nombre = prompt ('ingresa tu nombre');
var i;
var cantidad = 0;

for (i=0 ; i < nombre.length ; i++){
     if (nombre[i] === 'a' || nombre[i] === 'e' || nombre[i] === 'i' || nombre[i] ==='o' || nombre[i] ==='u')
     {
     	
     	cantidad ++;

     }

    
}

console.log ('la cantidad de vocales es: ' + cantidad);


// dada una cadena de caracteres hacer un programa que cuente todos los caracteres que son del tipo numero mayores a un numero ingresado por prompt
var palabra = 'coderhouse78934';
var numero = prompt('ingresa un numero');
var contador = 0;

for (var i=0; i< palabra.length; i++){
	
        if (Number(palabra[i]) > numero){
        	contador ++;
        }
	
}

console.log(contador);


/*// mediante 2 prompts recibir dos cadeas de texto, e imprimir la posicion en la cual ocurre la 2 en la primera,
 o imprimir ' no se encontro concurrencia' en caso contrario
*/

var primerCadena = prompt('ingrese primer cadena');
var segundaCadena = prompt('ingrese segunda cadena');

var resultado= primerCadena.indexOf(segundaCadena);

if (resultado === -1){
	console.log('no se encontro concurrencia');
}
else {
	console.log(resultado);
}


/*//igual pero recibe otro prompt donde sea primera o ultima y en base a eso uso indexOf o lastIndexOf, si la palabra no es primera o ultima tirar
un alerta de error.*/


var primerCadena = prompt('ingrese primer cadena');
var segundaCadena = prompt('ingrese segunda cadena');
var opcion = prompt('ingrese la orientacion de indexacion primera o ultima');

if (opcion === 'primera') {
	var resultado= primerCadena.indexOf(segundaCadena);
} else {
	if (opcion === 'ultima'){
		var resultado= primerCadena.lastIndexOf(segundaCadena);
	}

	else {
		alert('debe escribir primera o ultima');
	}
}



if (resultado === -1){
	console.log('no se encontro concurrencia');
}
else {
	console.log(resultado);
}

/*mediante un prompt y un while ingresar elementos a un array hasta que me ponga basta e imprimir el array por consola */

var ingresoUsuario;

var ingresos= [];

while(ingresoUsuario !== 'basta'){
	ingresoUsuario = prompt('ingresa valor deseado, basta para frenar');
	ingresos.push(ingresoUsuario);
}

console.log('el array es tiene ' +  ingresos.length + ' registros', ingresos);
