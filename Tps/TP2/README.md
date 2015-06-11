# README    

El objetivo de este TP es afianzar los conocimientos de ​
[GIT​](https://git-scm.com/doc)
 y el manejo de ​
[Github​](https://help.github.com/)
. Para esto 
se pide que se realice lo siguiente, y se recomienda el ​
[uso de consola​](http://www.ubuntu-guia.com/2009/07/comandos-basicos-de-linux.html)
 (git­bash) por sobre el 
uso de alguna herramienta gráfica que permita hacer lo mismo.


Recuerden que la mayoría de los comandos al ejecutarlos con la opción ​
__­-h​__
, suelen darnos 
información de su uso, y que en el caso del comando ​
__git​__
, pueden consultar la ayuda de este 
ejecutando: ​
__ help​__
 (ayuda general), o ​
__git help comando​__
 (ayuda particular del comando). 
 

![alt text](http://www.markus-gattol.name/misc/mm/si/content/git_everthing_is_local.png "Logo Title Text 1")




1. En el repositorio del curso, crear un directorio (carpeta), dentro de ​
__tps​__
, llamado ​
__2​__
. (​
hints:
__mkdir​
, ​
cd​
, ​
ls​
__) 
2. Pasar este archivo a ​[markdown​](https://help.github.com/articles/markdown-basics/)
, o txt, y colocarlo dentro de este directorio con el 
nombre de README.md o README.txt respectivamente. 
3. Agregar dentro de este directorio un archivo index.html, que contenga el esqueleto 
mínimo de HTML5, y dentro de la etiqueta body, colocar un div con id content. (​
hints​
: 
abrir este directorio en sublime, y crear y editar este archivo desde aca) 
4. Realizar un commit ​solo​ de este directorio. (​hints​: ​__git status​, ​git add​, ​git commit​__) 
5. Subir estos cambios al repositorio remoto (github). (​hints​: ​__git push ­u​__) 
6. Crear un branch llamado ​tp2­css​, y moverse a ese branch. (​hints​: ​__git checkout ­b​, ​git branch ­av​__) 
7. Agregar dentro del directorio un archivo ​__main.css__, y modificar ​ __index.html__​ (creado en 3)  para que lo incluya. 
8. Disponer dentro de ​__main.css​__, las reglas de css necesarias para que:        
a. El body tenga ​[font size](https://developer.mozilla.org/en-US/docs/Web/CSS/height)​ de 20 pixels   
b. El div con id content tenga 
i.[width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) ​de 20 em   
ii.[height](https://developer.mozilla.org/en-US/docs/Web/CSS/height)​ de 10 em   
iii.[background color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)​ azul   
iv.Este centrado horizontalmente (​hints​: margin auto)   

9. Realizar un commit solo con los cambios realizados en 6 y 7. (​hints​:__ ​git status​, ​git add​, git commit​__) 
10. Subir estos cambios al repositorio remoto (github). (​hints​: ​__git push ­u​__) 
11. En github realizar un PR ([​pull request​](https://help.github.com/articles/using-pull-requests/)) del branch creado en 6 y realizar el merge de este.  12. Enviar un mail a ​<fullstack@coderhouse.com>​, avisando que se concluyo con la realizacion de este TP, con el link del repositorio.










