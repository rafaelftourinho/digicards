window.addEventListener('load', () => {
  document.querySelector('#input').addEventListener('change', async ({ target }) => {
    const digi = await fetch('https://digimon-api.vercel.app/api/digimon');
    const digiArr = await digi.json();
    const find = digiArr.find(({ name }) => name.toLowerCase() === target.value.toLowerCase());
    const image = find.img;

    const imgDigi = document.querySelector('#img-digi');
    const digiTitle = document.querySelector('.card-title');
    const digiText = document.querySelector('.card-text');

    digiText.innerText = `${find.name} é um digimon do tipo ${find.level}`;
    digiTitle.innerHTML = find.name;
    imgDigi.src = image;
    console.log(imgDigi);

    console.log(find);
    return find;
  })
})
