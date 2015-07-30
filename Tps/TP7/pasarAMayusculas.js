


var fs= require('fs');
var archivo = process.argv[2];
var stringFinal= '';





function vocalesAmayusculas () {

	  var processed =0;


    fs.readFile(archivo, 'UTF-8', function(err, result){
    	if(err){
    		console.log('hubo un error' + err);
    		return;
    	}

    	 for(var i=0; i<result.length; i++){
    	 	var letra= result[i];
    	 	processed ++;
    	 	if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
    	 		var letraMayus = letra.toUpperCase();
    	 		
    	 		stringFinal = stringFinal + letraMayus;

    	 	}else{
    	 		stringFinal = stringFinal + letra;
    	 	}

      	 }

    	 if(processed === result.length){

    	 	fs.writeFile('miArchivoDeTextoMayus.txt', stringFinal, function (err) {
 				 if (err) {
 				 		console.log('hubo un error '+ err);
 				 		return;

 				 		}
 				 		});

    	 }
    	 
    } );
};


vocalesAmayusculas();



