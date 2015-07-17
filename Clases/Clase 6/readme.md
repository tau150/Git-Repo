# Function #

sintaxis:
    
    function nombre (expr1, expr2)
    {
        statement;
    };

Cualquier cosa que ponga entre los parentesis no debe ir con var, son solo parametros.

Si a una funcion la declaro con un parametro y luego le paso mas de uno solo toma como validos los que indique al     declarar la function, ejemplo
    
    function prueba(mensaje){
    
      console.log(mensaje);
    
    };


    prueba('hola');
   
Devuelve hola

    
    prueba('hola', 'san');

Devuelve Hola

**NO DEVUELVE ERROR, solo muestra los parametros declarados.**

## RETURN ##

Las respuestas de una funcion se realizan mediante el return.
  En el return no puedo poner un string, solo aceptan un unico valor de retorno, lo que no quiere decir que no pueda devolver multiples cosas, por ejemplo puedo devolver un array.
Si no hay definido un valor de retorno por defecto siempre sera undefined.

## Early Return ##

Es una manera de salir de la funcion si por ejemplo no cumple con el tipo de dato que yo espero, se realiza con el return, ej:

    function buscapares(arr){
    var res=[];
    var i;
    
    if(!Array.isArray(arr)){
    	return;
    }


## Exceptions  ##

Es una forma de cortar el flujo normal del programa y permite al programador que esta ejecutando el programa dar una respuesta al error, si no se ataja en esa instancia sigue subiendo por las funciones, si nadie lo ataja sale del programa.

Para eso uso **throw**, osea lanzo ese error, osea aborto el programa.
ej: 

  function buscapares(arr){
    var res=[];
    var i;
    
    if(!Array.isArray(arr)){
    	throw 'error1';
    }

Se usa en combinacion con try catch  **try** intenta hacer lo que le indico dentro de las llaves, sino hace el **catch**, que guarda el error en la variable e como parametro de la funcion.
    
     function buscapares(arr, nbr){
    var res=[];
    var i;
       ......
       ......
       .....
    }
    
    
    
    if(!Array.isArray(arr)){
    	throw 'error1';
    }
    
    if(typeof nbr !== 'number'){
    throw 'error2'
    }
    
    arr.push('otro valor');
     return 10;
    }
    
    var res;
    var suma;
    
    try {
      res= buscapares('lalala', true);
      suma = res + 2;
    }
    
    catch(e){
    
    }

El catch lo uso si resuelvo el problema, usarlo para mostrar un mensaje de error no tiene mucho sentido. Ver ejemplo en el index.js


Si aborto con throw sigue en el primer catch que encuentra

otro ejemplo:

ver en el index.js



## is array ##
Para ver si algo es un array utilizo **is array**, ya que typeOf de un array devuelvo Object.


## Pasar por valor y por referencia	 ##

cuando uno pasa por valor una variable, quiere decir que no se le puede cambiar el valor asociado, cuando se pasa como referencia se puedde cambiar su valor asociado.
 Todos los parametros en javascript se pasan por valor y no por referencia, si pase una variable como parametro no le puedo cambiar el valor del lado de adentro de una funcion, osea que fuera de esa funcion no se veria reflejado.
 
Buscar mas info !


## Parametros ##

Uno puede darle o no nombre, pero de todas maneras existen, ejemplo:

    function (param1, param2){
      console.log(param1, param2);
    }
    
    test(); // devuelve undefined
    test(1); // devuelve 1 undefined
    test(1,2); // devuelve 1, 2
    test(1,2,3); // devuelve 1, 2


Aridad de las funciones: cantidad de parametros que una funcion recibe, en el caso anterior es 2, una funcion cada menos parametros reciba mejor, tender a aridad 0


## Arguments ##
Es una variable que existe solo dentro de funciones similar a un array y contiene en cada indice el valor de parametros qeu se le paso a esa funcion.
    
    function test(param1, [aram2){
     console.log(arguments.length);
    }
    
    test(1,2); // devuelve 2
    
    
    function test(param1, [aram2){
     console.log(arguments[2]);
    }
    test(1,2); // devuelve 2;
    

Todos los objetos tienen un metodo para convertir a string, toString(); Pero ojo, el toString de un argument es distinto al toString de un String por ejemplo:

En el caso del primero indica entre corchetes primero object y despues la descripcion del object, ver ejemplo debajo con el arguments

ejemplo:
    
      function test(param1, [aram2){
     console.log(arguments.toString());
    }
    test(1,2); // devuelve [Objects Arguments];
    

    'str'.toString() // devuelve 'str'



Method borrowing

Pido prestado metodo a un objeto y se lo aplico a otro objeto, por ejemplo con el caso anterior del toString(), vamos a suponer que:

Object.prototype.toString.call('str');


va aplicar la funcionalidad toString al primer parametro qeu le paso entre parentesis.

devuelve [Object String]


Esto lo puedo aplicar para ver tipo de dato en lugar de typeof; ejemplo:

    Object.prototype.toString.call('str');
    devuelve [Object String]
    
    Object.prototype.toString.call(1);
    devuelve [Object Number]
    
    Object.prototype.toString.call(null);
    devuelve [Object null]
    
    Object.prototype.toString.call(undefined);
    devuelve [Object undefined]
    
    Object.prototype.toString.call([]);
    devuelve [Object array]
    

El call funciona, el primer parametro reemplaza a lo que esta a la izquierda, en el caso anterior object.prototype, el segundo parametro.... ver bien esto!

ejemplo:

      var arr= ['test']; 
      Array.prototype.push.call(arr, 'hola');
  
  parametro 1 es a quien se lo aplico, paramtro 2 es lo que agrego.

 En Array.prototype tengo todos los metodos de los array.

Ejemplo as logico:

    
      function test (param1, param2){
       console.log(Array.prototype.pop.call(arguments));
    }
    
    test(3,5);

Devuelve 5, ya que los arguments son similares a un array toma prestado el medoto pop y quita el numero 3




Hay una manera de poner infinitos parametros o variar la cantidad de parametros para de esa manera una funcion porder repetirla en distintas situaciones.


ejemplo:
    
    var params=[];
    
    params.push(3);
    params.push(5);
    
    Array.prototype.slice.apply('mi palabra', params);

El apply permite poner un array con todos mis parametros en lugar de poner los parametros individualmente como en call.

ejemplo:

    
    function sumar(){
    var res=0;
    for(var i=0; i< arguments.length; i++) {
     res += arguments[i];
    }
    return res;
    }
    
    sumar (1,3,5,10);


    // otra manera:

    var sumandos = [1,3,5,10,20];
    
    sumar.apply(null, sumandos);

## Scope o ambito de las variables ##

Hoisting, las variables existen en todo el ambito de mi funcion, osea que javascript las lleva al principio, lo que si varia es su inicializacion, ejemplo:

    function f1(){
       console.log('antes' v1);
       var v1= 2;
       console.log('despies', v1);
    }

f1();
devuelve 

   antes undefined
   despues 2

Esto es porqeu sube la variable pero el valor lo empieza a tener donde fue definido.


El ambito valen dentro del ambito de la funcion, pueden ir para abajo indefinidamente pero no para arriba.






    

