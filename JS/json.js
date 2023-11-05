class Child {
    birthday;
    name;
    constructor(birthday, name){
        this.birthday = birthday;
        this.name = name;  
    }
    //Cambia lo que imprimimos por pantalla de manera que insertando esto solonos dira el nombre de los childrens que añadamos
    toJSON(){
        return{
            name: this.name,
            birthday: this.birthday
        }
    }
}
const sallybirthday = new Date(1987, 10, 13)
console.log(sallybirthday);

let json = {
    "name": "Sally",
    //La clase de fecha tiene una funcion especial llamada toJSON que decide como se colocara en una cadena cuando usamos el metodo stringify
    "birthday": new Date(1987, 10, 13),
    "children": [
        new Child(new Date(2018, 10, 13), "Billy"),
        new Child(new Date(2017, 10, 13), "Sally Jr.")
    ]
}

//Cuando llamamos a .stringfy hace todo lo posible para encontrar la mejor estructura de datos para esa clase en particular.
let str = JSON.stringify(json);

console.log(str);
//lo separamos y con console.log poniendo la clave del valor que queremos imprimir podemos hacerlo
//let obj = JSON.parse(str);
//console.log(obj["name"]);
let obj = JSON.parse(str, (key, val) => {
    if(key === "birthday") return new Date (val);
    return val;
});

//console.log(json["birthday"].getDate());
//console.log(obj.children[0].birthday.getDay());