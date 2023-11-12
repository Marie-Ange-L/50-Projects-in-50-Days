const poke_container = document.getElementById("poke-container");
const pokemon_count = 650;
const colors = {
	fire: "#FDDFDF",
	grass: "#DEFDE0",
	electric: "#FCF7DE",
	water: "#DEF3FD",
	ground: "#f4e7da",
	rock: "#d5d5d4",
	fairy: "#fceaff",
	poison: "#98d7a5",
	bug: "#f8d5a3",
	dragon: "#97b3e6",
	psychic: "#eaeda1",
	flying: "#F5F5F5",
	fighting: "#E6E0D4",
	normal: "#F5F5F5",
};

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
	for (let index = 1; index < pokemon_count; index++) {
		await getPokemon(index);
	}
};

const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const response = await fetch(url);
	const data = await response.json();
	createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
	const pokemonEl = document.createElement("div");
	pokemonEl.classList.add("pokemon");

	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); //to have the first letter only in UpperCase
	const id = pokemon.id.toString().padStart(3, "0"); // to add zeros before id

	const poke_types = pokemon.types.map((type) => type.type.name);
	const type = main_types.find((type) => poke_types.indexOf(type) > -1);
	const color = colors[type];

	pokemonEl.style.backgroundColor = color;

	const pokemonInnerHTML = `
                <div class="img-container">
					<img
						src="${pokemon.sprites.other.dream_world.front_default}"
						alt=""
					/>
				</div>
				<div class="info">
					<span class="number">#${id}</span>
					<h3 class="name">${name}</h3>
					<small class="type">Type: <span>${type}</span></small>
				</div>
    `;

	pokemonEl.innerHTML = pokemonInnerHTML;

	poke_container.appendChild(pokemonEl);
};

fetchPokemons();
