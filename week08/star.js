//fetch the data and return it in JSON format
function getJSON(url) {
        return fetch(url)
        .then( function (response) {
                if (!response.ok) {
                        throw Error(response.statusText);
                } else {
                        return response.json();
                }
        })
        .catch(function (error) {
                console.log(error);
        });
}

//accommodation for complex models
function getShips(url) {
        return getJSON(url);
}


function renderShipList(ships, shipListElement) {
        const list = shipListElement.children[1];
        list.innerHTML = "";
        ships.forEach(function (ship) {
                let listItem = document.createElement("tr");
                listItem.innerHTML = `
                <td><a href="${ship.url}">${ship.name}</a></td>
                <td>${ship.length}</td>
                <td>${ship.crew}</td>
                `;

                listItem.addEventListener("click", function (event) {
                        event.preventDefault();
                        getShipDetails(ship.url);
                });
                
                list.appendChild(listItem);
        });
}


function renderShipDetails(shipData) {
        console.log(shipData);
        //console.log(shipData.name);

        //document.getElementsByClassName("name").innerHTML = `Name: ${shipData.name}`;
        //document.getElementsByClassName("model").innerHTML = `Model: ${shipData.model}`;
        //document.getElementsByClassName("class").innerHTML = `Starship Class: ${shipData.starship_class}`;
        //document.getElementsByClassName("manu").innerHTML = `Manufacturer: ${shipData.manufacturer}`;

        //document.getElementById("detailsbox").style.display = "block";
}


function showShips(url = "https://swapi.dev/api/starships/") {
        getShips(url).then(function (data) {
                const results = data.results;

                const shipListElement = document.getElementById("shiplist");
                renderShipList(results, shipListElement);

                if (data.next) {
                        const next = document.getElementById("next");
                        next.onclick = () => {
                                showShips(data.next);
                        };
                }
                if (data.previous) {
                        const prev = document.getElementById("prev");
                        prev.onclick = () => {
                                showShips(data.previous);
                        };
                }
        });
}


function getShipDetails(url) {
        getShips(url).then(function (data) {
                renderShipDetails(data);
        });
}

showShips();