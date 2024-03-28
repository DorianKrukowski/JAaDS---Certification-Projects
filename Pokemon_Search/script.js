const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const pokemonNameRes = document.getElementById("pokemon-name");
const pokemonIdRes = document.getElementById("pokemon-id");
const weightRes = document.getElementById("weight");
const heightRes = document.getElementById("height");
const typesRes = document.getElementById("types");
const hpRes = document.getElementById("hp");
const attackRes = document.getElementById("attack");
const defenseRes = document.getElementById("defense");
const specialAttackRes = document.getElementById("special-attack");
const specialDefenseRes = document.getElementById("special-defense");
const speedRes = document.getElementById("speed");

const imageDiv = document.getElementById("image");

searchBtn.addEventListener("click", () => {
  const name = input.value;
  search(name);
});

const search = async (input) => {
  try {
    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input.toLowerCase()}`
    );
    const resJsoned = await res.json();
    const { height, id, name, sprites, stats, types, weight } = resJsoned;
    typesRes.innerHTML = "";
    heightRes.textContent = `Height: ${height}`;
    pokemonIdRes.textContent = `#${id}`;
    pokemonNameRes.textContent = name.toUpperCase();
    weightRes.textContent = `Weight: ${weight}`;

    imageDiv.innerHTML = `<img id="sprite" src="${sprites.front_default}">`;

    var individualTypes = [];
    types.forEach((el) => {
      const typeName = el.type.name;
      individualTypes.push(typeName);
    });

    individualTypes.forEach((type) => {
      typesRes.innerHTML += ` <span>${type.toUpperCase()}</span> `;
    });

    var individualStats = {};
    stats.forEach((el) => {
      const statName = el.stat.name.replace(/-/g, "");
      const baseStat = el.base_stat;
      individualStats[statName] = baseStat;
    });

    const { attack, defense, hp, specialattack, specialdefense, speed } =
      individualStats;

    attackRes.textContent = `${attack}`;
    defenseRes.textContent = `${defense}`;
    hpRes.textContent = `${hp}`;
    specialAttackRes.textContent = `${specialattack}`;
    specialDefenseRes.textContent = `${specialdefense}`;
    speedRes.textContent = `${speed}`;
  } catch (err) {
    alert("Pokémon not found");
  }
};
