/*STRINGS

Hacer una función que reciba dos parámetros del tipo string. 
La función deberá retornar la cantidad de apariciones que tiene el segundo 
parámetro en el primer parámetro. Ejemplo:

console.log(contarOcurrencias("sarasa", "a")); // imprime 3
console.log(contarOcurrencias("sarasa", "z")); // imprime 0*/


/* Debo tomar el segundo argumento y compararlo con
cada uno de los sub elementos del primer argumento y acumularlos*/


function contarOcurrencias(param1, param2){

   var elementoArecorrer = arguments[0];
  
  var contador=0;

  for(var i=0; i< elementoArecorrer.length; i++){
      
      if(elementoArecorrer[i] === arguments[1]){
      	contador ++;
      }

  }

  return contador;

 

};

console.log(contarOcurrencias("sarasa", "a")); // imprime 3
console.log(contarOcurrencias("sarasa", "z")); // imprime 0*/




/*
Hacer una función que reciba una string y retorne la misma string pero agregando
después de cada caracter su índice correspondiente. 
Es decir, que retorne la misma string transformada de la siguiente forma:

console.log(agregarIndice("kawabonga")); // imprime "k0w1a2b3o4n5g6a7"
console.log(agregarIndice("casa")); // imprime "c0a1s2a3"*/




function agregarIndice(param1){

  
   var palabra = '';
   var arrKeys= Object.keys(param1);

  for(var i=0; i < param1.length; i++){

    
    palabra += (param1[i] + arrKeys[i]);
        

  }

  return palabra; 

}

console.log(agregarIndice('hola'));





// ARRAYS

/*Hacer una función que reciba un array de strings y retorne una string igual a 
la concatenación de todos sus elementos. Ejemplo:

console.log(concatenar(["s","a","r","a","s","a"])); // imprime "sarasa"
console.log(concatenar(["h","o","l","a"])); // imprime "hola"*/


function concatenar(arr){


    var palabraFinal ='';
	 arr.forEach(function(elem) {
        
         palabraFinal += elem;


    });


     console.log(palabraFinal.length);
	 return palabraFinal;
}

console.log(concatenar(["s","a","r","a","s","a"]))






/*Hacer una función que reciba un array y retorne otro 
array con la misma cantidad de elementos, pero qué cada elemento sea el
 tipo de dato del array original. Ejemplo:

console.log(transformarATipos([1,"casa", {}])); // imprime ["number", "string", "object"]
console.log(transformarATipos([function(){}, true]); // imprime ["function", "boolean"]*/




function transformarATipos(arr){

	var arrResultado=[];
	var tipo;
   
    arr.forEach(function(elem) {
        
        
      tipo = typeof elem;
      arrResultado.push(tipo);

    });

    return arrResultado;


}

console.log(transformarATipos([1,"casa", {}]));




// OBJETOS


/*Hacer una función que reciba un objeto y retorne un array con todos 
los valores de sus propiedades cómo elementos. Ejemplo:

console.log(aArrayDeValores({ a: 1, b: "z", c: 3})); // imprime [1, "z",3]
console.log(aArrayDeValores({ a: "f", b: true})); // imprime ["f", true]*/




function aArrayDeValores(obj){

  var arrKeys= Object.keys(obj);
  var arrValores=[];

    for(var i=0; i < arrKeys.length; i++){

       arrValores.push(obj[arrKeys[i]]);

    }

   return arrValores;


}

console.log(aArrayDeValores({ a: 1, b: "z", c: 3}));
console.log(aArrayDeValores({ a: "f", b: true}));








/*Hacer una función que reciba un objeto el cual posee propiedades 
con valores de string y retorne una string cómo resultado de la 
concatenación de todos los valores de las propiedades del objeto. Ejemplo:

console.log(concatenarObj({ a: "h", b:"o",c:"l", d:"a"})); // imprime "hola"
console.log(concatenarObj({ z: "sa", x:"ra", y:"sa"})); // imprime "sarasa"*/



function concatenarObj(obj){

	var palabraFinal='';
	var arrKeys= Object.keys(obj);


	for(var i=0; i < arrKeys.length; i++){

		var letra= obj[arrKeys[i]];

		palabraFinal += letra;


	}

	return palabraFinal;


}

console.log(concatenarObj({ a: "h", b:"o",c:"l", d:"a"}));
console.log(concatenarObj({ z: "sa", x:"ra", y:"sa"}));