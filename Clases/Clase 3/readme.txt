NOTAS CLASE 3

Si defino box-sizing: border-box siempre ajusta a base del content, osea si es necesario achica el content, no los margenes, paggind o border.

caniuse.com - pagina para ver distribucion de browser por pais y me da los paramaetros de css y html y como es soportado por cada uno de ellos


- Hay properties que agregandolas a un elemento todos sus hijos las heredan, hay otras que no, para ver cuales si o no debo ver la propiedad inherit, 
por ejemplo box-sizing:border-box no tiene herencia, por ende para aplicarlo a toda la pagina debo aplicarlo al * y no al body.

Position:

relative: desde la posicion del objeto inicial, lo defaso lo indicado.
fix: toma de referencia el browser


f9 sobre los parametros que quiero, ordena alfabeticamente


Para definir alturas con porcentajes, necesariamente debo definirle altura al padre, pero si es position fixed el porcentajo toma desde la ventana.
  Esta mal visto usar alturas en porcentajes, usar alturas fijas, no usar porcentajes.

El floating es siempre respecto al padre.

Cuando floto un elemento, el ancho se ajusta al contenido, como si fuera un inline

El clear both, a parte de cortar el flotado, tambien permite que se tome la altura.


Tecnica overflow para cortar flotados: hago una clase .clearfix en el css y le pongo como propiedad overflow:auto. Esta clase se la aplico al
padre de los elementos flotados. Se aplica al objeto que esta sufriendo el problema.

A los elementos inline no se le puede aplicar height, es por eso que es mejor usar float antes que inline.
Cuando quiero hacer flotar a un lado, no tiene demasiado sentido que use floats, pero con inline no puedo definir altura, por eso en esos casos uso inline-block.


Los display inline-block crean un pequeno espacio en blanco a la izquierda, para deshabilitarlo: white-space:nowrap !Important.


Centrado vertical:

Vertical-align: permite centrar verticalmente elementos inline o inline-block dentro de otro block, solo en esos caso, no es lo mas recomendable!!!
Al padre, por ejemplo el body le pongo en el css :before, ahi le meto content=" " y defino height:100%, luego todos los hijos se ponene inline-block
 y vertical-align: middle.




Para otros casos se utiliza:

flex-box, es otra forma de centrar elementos, en el contenedor especifico que algo va a ser flex box, y en el como sera el centrado de sus hijos.
  Primero activo flexbox al contenedor, de esa manera tendre mejor control de los hijos. Al padre le pongo display:flex y tambien align-items:center uso prefijos para compatibilidad para ambos:
Con eso ya dispongo que sus hijos esten centrados verticalmente

	.flexbox-ex{
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: flex;
		-webkit-align-items:center;		
		-moz-align-items:center;		
		-ms-align-items:center;		
		align-items:center;		

	}





Si quiero poner elementos uno al lado del otro sin dejar espacios, antes de usar floats es mejor usar inline-block, que lo puedo combinar con vertical-align para mas funcionalidad.
