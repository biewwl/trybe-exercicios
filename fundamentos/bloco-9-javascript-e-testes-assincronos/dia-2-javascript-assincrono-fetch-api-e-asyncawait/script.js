const URL_API =  'https://api.coincap.io/v2/assets';

const list = document.querySelector('#list');

const create = (data) => {
  data.data.filter((e, i) => i < 10).forEach((e) => {
    const li = document.createElement('li'); 
    li.innerText = `${e.name} (${e.symbol}): ${e.priceUsd}`
    list.appendChild(li);
  });
}
 
const getApi = async () => {
  const fetchApi = await fetch(URL_API);
  const data = await fetchApi.json();
  create(data);
}

window.onload = getApi();
