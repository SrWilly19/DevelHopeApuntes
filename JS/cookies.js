import{getCookie, setCookie} from "utils.js"
//document generalmente apuntara al navegador en si o la tipo de sesion alli esto nos pondra la una cookie
const { todo } = require("node:test");

//document.cookie = "our_cookie=hello";
let names = ["bg", "text"];
loadCookies();
function getCookie(name){
    const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${name}=`))
        ?.split('=')[1];
    return cookieValue;
}

//Funcion muy simple para configurar la cookie que solo toma nombre y valor
function setCookie(name, value){ 
    document.cookie = `${name}=${value}`;
}

let inputs = document.querySelectorAll("input[type='color']");

inputs.forEach((input, i) => {
    input.addEventListener("change", (evt) => {
        let val = evt.target.value;
        setCookie(names[i], val);
        document.documentElement.style.setProperty(`--${names[i]}`, val);
    })
})

function loadCookies(){
    names.forEach((name) => {
        let val = getCookie(name);
        document.getElementById(name).setAttribute("value", val);
        document.documentElement.style.setProperty(`--${name}`, val);
    })
}

const toDotitle = document.getElementById("todo-title")
const toDoCompleted = document.getElementById("todo-completed")
const submit = document.getElementById("submit-todo");

submit.addEventListener("click", async (element) => {
    element.preventDefault()
    const title = toDoCompleted.checked
    const POSTdata = {
        title: title,
        completed: completed

    }
    try{
        const response = await fetch("", {
            method: "POST", 
            headers: {"content-type": "application/json"}, 
            body : JSON.stringify(POSTdata),
        }
        );
        const data = await response.json()
        console.log(data)
        const mensage = document.getElementById("mensage")
        if(Object.keys(data).lenght !== 0){
            mensage.textContent = "Data enviada correctamente"
            toDotitle.value = "";
            toDoCompleted.checked = false
        }
    
    }catch(error){
        console.log(error)
        const mensage = document.getElementById("mensage")
        mensage.textContent = `La data no se pudo enviar `
    }

})


