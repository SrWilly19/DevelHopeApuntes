//Vamos a exportar funciones para poder importarlas despues desde cualquier otro archivo
//Para importarlos en otro archivo tenemos que poner en la parte de arriba de nuestro documento 'import {NombresDeLasCosasQueQueremosImportar} from "NombreArchivoDeOrigen"'
//Tambien tendremos que ponerlo en nuestro html como otro script '<script type="module" src="utils.js"></script> '
//En el html tendremos que ponerle el atributo 'type= "module"' a todos nuestros scripts donde importemos o exportemos alguna cosa de esta manera los podrmeos utilizar
export function getCookie(name){
    const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${name}= `))
        ?.split('=')[1];
    return cookieValue;
}

export function setCookie(name, value){
    document.cookie = `${name}=${value}`;
}

//Se hace de inmediato hasta podemos hacerlo con estas claves

export const KEYS = ["bg", "text", "username"];