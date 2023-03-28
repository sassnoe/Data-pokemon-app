"use strict";

window.addEventListener("load", start);

function start() {
  console.log("start running");
  const umbreon = getPokémon("https://cederdorff.github.io/dat-js/05-data/pokemons.json");

  showPokémon(umbreon);
}

async function getPokémon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showPokémon(pokémon) {
  document.querySelector("pokémon").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    
    <article>
        <h2>${pokémon.name}</h2>
        <img src = ${pokémon.image}/>
    </article>`
  );
}
