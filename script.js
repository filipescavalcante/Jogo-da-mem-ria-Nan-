const grid = document.querySelector('.grid')
const timer = document.querySelector('.timer')
const spanPlayer = document.querySelector('.player')

const item = [
    'foto1',
    'foto2',
    'foto3',
    'foto4',
    'foto5',
    'foto6',
    'foto7',
    'foto8',
    'foto9',
    'foto10',
]

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firstCard = ''
let secondCard = ''

const checkEngGame = () => {
    const disabledCards = document.querySelectorAll('.disable-card')

    if (disabledCards.length === 20) {
        clearInterval(this.loop)
        alert(`Parabéns, você terminou em ${timer.innerHTML} segundos.`)
    }
}

const checkCards = () => {
    const firstItem = firstCard.getAttribute('data-item')
    const secondItem = secondCard.getAttribute('data-item')

    if (firstItem === secondItem) {

        firstCard.firstChild.classList.add('disable-card')
        secondCard.firstChild.classList.add('disable-card')

        firstCard = ''
        secondCard = ''

        checkEngGame()

    } else {

        setTimeout(() => {

        firstCard.classList.remove('reveal-card')
        secondCard.classList.remove('reveal-card')

        firstCard = ''
        secondCard = ''

        }, 500)
    }
}

const revealCard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')) {
        return
    }

    if(firstCard === ''){
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
    } else if(secondCard === '') {
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode

        checkCards()
    }

    
}

const createCard = (item) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('images/${item}.png')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)

    card.setAttribute('data-item', item)

    return card
}

const loadGame = () => {

    const duplicateItems = [...item, ...item]

    const shuffledArray = duplicateItems.sort(() => Math.random() - 0.5)

    shuffledArray.forEach((item) => {

        const card = createCard(item)
        grid.appendChild(card)

    })
}

const startTimer = () => {

    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML
        timer.innerHTML = currentTime + 1
    }, 1000)

}

window.onload = () => {

    const playerName = localStorage.getItem('player')

    spanPlayer.innerHTML = playerName

    startTimer()
}

loadGame()