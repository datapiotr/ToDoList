const form = document.querySelector('form')
const input = document.querySelector('input')
const tasksNumber = document.querySelector('h1 span')
const ul = document.querySelector('ul')
let tasksCounter = 0

const addTask = (e) => {
    e.preventDefault()
    const taskTitle = input.value
    const task = document.createElement('li')
    task.innerHTML = taskTitle + ' <button class="remove">Usuń</button>'
    ul.appendChild(task)
    input.value = ''
    task.querySelector('.remove').addEventListener('click', removeTask)
    tasksCounter++
    tasksNumber.textContent = tasksCounter
}

const removeTask = (e) => {
    e.target.parentNode.remove()
    tasksCounter--
    tasksNumber.textContent = tasksCounter
}

form.addEventListener('submit', addTask)
