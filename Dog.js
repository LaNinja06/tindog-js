// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getDogHtml() {
        const {name, avatar, age, bio} = this
        return `
        <div class="dog--container">
            <div class="dog--info">
                <h4 class="info">${name}, ${age}</h4>
                <div class="dog--bio">
                    <p class="bio">${bio}</p>
                </div>
            </div>
            <img src=${avatar} class="dog--avatar">
        </div>`
    }

}

export default Dog