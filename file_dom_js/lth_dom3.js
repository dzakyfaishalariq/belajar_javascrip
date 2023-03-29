const pokemon = document.querySelector('.pokemon');
const baseimgurl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 0; i <= 500; i++) {
    const pokeimg = document.createElement('img');
    pokeimg.src = `${baseimgurl}${i}.png`;
    pokemon.appendChild(pokeimg);
}