import { setupHomePage } from './home.js';

document.addEventListener('DOMContentLoaded', () => {
    const gameData = document.querySelector("#gameData");
    if (!gameData) {
        console.error("Element with ID 'gameData' not found.");
        return;
    }
    const homePage = setupHomePage(gameData);

    homePage.getGames('mmorpg');

    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        link.addEventListener("click", () => {
            const category = link.getAttribute("data-category").trim().toLowerCase();
            links.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
            homePage.getGames(category);
        });
    });
});
