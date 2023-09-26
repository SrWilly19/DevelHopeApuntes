/*Conceptos basicos.
Version Control System (VCS)
main branch
-Save our work (Guardar tu trabajo). 
    -First commit (timestamp) (primera confirmacion).
    -Second feature added (timestamp) (le agregamos la segunda caracteristica)
    -Third feature added (timestamp) (agregamos nuestra tercera caracteristica).
-revert back to any previous save.
-automatically keep a detailed history of your work.
-easily collaborate and share code with others.
-merge different pieces of code together.
-branch out and experiment.
Guardar todas las versiones de nuestro trabajo y tenerlsa en una estrucutar tipo arbol. 
Marcada de tiempo en cada una de las cosas que hace y cada una de ellas está vinculada en un arbol,
la primera se basara en la segunda y la segunda en  la tercera, lo mejor del sistema de versiones es que 
en cualquier momento podemos volver a cualquier guardado.
Otra caracteristica es que puedes mantener automaticamente un historial detallado de tu trabajo.
Tambien hace que sea mucho mas facil colaborar entre trabajadores porque siempre puedes ver quien 
modifico que y poder preguntar el porque, esto tambien hace que se pueda trabajar en paralelo con otros usuarios
Nuestro sistema de control de versiones realiza un seguimiento de este gran historial
Trabajamos en paralelo para que nuestro sistema de control de versiones  pueda fusionar diferentes fragmentos de codigo.
*/

