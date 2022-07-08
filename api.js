const input = document.querySelector('#input');
const imgDigi = document.querySelector('#img-digi');
const digiTitle = document.querySelector('.card-title');
const digiText = document.querySelector('.card-text');

const fetchAPI = () => 'https://digimon-api.vercel.app/api/digimon';

function digiAPI(url) {

  input.addEventListener('change', async ({ target }) => {
    const digi = await fetch(url);
    const digiArr = await digi.json();
    const find = digiArr.find(({ name }) => name.toLowerCase() === target.value.toLowerCase());
    const image = find.img;

    const { name, level } = find;

    digiText.innerText = `${name} é um digimon do tipo ${level}`;
    digiTitle.innerHTML = name;
    imgDigi.src = image;
    console.log(imgDigi);

    console.log(find);
    return find;
  })
}

window.onload = () => digiAPI(fetchAPI());

module.exports = { digiAPI };
