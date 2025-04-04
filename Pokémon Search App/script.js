const searchbutton = document.getElementById("search-button");
const searchinput = document.getElementById(`search-input`);
let url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/"




searchbutton.addEventListener("click", ()=>{
    let id = searchinput.value
    url = url+id
    fetch(url)
    .then(response => console.log(response))
    .catch(error => console.error(error));
})