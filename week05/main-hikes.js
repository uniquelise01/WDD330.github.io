//import hikes javascript
import Hikes from './hikes.js';
const myHike = new Hikes('hikeListId');

//you call this by doing myHike.showHikeList()


window.addEventListener("load", () => {
    myHike.showHikeList();
});

//What code do we need to make the event listener ontouchend to only show the selected hike details?