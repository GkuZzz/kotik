const text = document.querySelector('.number')
const hotels = [
    'Статский Советник на Кустарном',
    'Отель Mix Hotels Rubinstein',
    'Апартаменты Emerald у Пяти Углов'
]


const button = document.querySelector('.button')


button.addEventListener('click', () => {
    text.textContent =  hotels[Math.floor(Math.random() * hotels.length)]
})
