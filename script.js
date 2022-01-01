const pokename = document.querySelector('.name')
const sprite = document.querySelector('img')
const details = document.querySelector('.details')
const typing = document.createElement('span')
const type1 = document.querySelector('.type1')
const type2 = document.querySelector('.type2')

const searchbox = document.querySelector('.search-box')
const colors = {
    fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#39f',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#a59',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#f59',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}
const pokemonDisplay = document.querySelector('.pokemon')
const colors_keys = Object.keys(colors)

searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getPokemon(searchbox.value)
        searchbox.value =""
        typing.innerHTML =""
    }
}

function getPokemon (query) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchbox.value.toLowerCase()}`)
        .then((res) => res.json())
        .then((pokemon) => displayPokemon(pokemon))

    const displayPokemon = (pokemon) => {
        console.log(pokemon)
        const typeName = pokemon.types.map((type)=> type.type.name)

        pokename.innerHTML = pokemon.name
        sprite.setAttribute('src', `${pokemon.sprites.front_default}`)
        typing.innerHTML = 'type:'
        details.prepend(typing)
        type1.innerHTML = typeName[0]
        type2.innerHTML = typeName[1] || ""
        
        const color = colors[typeName[0]]
        const color2 = colors[typeName[1]]
        type1.style.backgroundColor = color
        type2.style.backgroundColor = typeName[1] ? color2 : ""

    }
}


        