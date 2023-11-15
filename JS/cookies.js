//document generalmente apuntara al navegador en si o la tipo de sesion alli esto nos pondra la una cookie
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