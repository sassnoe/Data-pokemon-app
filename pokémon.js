"use strict";

window.addEventListener("load", start);

async function start() {
  console.log("start running");
  const pokemon = await getPokémon("https://cederdorff.github.io/dat-js/05-data/pokemons.json");

  showAllPokémon(pokemon);
}

async function getPokémon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showAllPokémon(pokemonList) {
  for (const pokemon of pokemonList) {
    showPokémon(pokemon);
  }
}

function showPokémon(pokémon) {
  document.querySelector("#pokémon").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <article>
        <h2>${pokémon.name}</h2>
        <img src = ${pokémon.image}/>
    </article>`
  );

  document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    showPokémonModal(pokemon);
  }
}

function showPokémonModal(pokemon) {
  document.querySelector("#pokemon-image").src = pokemon.image;
  document.querySelector("#pokemon").showModal();
}
