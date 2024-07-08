// details.js
import { displayDetails } from './Ui.js';

export async function getDetailsGame(id) {
    const data = await fetchApi(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`);
    const detailsID = document.querySelector("#detailsID");
    displayDetails(detailsID, data);
}

async function fetchApi(endpoint) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '09288a15c6msh4f0740a3ef190e7p118cb3jsn6f6b82a76cf7',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const api = await fetch(endpoint, options);
    return await api.json();
}
