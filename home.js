import { displayData } from './Ui.js';
import { getDetailsGame } from './details.js';

export function setupHomePage(gameData) {
    return {
        async getGames(category) {
        
                const data = await fetchApi(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`);
                displayData(data, gameData); 
                this.addCardEventListeners();
          
        },

        addCardEventListeners() {
            const cards = document.querySelectorAll(".card");
            cards.forEach(card => {
                card.addEventListener("click", () => {
                    const id = card.getAttribute("data-id");
                    document.querySelector(".game-page").style.display = "none";
                    document.querySelector(".details").style.display = "block";
                    getDetailsGame(id);
                });
            });
        }
    };
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
