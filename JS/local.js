let names = ["bg", "text"];
loadStorage();

let inputs = document.querySelectorAll("input[type='color']");

inputs.forEach((input, i) => {
    input.addEventListener("change", (evt) => {
        let val = evt.target.value;
        localStorage.setItem(names[i], val);
        document.documentElement.style.setProperty(`--${names[i]}`, val)
    })
})

function loadStorage(){
    names.forEach((name) => {
         let val = localStorage.getItem(name);
         document.getElementById(name).setAttribute
         document.documentElement.style.setProperty
    })
}