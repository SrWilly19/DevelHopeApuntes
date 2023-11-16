async function fetchData(){

    try{
        const response = await fetch("https://rickandmortyapi.com/api/character")
        
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json()
        data.results.forEach(element => {
            const contenedor = document.createElement("div");
            contenedor.classList.add("container");
            const idPerson = document.createElement("h1");
            idPerson.classList.add("idPerson");
            const namePerson = document.createElement("h1");
            namePerson.classList.add("namePerson");
            const imagePerson = document.createElement("img");
            imagePerson.classList.add("imagePerson");
            contenedor.appendChild(idPerson);
            contenedor.appendChild(namePerson);
            contenedor.appendChild(imagePerson);
            const {id, name, image} = element;
            idPerson.textContent = `ID: ${id}`
            namePerson.textContent = `Nombre personaje: ${name}`
            imagePerson.src = image;
            const body = document.getElementById("body")
            body.appendChild(contenedor);
        });
    }catch(error){
        console.error("Error fetching data: ", error.message);
    } 
}

fetchData();