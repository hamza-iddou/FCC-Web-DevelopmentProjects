const searchbutton = document.getElementById("search-button");
const searchinput = document.getElementById(`search-input`);
let url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/"
const hp = document.getElementById(`hp`);
const attack = document.getElementById(`attack`);
const defense = document.getElementById(`defense`);
const special_attack = document.getElementById(`special-attack`);
const special_defense = document.getElementById(`special-defense`);
const speed = document.getElementById(`speed`);
const pokemon_name = document.getElementById(`pokemon-name`);
const pokemon_id = document.getElementById(`pokemon-id`);
const weight = document.getElementById(`weight`);
const height = document.getElementById(`height`);
const type = document.getElementById(`types`);
const pimg = document.getElementById(`pokemonimag`);



searchbutton.addEventListener("click", async()=>{
    let id = searchinput.value.trim().toLowerCase();
    url = url+id
    
    const data = await fetchdata(url);
    if(data){
        renderdata(data)
        console.log(data)
    }
})


async function fetchdata(test){
    try{
        const response = await fetch(test);
        if(!response.ok){
            alert("Pokémon not found")
            return null;
        }
        return await response.json();
    }
    catch(error){
        console.log("Error",error);
        alert("Something went wrong!");
        return null;
    }
}

function renderdata(data){
    const stats = data.stats;
    hp.textContent = stats[0].base_stat;
    attack.textContent = stats[1].base_stat;
    defense.textContent = stats[2].base_stat;
    special_attack.textContent = stats[3].base_stat;
    special_defense.textContent = stats[4].base_stat;
    speed.textContent = stats[5].base_stat;
    pokemon_name.textContent = data.name;
    pokemon_id.textContent = data.id;
    weight.textContent =  data.weight;
    height.textContent = data.height;
    const types = data.types.map(t => t.type.name).join(", ");
    type.textContent = types;

    pimg.src = data.sprites.front_default;

}