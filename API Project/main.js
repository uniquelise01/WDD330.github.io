import {nationalParks} from "./parks.js";
import {menuButtons} from "./menu.js";

//fetch API data *********************************

let newResponse = [];

export function getResponse() {
        return newResponse;
}

//paginated fetch
async function paginated_fetch(
        url = "https://developer.nps.gov/api/v1/parks?&api_key=eRVdd31TgcE9QY6OSFWqmMnSN2fl0H9IhLitRijo", 
        start = 0,
        previousResponse = []
        ) {
        return fetch(`${url}&start=${start}`)
        .then(response => {
                if (!response.ok) {
                        throw Error(response.statusText);
                } else {
                let res = response.json();
                return res;
                }
        })
        .then(function (data) {
                let result = data.data;

                newResponse = [...previousResponse, ...result]; // Combine the two arrays

                if (result.length !== 0) {
                start += 50;

                return paginated_fetch(url, start, newResponse);
                }

                showParks(newResponse);
        })
        .catch(function(error) {
                console.log(error);
        });
      }


let sliceStart = 0;
let sliceEnd = 49;

export function showParks(results) {
        const loadingDiv = document.getElementById('loading');
        loadingDiv.style.display = "none";

        document.getElementById('display-parks').innerHTML = '';
        
        let pageResults = results.slice(sliceStart, sliceEnd);
        pageResults.forEach(addPark);
}

export function addPark(park) {
        let natParks = new nationalParks(park, "display-parks", "detail-box");
        natParks.addParkToList();
}

//prev and next buttons **************************
//prev button
document.getElementById('prev').addEventListener('click', e => {
        if (sliceStart > 0) {
                sliceStart -= 50;
                sliceEnd -= 50;
                showParks(newResponse);
        }
})
//next button
document.getElementById('next').addEventListener('click', e => {
        if (sliceEnd <= newResponse.length) {
                sliceStart += 50;
                sliceEnd += 50;
                showParks(newResponse);
        }
})


//menu buttons ***********************************
const menuEvents = new menuButtons();

//favorite button
const menuFavorite = document.getElementById("menu_fav");
menuFavorite.addEventListener('click', e => {
        menuEvents.filterFavs();
        document.getElementById("prev-next").style.display = 'none';
})

//all parks button
const allParks = document.getElementById("menu_allParks");
allParks.addEventListener('click', e => {
        menuEvents.seeAllParks();
        document.getElementById("prev-next").style.display = 'flex';
})

//filter by state button
const filterBtn = document.getElementById("filter-content");
const filterArray = Array.from(filterBtn.children);
filterArray.forEach(child => {
        child.addEventListener("click", e => {
                let stateAbrv = child.innerHTML;
                menuEvents.filterByState(stateAbrv);

                document.getElementById("prev-next").style.display = 'none';
        })
})



//initiate the page ******************************
paginated_fetch();