# Importamos el mópdulo random para poder utilizar las funciones que contiene.
import random

# Definimos la funcion crear_matriz, esta funcion creara la matriz en base al tamaño que le hayamos dado, con los numeros aleatorios de 0 a 9.
def crear_matriz(filas, columnas):
    # Creamos la matriz asignandole los valores que le hemos pedido al usuario en cuanto al tamaño, y rellenandolo con numeros random de 0 a 9.
    # for _ in = '_' lo utilizamos como variable quye no se utilizara en el bloque de codigo.
    matriz = [[random.randint(0, 9) for _ in range(columnas)] for _ in range(filas)]
    # Devuelve la matriz obtenida con los numeros aleatorios.
    return matriz

# Definimos la funcion sumas_filas que nos devolvera la suma de cada fila.
def sumas_filas(matriz):
    # Utilizamos una lista para iterar sobre las filas y utilizaremos "sum()" para calcular la suma de cada fila.
    suma_filas = [sum(fila) for fila in matriz]
    return suma_filas

# Definimos la funcion sumas_columnas que nos devolvera la suma de cada columna.
def sumas_columnas(matriz):
    # Utilizamos una lista y la funcion "zip(*matriz)" para transponer la matriz (intercambia filas por columnas)
    # despues utilizamos "sum()" para calcular la suma de cada columna.
    suma_columnas = [sum(columna) for columna in zip(*matriz)]
    return suma_columnas


# Utilizamos try-except para manejar las excepciones en caso de que un usuario ingrese un valor no valido.
try:
    # Creamos la variable filas, pedimos al usuario que introduzca el numero que dara el tamaño a nuestra matriz.
    filas = int(input("Ingrese el numero de filas: "))
    # Nos aseguramos de que el numero introducido para las filas es mayor que 0, si no lo fuera lanzaria el error con el mensaje.
    if filas <= 0:
        raise ValueError("El numero de filas debe ser mayor a cero.")
    
    # Creamos la variable columnas, pedimos al usuario que introduzca el numero que dara el tamaño de nuestra matriz.
    columnas = int(input("Ingrese el numero de columnas: "))
    # Nos aseguramos de que el numero introducido para las columnas es mayor que 0, si no lo fuera lanzaria el error con el mensaje.
    if columnas <= 0:
        raise ValueError("El numero de columnas debe ser mayor a cero.")

    # Llamamos a la funcion "crear_matriz" y le damos los valores que nos ha dado el usuario anteriormente.
    matriz = crear_matriz(filas, columnas)

    # Imprime la frase "Matriz creada: " para que veamos la matriz justo abajo.
    print("Matriz creada: ")
    # Creamos un bucle for que recorre cada fila de la matriz.
    for fila in matriz:
        # Imprime cada fila con sus numero aleatorios.
        print(fila) 
    
    # Llamamos a la funcion sumas_filas, despues imprimimos por pantalla la frase con el resultado.
    sumas_filas = sumas_filas(matriz)
    print("La suma de cada fila es:", sumas_filas)

    # Llamamos a la funcion suma_columnas, despues imprimimos por pantalla la frase con el resultado.
    sumas_columnas = sumas_columnas(matriz)
    print("La suma de cada columna es:", sumas_columnas)

# Utilizamos "ValueError" ya que es la excepcion que ocurre cuando el usuario introduce un valor no numerico.
except ValueError as ve:
    # Imprime el mensaje de error para que el usuario introduca un valor valido.
    print("Error: Por favor introduzca números enteros validos para filas y columnas.", ve)

# Utilizamos "Exception" se activa si ocurre cualquier otra excepcion que pueda ocurrir e imprime un mensaje de error mas general.
except Exception as e:
    print("Error inesperado:", e)