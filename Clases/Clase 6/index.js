// Buscar los pares de un array mediante un function

function buscapares(arr){
    var res=[];
    var i;
    
for(i=0; i< arr.length; i++){
	if ((arr[i] %2 )=== 0){
		res.push(arr[i]);
		}
	};
	return res;
};

console.log(buscapares([1,2,3,4,6,8,44,5,13,2354,465,324,23]));


// catch y try errores

function agregarLength(arr){
	 if(!Array.isArray(arr)){
       // se lanza error, se reomienda lanzar de la manera new Error('mensaje')
       throw new Error(
       	      'expected arr to be an array, ' +
       	      'but instead got: ' + typeof arr
       	      );
	 }

	 arr.push(arr.length);
}

try {
	agregarLength('jasdkjaskdjs');
}
catch(e){
	/*// este message representa a la cadena de arriba, de esta manera puedo diferenciar cuales
	de los errores fue, en caso de tener varios tipos.*/
	console.log(e.message);
}


// otro ejemplo con secuencia de funciones


function crearArrayDeDosNumeros(){


	return [1,2] // me devuelve un arrat de dos numeros
}

function agregarLength(arr){
	 if(!Array.isArray(arr)){
       
       throw new Error(
       	      'expected arr to be an array, ' +
       	      'but instead got: ' + typeof arr
       	      );
	 }

	 arr.push(arr.length);
}



function devolverUltimoValor(){
	var arr= crearArrayDeDosNumeros();
	agregarLength(arr);

	return arr[arr.length];

}

function main(){
	console.log(devolverUltimoValor());
}

main();
console.log('termine');


/*// Si no le pongo un catch, el programa en caso de tener un accionarse el throw(porque no le puse un array en linea 67)
 el programa se abortara y nunca llegara al console.log(termine),
  ya que busca el catch de funcion en funcion anidada

  Si no puedo atajar el error lo dejo seguir fluyendo hasta que lo ataje otra funcion que si pueda tratarlo.
  es mejor que rompa el programa a atajarlo mal o que siga adelante con algo invalido.


  Debajo el ejemplo tomando el error
*/


function crearArrayDeDosNumeros(){


	return [1,2] // me devuelve un arrat de dos numeros
}

function agregarLength(arr){
	 if(!Array.isArray(arr)){
       
       throw new Error(
       	      'expected arr to be an array, ' +
       	      'but instead got: ' + typeof arr
       	      );
	 }

	 arr.push(arr.length);
}



function devolverLength(arr){
	
	/*// aca intento que no lo que me pasan, si no intento en el catch con algo que 
	yo desee, en este caso un array vacio.*/


	try{
		agregarLength(arr);
	}
	catch(e){
		arr= [];
		agregarLength([]);
	}

   // devuelve el utlimo valor de un array
	return arr[arr.length - 1];

}

function main(){
	console.log(devolverLength(crearArrayDeDosNumeros()));
}

main();
console.log('termine');



// FOR EACH

   [3, 5; 9].forEach(function(curEl, curIndex, arr){
   	  console.log(curEl, curIndex, arr);
   }

   /* Devuelve:
     3 0 [3, 5, 9]
     5 1 [3, 5, 9]
     9 2 [3, 5, 9]*/




/* Realizar una funcion que reciba un array y una funcion de filtrado y que mediante el 
explicito de forEach contabilice los elementos del array pasado
que al aplicarle la funcion recibida por parametro al elemento actual del forEach este
devuelva true
*/

var arr= [3, 4, 5, 75, 234, 12, 1];

function main(arr, filtroPar){
	var contador=0;
	arr.forEach(filtroPar()){
		if(){
			contador ++;
		}

	}

   
	
}


function filtroPar(param){
 
   var esPar= false;
   if((arr%2)===0){
   	esPar=true;
   }

   return esPar;
}

