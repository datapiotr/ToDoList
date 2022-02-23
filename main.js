const form = document.querySelector('form')
const addInput = document.querySelector('.add input')
const tasksNumber = document.querySelector('h2 span')
const ul = document.querySelector('ul')
const tasksList = []
const searchInput = document.querySelector('.search')

const renderList = () => {
    ul.textContent = ''
    tasksList.forEach((li, index) => {
        li.id = index
        ul.appendChild(li)
    })
}

const addTask = (e) => {
    e.preventDefault()
    const taskTitle = addInput.value
    if (taskTitle === '') return
    const task = document.createElement('li')
    task.innerHTML = taskTitle + '  <i class="fa-solid fa-trash remove"></i>'
    tasksList.push(task)
    renderList()
    addInput.value = ''
    task.querySelector('.remove').addEventListener('click', removeTask)
    tasksNumber.textContent = tasksList.length
}

const removeTask = (e) => {
    index = e.target.parentNode.id
    tasksList.splice(index, 1)
    tasksNumber.textContent = tasksList.length
    renderList()
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
