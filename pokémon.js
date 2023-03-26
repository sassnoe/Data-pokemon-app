"use strict";

window.addEventListener("load", start);

function start() {
  console.log("start running");
  const umbreon = getPokémon("data/umbreon.json");

  showPokémon(umbreon);
}

async function getPokémon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showPokémon(pokémon) {
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    
    <article>
        <h2>${pokémon.name}</h2>
        <img src="${pokémon.image}"/>
    </article>`
  );
}
/* Data Structure
name: tekst
description: tekst
ability: tekst
image: url
footprint: url (til et andet billede)
dexindex: tal
type: tekst – begrænset til: fire, ice, flying, etc …
subtype: tekst
weaknesses: tekst – en kommasepareret liste over types
gender: tekst: male eller female
weight: tal – vægt i gram
height: tal – højde i cm
generation: tal
spilversion: tekst
canEvolve: boolean
statsHP: tal 0-10
statsAttack: tal 0-10
statsDefence: tal 0-10
statsSpecialAttack: tal 0-10
statsSpecialDefence: tal 0-10
statsSpeed: 0-10
*/
