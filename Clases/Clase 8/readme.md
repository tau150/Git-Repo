# Instalar paquetes
 

**npm install nombre paquete**

Conceptualmente instalar es instalar localmente al directiorio donde estoy, no podria utilizar ese paquete en otra carpeta si no lo instalo.
  Puedo instalar globalmente con **npm install nombre paquete -g **, pero solo sirven para paquetes o modulos que estan pensados como comandos, decir como un comando es que pueda ejecutar express por ejemplo en la consola y haga algo, algunos paquetes que están pensado como comandos y otros no, express no por ejemplo.

Node por defecto viene con varios paquetes incluidos, por ejemplo **filesystem**. Un sist. operativo esta compuesto por varias cosas, una de esas cosas es el filesystem, es lo que nos da la capacidad de guardar archivos, de tener un esquema con carpetas, de conocer tamaño del archivo, saber fecha de modificacion y muchos etc. Lo interesante es que esto permite abrir y trabajar con archivos.

Require es una palabra reservada en node que nos sirve para utilizar cualquier modulo, si es un modulo que viene con node lo puedo llamar directamente ej var js= require('fs'), si no viene con node previuamente debo instalarlo.

Para ver los paquetes qeu vienen con node consulto la documentacion. Para ver los metodos de cada modulo tambien consulto la documentacion.

Valores de resultado	

para pasar resultados, ya sean exitosos o de error, generalmente es mediante funciones, el primer parametro de la funcion representa un err y el segundo un resultado, esto es por convension

ej:

    
    fs.readFile('textFile1', function(err, resultado){
      console.log('hola');
      console.log('error: ', err);
      console.log('resultado: ', resultado);
    };
    \Devuelve:
      hola
      error: null
      resultado: <Buffer 73 6f 6d 65....etc>, si no aclaro(con encoding), me pasa una representacion hexagecimal del archivo

  Si explicitamente no existe algo se usa null, no undefined.



----------




Mismo ejemplo para que me devuelva string en lugar de hexa.

       fs.readFile('textFile1', 'utf-8', function(err, resultado){
      console.log('hola');
      console.log('error: ', err);
      console.log('resultado: ', resultado);
    };
    \Devuelve:
      hola
      error: null
      resultado: string que se encuentra dentro del archivo


con readFileSync('nombrearchiv');  Simula ser bloqueante, no es bueno salvo para casos muy excepcionales.




## Procesos ##

cada proceso tiene un identificador unico, un porcentaje de uso de memoria y cpu, un programa no corre directamente desde el disco, sino que se pasa a memoria y desde ahi se ejecuta, un programa cuando se ejecuta se pasa a memoria, el sistema operativo le da un identificador de proceso y se ejecuta desde memoria linea a linea.

si hago process.pid me da el id del proceso


