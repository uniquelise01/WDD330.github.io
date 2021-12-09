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
        return oldFavs;
    }

    addToFavs() {
        let oldFavs = this.getFavs("myFavs");
        
        oldFavs.push(this.newFav);

        this.saveFav("myFavs", oldFavs)
    }

    removeFromFavs() {
        let oldFavs = this.getFavs("myFavs");

        const index = oldFavs.findIndex(element => element.name === this.parkName);

        oldFavs.splice(index, 1);

        this.saveFav("myFavs", oldFavs)
    }
}

