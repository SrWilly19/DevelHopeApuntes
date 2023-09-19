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
-write some code.
-add that code to git
-commit hte added code
-push our code to athe server


git init
para iniciar un repositorio donde se guardaran las cosas


git add. selecciona todos los archivos

git commit -m "se agrego un nuevo archivo" haces el commit y le das un mensaje

git graph para ver las ramas del repositorio
git log muestra los commits hechos
git status muestra los archivos agregados o pendientes
git branch rama2 crea una nueva rama
gir checkout rama2 te mueve a esa nueva rama
git checkout -b rama2 crear un rama y te mueve a ella directamente
git merge rama1 nos permite seleccionar que parte del codigo nos quedamos si esta en conflicto porque han cambiadolo mismo.
git diff muestra cambios


para que un archivo no se vaya a git, es decir que no se guarde alli
creamos un archivo .gitignore y dentro pondremos los nombres de los archivos que queremos que no se suban a git  
*/