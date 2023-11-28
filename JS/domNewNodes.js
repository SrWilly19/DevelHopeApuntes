let h1 = document.querySelector("h1")
h1.style.display = "inline-block"
let width = h1.clientWidth

let redBox = document.getElementById("red-box");
redBox.style.width = width + "px";
redBox.style.height = width + "px";
redBox.style.backgroundColor = "red";

async function loadDogImage(){
    let res = await fetch("https://dog.ceo/api/breeds/image/random")
    let json = await res.json()
    let url = json.message;
    let container = document.getElementById("dog-container")
    let img = document.createElement("img")
    img.height = "400";
    img.width = "400";
    img.src = url;
    container.appendChild(img);
}

