import {favorites} from "./favorites.js"

export class nationalParks {
        constructor(parkInfo, parksId, detailsId) {
                this.parkInfo = parkInfo;
                this.parkDiv = document.getElementById(parksId);
                this.detailsDiv = document.getElementById(detailsId);
        }

        addParkToList() {
                let fullName = this.parkInfo.fullName;

                this.parkDiv.appendChild(renderParkList(fullName));

                this.parkEvents();

                this.renderFavorites();
        }

        showParkDetails() {
                let fullName = this.parkInfo.fullName;
                let desc = this.parkInfo.description;
                let state = this.parkInfo.states;
                let price = this.parkInfo.entranceFees[0].cost;
                let number = this.parkInfo.contacts.phoneNumbers[0].phoneNumber;
                let weblink = this.parkInfo.url;
                let image = this.parkInfo.images[0].url;
                let alt = this.parkInfo.images[0].altText;
                let caption = this.parkInfo.images[0].caption;

                this.detailsDiv.appendChild(renderParkDetails(fullName, image, alt, desc, state, price, number, weblink, caption));

                this.detailEvents();
        }

        renderFavorites() {
                let fullName = this.parkInfo.fullName;
                let favClass = new favorites();
                let favList = favClass.getFavs("myFavs");
                console.log(favList);

                favList.forEach(child => {
                        if (child.name == fullName) {
                                reload(fullName);
                        }
                })

        }

        parkEvents() {
                let parkName = this.parkInfo.fullName;

                const parkBtns = this.parkDiv.lastChild.childNodes[3];

                //details button
                parkBtns.childNodes[1].addEventListener('click', e => {
                        this.showParkDetails(e.target);
                })

                //favorite button
                parkBtns.childNodes[3].addEventListener("click", e => {
                        switchHeart(parkName);
                })
        }

        detailEvents() {
                const closeDetailsBtn = this.detailsDiv.lastChild.childNodes[0].childNodes[3];

                closeDetailsBtn.addEventListener('click', e => {
                        this.detailsDiv.removeChild(this.detailsDiv.lastChild);
                })
        }

}

function renderParkList(name) {
        const item = document.createElement("div");
        item.classList.add('park-list-item');
        //item.id = `${id}_example`;
        item.innerHTML = `
                <p>${name}</p>
                <div class="park-list-btns">
                        <button class="detail-btn">Details</button>
                        <button class="favorite-heart">
                                <img src="../images/heart.png" alt="empty heart" class="empty-heart">
                                <img src="../images/heart (1).png" alt="full heart" class="full-heart" id="${name}_id">
                        </button>
                </div>`;
        return item;
}

function renderParkDetails(name, image, alt, description, state, price, number, weblink, imageCap) {
        const item = document.createElement("div");
        item.classList.add('park-details');
        item.innerHTML = 
                `<div class="details-top">
                        <h3>${name}</h3>
                        <img src="../images/cross.png" alt="x icon" class="exit-btn">
                </div>
                
                <img src="${image}" alt=${alt} class="park-picture">
                <div class="fine-details">
                        <p>${description}</p>
                        <p><strong>State:</strong> ${state}</p>
                        <p><strong>Entrance Fee:</strong> $${price}</p>
                        <p><strong>Phone:</strong> ${number}</p>
                        <p><strong>Website:</strong> <a href=${weblink}>${weblink}</a></p>
                </div>
                <p class="caption">${imageCap}</p>`
        return item;
}

function switchHeart(name) {
        let favClass = new favorites(name);

        const heart = document.getElementById(name + '_id');
        const style = getComputedStyle(heart);
        const heartDisplay = style.display;

        if (heartDisplay === "flex") {
                heart.style.display = "none";

                favClass.removeFromFavs();
        } else {
                heart.style.display = "flex";

                favClass.addToFavs();
        }
}

function reload(name) {
        const heart = document.getElementById(name + '_id');
        const style = getComputedStyle(heart);
        const heartDisplay = style.display;

        heart.style.display = "flex";
}