/*Git intro
-version control system.
-command line tool.
    -visual alternatives 
-available across platforms
-gitghub, gitlab, bitbucket
Usamos Git a través de una terminal o a traves de algun tipo de consola o linea de comandos
Hay formas de usarlo mas orientada a la interfaz de usuario.
Nos centraremos mucho mas en GitHub, es un lugar donde podemos alojar nuestros repositorios
Git y permitirles colaborar de manera mas sencilla. Podemos simplemente colaborar y hacer que las personas
compartan su codigo.
Las diferentes etapas cuando usamos Git son, por supuesto, para escribir código.
Luego agregamos este código a Git, y finalmente, queremos cometer la puesta en escena+ç
Querremos confirmar el codigo agregado y luego enviar nuestro codigo al servidor.
-write some code (working area) (Primero escribiremos algo de codigo sin agregarlo a git)
-add that code to git (staging area) (Agregamos el codigo a Git y esto lo convierte en nuestra area de ensayo)
-commit the added code (make a new version) (todo lo que agreguemos ira a esa nueva version)
-push our code to athe server

Si hacemos un "git status" despues de añadir un archivo y hacer un commit de otro, nos deben salir uno en verde y otro en rojo, el rojo nos dira 
que no esta haciendo el seguimiento de ese archivo.
Cada vez que hacemos un git commit nos dejara el mensaje de que lo ha agregado a nuestro area de ensayo
Si listamos todos los elementos (incluidos los ocultos) que tenemos dentro de nuestro directorio de git veremos que tenemos varias carpetas con "."  ".." ".git" que estan ocultas

*Cuando iniciamos un comando en Git tendremos que poner primero git seguido del comando*

git pull hace todo de una mientras que git log nos permite dividir el proceso en pasos, utilizando "git pull" y "git fetch"

git init ==> para iniciar un repositorio donde se encuentra y donde guardara las cosas
git add. ==> selecciona todos los archivos para hacer el commit
git add nombreDelArchivo ==> selecciona un archivo en especifico para hacer el commit
git commit -m "se agrego un nuevo archivo" ==> haces el commit y le das un mensaje con "-m" para que sepas que ha pasado
git push origin main ==> vamos a subir nuestro codigo a la pagina origen que tenemos seleccionada (origin), todo nuestro main que es donde tendremos todo.
git pull origin main ==> Si realizamos un cambio en algun archivo desde la pagina de github si queremos tener los archivos actualizados debemos hacer este pull
para que nos traiga todos los cambios realizados en la pagina a nuestro ordenador donde estamos trabajando
git graph ==> para ver las ramas del repositorio
git log ==> muestra los commits hechos
git remote show origin ==> nos enseñara en que URL esta almacenando nuestro repositorio de Git y donde guardara (push) nuestro codigo
git status ==> muestra los archivos agregados o pendientes
git branch rama2 ==> crea una nueva rama
gir checkout rama2 ==> te mueve a esa nueva rama
git checkout -b rama2 ==> crear un rama y te mueve a ella directamente
git merge ramaDeLaQueVienenLosDatos ==> nos permite fusionar varias ramas y en visual nos permite seleccionar que parte del codigo nos quedamos si esta en conflicto porque han cambiado lo mismo
Desde la linea de comandos nos dire que hay un conflicto y debemos meternos en el archivo para ver que lineas de codigo quermos quedarnos, cuando hayamos decidido solo tendremos que guardar el 
archivo, preparalo para el commit (git add archivo) y entonces podremos hacer el commit sin ningun problema
git diff ==> muestra cambios
git restore nombreDelArchivo ==> nos permite volver a su estado anterior
git restore --staged nombreDelArchivo ==> Si ya hemos preparado ese arhcivo para el commit y en "git status" nos sale en verde, utilizamos este comando para vuelva al estado de no preparado para 
el commit y nos dejara la opcion de utilizar "git restore" para poder dejar el archivo en su estado anterior
git reset numeroDelCommit ==> deshace el commit pero si queremos restaurar algunos archivos tendremos que hacer el "git restore"
git revert codigoCortoIzquierda ==> Utilizamos el codigo numerico corto que aparece a la izquierda de las lineas para que podemos revertir esos commits sin llegar a eliminarlos por si 
tuvieramos que volver a un estado anterior ya que no elimina el registro solo lo revierte a un cambio anterior o que hayamos marcado
git fetch ==> actualiza todas las ramas que se han hecho
git fetch origin main ==> recupera todos los commits que se han realizado pero no los fusionara en nuestro git actual, si quiero fusionar todo debemos utilizar el comando "git merge"
git pull origin main ==> subes el commit que tengas preparado a tu pagina inicial
origin ==> es solamente una convencion para llamarlo como variable, pero puedes llamarlo como quieras
git --help ==> nos sive para que nos liste todos los comandos que podemos utilizar
git config -l ==> lista todos los elementos que tenemos.
git config --global ==> Cambiaremos la configuracion global de nuestro git es decir de todo el ordenador 
(git config --global user.name "Willy") ==> cambiamos el nombre en todo el git, si no salta error probablemente este bien
git config --global init.defaultBranch main ==>  con el comando "init.defaultBranch" configuramos la rama principal que se creará cuando inicialices un nuevo repositorio, y el "main" 
siguiente es la rama que queremos establecer como predeterminada.
git config --help ==> nos dara la lista de comandos que podemos utilizar con "git config".
git log ==> es una lista de todos los diferentes commits hechos en nuestro repositorio, con los autores que lo han hecho y el mensaje que debemos poner para que sea bastante descriptivo
git log --oneline ==> nos enseñara los codigos de cada cambio por si queremos tenerlos mas a mano para poder utilizarlos con otro comando como revert
git branch ==> Nos enseñara las ramas que tenemos y la rama en la que estamos con una estrellita.
git checkout . ==> Hace que elimine todos los cambios hasta el ultimo commit (si realizamos un git status despues nos debe decir que no a habido ningun cambio como para hacer un commit)
git checkout (codigo has de la parte a la que queremos volver) ==>  hace que vuelvas atras en el tiempo y te quedes con los cambios que se hicieron hasta el commit que has utilizado como codigo
nos aparecera un texto explicandonos como crear una nueva rama para que no tengamos que perder ningun archivo y nos enseña el comando que debemos de utilizar siqueremos retroceder hasta antes de
utilizar git checkout: 
git switch - ==> deshacemos el git checkout que hemos hecho antes
ls -la ==> listara todos los archivos y carpetas incluidas las ocultas

git diff ==> Solo devolvera diferencias entre la version actual y el ultimo commit que  hicimos de todos los archivos, si creamos nuevos archivos o eliminamos lineas de codigo
*Si ejecutamos "git diff" despues de hacer un cambio en un archivo, como agregar una linea se vera asi*
--- a/text.txt
+++ b/text.txt ==> te dice que ha sido modificado
@@ -1,2 +1,3 @@
-Here's some text! ==> saldra con un - y con la linea en rojo si se ha eliminado dicha  linea 
Here's some more text!
+Here's the line I added ==> te dice que linea a sido la que se ha añadido en color verde

*Clonar un repositorio de internet en nuestro ordenador*
(Comando que utilizaremos)
git clone "enlace de la pagina que copiaremos sin comillas"==> copiara un repositorio de internet y lo colocara en nuestro ordenador 
Debemos tener la pagina de GitHub que vamos a clonar abierta, ya que tendremos que coger el enlace desde el boton verde, normalmente utilizamos la opcion SSH.


para que un archivo no se vaya a git, es decir que no se guarde alli
creamos un archivo .gitignore y dentro pondremos los nombres de los archivos que queremos que no se suban a git  
*/