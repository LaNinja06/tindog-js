// Remember to import the data and Dog class!
import dogsData from "./data.js"
import Dog from "./Dog.js"

let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

const cardContainer = document.getElementById('card-container')

document.getElementById("accept-button").addEventListener("click", like)
document.getElementById("reject-button").addEventListener("click", dislike)

const badgeLike = "./images/badge-like.png"
const badgeNope = "./images/badge-nope.png"

render()

function render() {
    cardContainer.innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    if (currentDogIndex === dogsData.length - 1) {
        currentDogIndex = 0
    } else {
        currentDogIndex += 1
    }
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
}

function like() {
    currentDog.setMatchStatus(true)
    addBadgeImage(badgeLike)
    setTimeout(() => {
        getNewDog()
    }, 1500)
}


function dislike() {
    currentDog.setMatchStatus(false)
    addBadgeImage(badgeNope)
      setTimeout(() => {
        getNewDog()
    }, 1500)
}

function addBadgeImage(imageUrl) {
    const badgeImage = document.createElement('img');
    badgeImage.src = imageUrl;
    badgeImage.classList.add('badge-image');
    cardContainer.appendChild(badgeImage);
}
