const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timelist = document.querySelector('#time-list')
const gameTimer = document.querySelector('#time')
const board = document.querySelector('.board')

let time = 0
let score = 0

startBtn.addEventListener('click', (e) => {
    e.preventDefault
    screens[0].classList.add('up')
})

timelist.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'));
        console.log(time);
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createCircle()
    }
})

//1234

function startGame() {
    setInterval(decreaseTime, 1000)
    gameTimer.innerHTML = `00:${time}`
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10)
            current = `0${current}`
        setTime(current)
    }
}

function setTime(current) {
    gameTimer.innerHTML = `00:${current}`
}

function finishGame() {
    gameTimer.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчет: <span class='primary'>${score}</span></h1>`
}

function createCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const { width, height } = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
}
createCircle()
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}


function winTheGame() {
    function kill() {
        const circle = document.querySelector('.circle')
        if (circle) {
            circle.click()
        }
    }

    setInterval(kill, 41)
}

