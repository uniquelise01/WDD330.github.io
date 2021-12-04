
import {nationalParks} from "./parks.js";

//fetch API data

async function fetchAPI(url) {
        return fetch(url)
        .then(function(response) {
                if (!response.ok) {
                        throw Error(response.statusText);
                } else {
                let res = response.json();
                console.log(res);
                return res;
                }
        })
        .catch(function(error) {
                console.log(error);
        });
}

function showParks(url) {
        fetchAPI(url).then(function (data) {
                const results = data.data;

                results.forEach(addPark)
        })
}

function addPark(park) {
        let natParks = new nationalParks(park, "display-parks", "detail-box");
        natParks.addParkToList();
}


//initiate the page
showParks("https://developer.nps.gov/api/v1/parks?&api_key=eRVdd31TgcE9QY6OSFWqmMnSN2fl0H9IhLitRijo");