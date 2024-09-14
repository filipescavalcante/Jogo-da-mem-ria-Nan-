const grid = document.querySelector('.grid')

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

const checkCards = () => {
    
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

    front.style.backgroundImage = `url('/images/${item}.png')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)

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

loadGame()