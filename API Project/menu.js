import {getResponse, addPark, showParks} from "./main.js"
import {favorites} from "./favorites.js"

let favClass = new favorites();


export class menuButtons {
    constructor() {
    }

    filterFavs() {
        let favList = favClass.getFavs("myFavs");
        let parkArray = getResponse();            
        const favParks = [];

        parkArray.forEach(child => {
            const parkName = child.fullName;

            favList.forEach(favorite => {
                if (parkName == favorite.name) {
                    favParks.push(child);
                }
            })
        })
        renderSelected(favParks);
    }

    seeAllParks() {
        let parkArray = getResponse();
        renderAll(parkArray);
    }

    filterByState(stateAbrv) {
        let parkArray = getResponse();
        const selectedState = [];

        parkArray.forEach(child => {
            const parkState = child.states;            
            let regex = new RegExp(stateAbrv);

            if (regex.test(parkState)) {
                selectedState.push(child);
            }
        })
        renderSelected(selectedState);
    }
}

function renderSelected(parks) {
    document.getElementById('display-parks').innerHTML = '';
    parks.forEach(child => {
        addPark(child);
    })
}

function renderAll(parks) {
    document.getElementById('display-parks').innerHTML = '';
    showParks(parks);
}