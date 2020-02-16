const creatorsUrl = "https://api.rawg.io/api/games";

fetch(creatorsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGame(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function createGame(json) {
    const results = json.results;
    const resultsContainer = document.querySelector(".results");

    let html = "";

    results.forEach(function(result) {
        html += `<div class="game">
                    <h2>${result.name}</h2>
                    <img src="${result.background_image}" alt="${result.name}">
                  </div>`;
    });

    resultsContainer.innerHTML = html;
}
