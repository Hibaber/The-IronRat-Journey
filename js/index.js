let button = document.querySelector('#button')
let toBeRemoved = document.querySelectorAll(".hide")

const startGame = () => {
    console.log('hola')
    button.addEventListener('click', (e) => {
        toBeRemoved.forEach((elem) => { elem.remove(e) })
        game.init()

    })
}

window.onload = startGame()







