const url = `https://api.rawg.io/api/games/4200`;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createCreator(json);
    })
    .catch(function() {
        console.log("hei");
    });

function createCreator(json) {
    console.dir(json)
    const heading = document.querySelector("#heading");
    const image = document.querySelector(".image");
    const description = document.querySelector(".description");

    console.log(json.background_image)

    heading.innerHTML = json.name
    image.style.backgroundImage = `url('${json.background_image}')`;
    description.innerHTML = json.description
}
