const form = document.querySelector('form')
const addInput = document.querySelector('.add')
const tasksNumber = document.querySelector('h1 span')
const ul = document.querySelector('ul')
const tasksList = []
const searchInput = document.querySelector('.search')

const addTask = (e) => {
    e.preventDefault()
    const taskTitle = addInput.value
    const task = document.createElement('li')
    task.innerHTML = taskTitle + ' <button class="remove">Usuń</button>'
    tasksList.push(task)
    ul.textContent = ''
    tasksList.forEach((li, index) => {
        li.id = index
        ul.appendChild(li)
    })
    addInput.value = ''
    task.querySelector('.remove').addEventListener('click', removeTask)
    tasksNumber.textContent = tasksList.length
}

const removeTask = (e) => {
    e.target.parentNode.remove()
    index = e.target.parentNode.id
    tasksList.splice(index, 1)
    tasksNumber.textContent = tasksList.length
}

const searchTask = (e) => {
    ul.textContent = ''
    const filtered = tasksList.filter(li => {
        return li.textContent.toLowerCase().includes(e.target.value.toLowerCase())
    })
    filtered.forEach(li => {
        ul.appendChild(li)
    })
}

form.addEventListener('submit', addTask)
searchInput.addEventListener('input', searchTask)
