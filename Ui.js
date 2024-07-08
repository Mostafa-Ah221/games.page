export function displayData(data, gameData) {
    gameData.innerHTML = '';
    data.forEach(game => {
        gameData.innerHTML += `
            <div class="col">
                <div class="card h-100 bg-transparent" data-id="${game.id}">
                    <div class="card-body">
                        <figure class="position-relative">
                            <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}">
                        </figure>
                        <figcaption>
                            <div class="hstack justify-content-between">
                                <h3 class="h5">${game.title}</h3>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                            <p class="card-text small text-center opacity-50 fw-lighter">
                                ${game.short_description}
                            </p>
                        </figcaption>
                    </div>
                    <footer class="card-footer small hstack justify-content-between">
                        <span class="badge badge-color fs-6">${game.genre}</span>
                        <span class="badge badge-color fs-6 overflow-hidden p-2">${game.platform}</span>
                    </footer>
                </div>
            </div>
        `;
    });
}

export function displayDetails(detailsID, data) {
    detailsID.innerHTML = `
        <div class="container">
            <header class="hstack justify-content-between">
                <h1 class="text-center h3 py-4">${data.title}</h1>
                <button class="btn-close btn-close-white" id="btnClose"></button>
            </header>
            <div class="row g-4" id="detailsContent">
                <div class="col-md-4">
                    <img src="${data.thumbnail}" class="w-100" alt="image details">
                </div>
                <div class="col-md-8">
                    <h3>Title: ${data.title}</h3>
                    <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
                    <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
                    <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
                    <p class="fs-4">${data.description}</p>
                    <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
                </div>
            </div>
        </div>
    `;
    document.querySelector("#btnClose").addEventListener("click", () => {
        document.querySelector(".game-page").style.display = "block";
        document.querySelector(".details").style.display = "none";
    });
}
