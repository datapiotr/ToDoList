const form = document.querySelector('form')
const input = document.querySelector('input')
const addButton = document.querySelector('.add')
const h1 = document.querySelector('h1')
const ul = document.querySelector('ul')


const addTask = (e) => {
    e.preventDefault()
    const task = input.value
    const li = document.createElement('li')
    li.innerHTML = task + ' <button class="remove">Usuń</button>'
    ul.appendChild(li)
    input.value = ''
    li.querySelector('.remove').addEventListener('click', remove)
}

const remove = (e) => {
    e.target.parentNode.remove()
}

form.addEventListener('submit', addTask)
