"use strict";

window.addEventListener("load", start);

async function start() {
  console.log("start running");
  const pokemonList = await getPokemon("https://cederdorff.github.io/dat-js/05-data/pokemons.json");
  // const pokemonList = await getPokémon("raw.githubusercontent.com/sassnoe/Data-pokemon-app/main/test.json");

  showAllPokemon(pokemonList);
}

function showAllPokemon(pokemonList) {
  for (const pokemon of pokemonList) {
    showPokemon(pokemon);
  }
}

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showPokemon(pokemon) {
  document.querySelector("#pokemon").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <article>
        <h2>${pokemon.name}</h2>
        <h3>${pokemon.type}</h3>
        <img src="${pokemon.image}"/>
    </article>`
  );

  document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    // document.querySelector
  }
}
