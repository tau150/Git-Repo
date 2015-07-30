



// sumar los argumentos del proceso entres si


function suma(){
   var total=0;

   for(var i=2; i < process.argv.length; i++){
   
      total += Number(process.argv[i]);

   

   }

   return total;
}


console.log(suma());


// igual que el anterior pero con map reduce y number.


function suma(){

  var arr= process.argv.slice(2)
  var arr2= arr.map(Number);
  var total= arr2.reduce(function(curAnt, curEl){
      return curAnt + curEl;

    });

  return total;

 
}

console.log(suma());


// programa que imprima el resultado de haber concatenado el contenido de archivos especificados por parametro
 // Nota: el resultado tiene que ser en el orden que se pasaron los nombres de archivo.


 var fs = require('fs');

function concatenador() {
    var resultado = "";
    var index = 0;
    var contador =2;
    for (var i = 2 ; i < process.argv.length; i++) {
        fs.readFile(process.argv[i], function(err, result){
            if (err){
                console.log("Hubo un error: " + err);
                return;
            }
            result.toString();
            contador++;
            resultado += result;
            if(contador == process.argv.length){
                console.log(resultado);
            }
        });
    }
}

concatenador();



//

// una manera de ejecutar codifo asincronico luego del sincronico es poniendo un setTimeout()

for(var i=0; i < 10; i++){
  setTimeout(function test(){
    console.log(i);
  }, 0);
}

// Esto me devuelve 10 veces 10. Pasa 10 veces al final


// de esta manera imprime como deberia, ya que uso el contador dentro de mi funcion y no el i.
var contador=0;
for(var i=0; i < 10; i++){
  setTimeout(function test(){
    console.log(contador);
    contador ++;
  }, 0);
}


// formula numero aleatoriosL  
var min= 10;
var max= 50;
Math.floor.(Math.random() * (max-min)) + min;






// ejercicio de la clase para que concatene en orden que se pasaron los parametros



var fs= require('fs');
var curFilename;
var filesNames= process.argv.slice(2);
var filesContents= [];
var processed=0;
var i;



function createReadHandler(pos){

  return function(error, content){
    
    var result;
    processed++

    if(error){
      console.log(error);
      return ;
    };

    filesContents[pos]= content;

    if(processed  === filesNames.length){
       result= filesContents.reduce(function(prevContent, curContent){
            return prevContent + curContent;
       }, ""); // estas comillas serian el prevcontetn, para que no me explote, porque parte de una variable vacia.

       console.log(result);
    }
  };
}



for (i=0; i < filesNames.length; i++){
  curFilename= filesNames[i];

  fs.readFile(curFilename, 'UTF-8', createReadHandler(i) );

}






// hacer un programa que reciba un directorio por parametro e imprima por consola 1 sola vez, los directorios contenidos en esa ruta.
/* hay que usar readdir y stat*/

/*ejemplo stat
*/
fs.stat('box-mdel', function onDone(err, stat){

      console.log(stat.isDirectory());
});

// devuelve true o false



var fs = require('fs');
var path = require('path');
var resultado = [];
var ruta = process.argv[2];

function directorios() {    
    fs.readdir(ruta, function(err, files) {
        var i;
        var processed =0;
        
        if (err) {
            console.log("hay un error: " + err);
            return;
        }

        for (i=0; i < files.length;i++){

            var absFilename = path.join(ruta,files[i]);

            fs.stat(absFilename, function onDone(err, result){
                processed++;
                if(err){
                    console.log("hay un error: " + err);
                    return;
                }
                if (result.isDirectory()) {
                    resultado.push(absFilename);
                    
                }
                if (processed === files.length){
                    console.log(resultado);
                }
            });
        }

    })

}

directorios();



