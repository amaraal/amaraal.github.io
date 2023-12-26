const API_KEY = "904cfab1212cb6558afcfde94bf4a4e3"
const USER = "homerojunkie"
const PERIOD = "7day"
const LIMIT = 10
const FETCH_URL = `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${USER}&api_key=${API_KEY}&limit=${LIMIT}&period=${PERIOD}&format=json`

var itens = document.querySelector("#toptracks_list").getElementsByTagName("li");

fetch(FETCH_URL)
    .then(res => res.json())
    .then(data => {
        let faixas = data.toptracks.track
        let count = 0;
        faixas.forEach(faixa => {
            itens[count].innerHTML = `${faixa.artist.name} - ${faixa.name}`;
            count++
        });
    })