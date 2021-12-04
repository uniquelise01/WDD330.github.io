import {myStorage} from './ls.js';

const ls = new myStorage();

let favArray = [];

export class favorites {
    constructor (parkName) {
        this.parkName = parkName;
        this.newFav = {name: this.parkName};
    }

    saveFav(key, value) {
        ls.set(key, value);
    }

    getFavs(key) {
        let oldFavs = ls.get(key);
        console.log(oldFavs);
        return oldFavs;
    }

    addToFavs() {
        favArray.push(this.newFav);

        this.saveFav("myFavs", favArray)

        console.log(favArray);
    }

    removeFromFavs() {
        const index = favArray.findIndex(element => element.name === this.parkName);

        favArray.splice(index, 1);

        this.saveFav("myFavs", favArray)

        console.log(this.getFavs('myFavs'));
    }
}

