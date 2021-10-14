//import hikes javascript
import Hikes from './hikes.js';
const myHike = new Hikes("hikes");

//you call this by doing myHike.showHikeList()


window.addEventListener("load", () => {
    myHike.showHikeList();
});

myHike.hikeList;