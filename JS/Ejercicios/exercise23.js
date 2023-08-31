/*# Exercise 23

Print in the console the price of the room according to the following scheme:

* Prince for Basic Room --> 50€
* Price for Junior Suite Room --> 80€
* Price for Master Suite  --> 100€

Use the Switch statement. */ 

let priceRoom = 50;

switch(priceRoom){
    case "50":
        console.log("Basic Room");
        break;
    case "80":
        console.log("Junior Suite Room");
        break;
    case "100":
        console.log("Master Suite");
        break;
    default:
        console.log("No has reservado ninguna habitacion");
        break;
}