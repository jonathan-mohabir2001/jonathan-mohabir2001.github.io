let searchButton = document.querySelector('#search');

searchButton.addEventListener('click', () => {
  console.log('button Pressed');
  sendApiRequest();
});

async function sendApiRequest() {
  let API_KEY = 'mkMrRUerVThEa3X9l8qdhMqUYC61Il1ecEdHY6Gw';
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}
//https://apod.nasa.gov/apod/image/2201/M31_HstSubaruGendler_960.jpg"
function useApiData(data) {
  document.querySelector('#content').innerHTML += data.explanation;
  document.querySelector('#content').innerHTML += `<img src="${data.url}">`;
}
