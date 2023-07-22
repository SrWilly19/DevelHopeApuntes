# Importamos el mópdulo random para poder utilizar las funciones que contiene.
import random

# Definimos la funcion crear_matriz, esta funcion creara la matriz en base al tamaño que le hayamos dado, con los numeros aleatorios de 0 a 9.
def crear_matriz(filas, columnas):
    # Creamos la matriz asignandole los valores que le hemos pedido al usuario en cuanto al tamaño, y rellenandolo con numeros random de 0 a 9.
    # for _ in = '_' lo utilizamos como variable quye no se utilizara en el bloque de codigo.
    matriz = [[random.randint(0, 9) for _ in range(columnas)] for _ in range(filas)]
    # Devuelve la matriz obtenida con los numeros aleatorios.
    return matriz

# Utilizamos try-except para manejar las excepciones en caso de que un usuario ingrese un valor no valido.
try:
    # Creamos la variable filas, pedimos al usuario que introduzca el numero que dara el tamaño a nuestra matriz.
    filas = int(input("Ingrese el numero de filas: "))
    # Creamos la variable columnas, pedimos al usuario que introduzca el numero que dara el tamaño de nuestra matriz.
    columnas = int(input("Ingrese el numero de columnas: "))

    # Llamamos a la funcion "crear_matriz" y le damos los valores que nos ha dado el usuario anteriormente.
    matriz = crear_matriz(filas, columnas)

    # Imprime la frase "Matriz creada: " para que veamos la matriz justo abajo.
    print("Matriz creada: ")
    # Creamos un bucle for que recorre cada fila de la matriz.
    for fila in matriz:
        # Imprime cada fila con sus numero aleatorios.
        print(fila) 
# Utilizamos "ValueError" ya que es la excepcion que ocurre cuando el usuario introduce un valor no numerico.
except ValueError:
    # Imprime el mensaje de error para que el usuario introduca un valor valido.
    print("Error: Por favor introduzca números enteros validos para filas y columnas. ")