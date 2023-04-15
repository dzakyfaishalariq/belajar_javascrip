const pokemon = document.querySelector('.pokemon');
const baseimgurl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 0; i <= 500; i++) {
    const pokeimg = document.createElement('div');
    pokeimg.classList.add('pokeimg');
    const newimg = document.createElement('img');
    newimg.src = `${baseimgurl}${i}.png`;
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    pokeimg.appendChild(newimg);
    pokeimg.appendChild(label);
    pokemon.appendChild(pokeimg);
}
