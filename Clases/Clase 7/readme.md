Hacer declaraciones de variables dentro de un for, if o demas es una mala práctica, ya que siempre subirá a la función.

# Objetos #

Todo lo que no es primitivo es un objeto.

Me sirve pensar en objeto para tener una bolsa de variables, que serian las propiedades.
    
    var obj = {a:1};
    
    obj[a];
    // devuelve 1
    
    obj.a;
    //devuelve 1 tambien, es otra notacion.


La a es lo que llamamos keys, estas pueden ser cualquier cosa, por ejemplo otro objeto, o una funcion.

Los objetos puedo extenderlos facilmente, ejemplo obj.b=3; agrega la key b en el objeto.
Las keys son siempre strings y si no lo es lo convierte automaticamente.

La notacion de punto obj.key sirve para acceder a algo estatico, la notacion obj[key] sirve para acceder a algo dinamico.



## Recorrer objetos ##

Para conocer todas las keys de un objeto utilizo Object.keys(obj); y me devuelve un array con todos los keys.

VER SOME para ciclos !!









