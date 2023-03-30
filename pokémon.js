"use strict";

window.addEventListener("load", start);

async function start() {
  console.log("start running");
  const pokemonList = await fetchPokemonJSON("https://cederdorff.github.io/dat-js/05-data/pokemons.json");
  // const pokemonList = await getPokémon("raw.githubusercontent.com/sassnoe/Data-pokemon-app/main/test.json");

  showAllPokemon(pokemonList);
}

async function fetchPokemonJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showAllPokemon(pokemonList) {
  for (const pokemon of pokemonList) {
    displayPokemon(pokemon);
  }
}

function displayPokemon(pokemon) {
  document.querySelector("#pokemon").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <article class="pokemon-card-view">
        <h2>${pokemon.name}</h2>
        <h3>#0${pokemon.dexindex}</h3>
        <h3>Type: ${pokemon.type}</h3>
        <img src="${pokemon.image}"/>
    </article>`
  );

  document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    console.log("pokemonClicked");

    document.querySelector("#pokemon-name").textContent = pokemon.name;
    document.querySelector("#pokemon-image").src = pokemon.image;
    document.querySelector("#pokemon-footprint").src = pokemon.footprint;
    document.querySelector("#pokemon-dexindex").textContent = `Dexnumber: #${pokemon.dexindex}`;
    document.querySelector("#pokemon-subtype").textContent = pokemon.subtype;
    document.querySelector("#pokemon-weaknesses").textContent = `Weaknesses: ${pokemon.weaknesses}`;
    document.querySelector("#pokemon-ability").textContent = `Abilities: ${pokemon.ability}`;
    document.querySelector("#pokemon-gender").textContent = `Gender Ratio: ${pokemon.gender}`;
    document.querySelector("#pokemon-height").textContent = `Height: ${pokemon.height}cm`;
    document.querySelector("#pokemon-weight").textContent = `Weight: ${pokemon.weight}g`;
    document.querySelector("#pokemon-generation").textContent = `Generation: ${pokemon.generation}`;
    document.querySelector("#pokemon-canEvolve").textContent = evolution(pokemon);

    document.querySelector("#pokemon-hp").textContent = `HP: ${pokemon.statsHP}`;
    document.querySelector("#pokemon-attack").textContent = `Attack: ${pokemon.statsAttack}`;
    document.querySelector("#pokemon-defence").textContent = `Defence: ${pokemon.statsDefence}`;
    document.querySelector("#pokemon-specialattack").textContent = `SP.Attack: ${pokemon.statsSpecialAttack}`;
    document.querySelector("#pokemon-specialdefence").textContent = `SP.Defence: ${pokemon.statsSpecialDefence}`;
    document.querySelector("#pokemon-speed").textContent = `Speed: ${pokemon.statsSpeed}`;

    document.querySelector("dialog").showModal();
    document.querySelector("#button-close").addEventListener("click", closeModal);
  }
}

function evolution(pokemon) {
  let evolutionhtml = "";
  if (pokemon.canEvolve === false) {
    evolutionhtml = /*html*/ `
        ${pokemon.name} is the final evolution.
    `;
  } else {
    evolutionhtml = /*html*/ `
        ${pokemon.name} has one or more evolutions!
    `;
  }
  return evolutionhtml;
}

function closeModal() {
  document.querySelector("#pokemon-dialog").close();
}
