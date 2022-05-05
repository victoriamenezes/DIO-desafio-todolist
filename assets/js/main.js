//selecionando o DOM
const toDoInput = document.querySelector('.to-do-input')

const toDoBtn = document.querySelector('.to-do-btn')

const toDoList = document.querySelector('.to-do-list')


//eventos de escutas
toDoBtn.addEventListener('click', addToDo)

//funções
function addToDo(event) {
  event.preventDefault()

  const toDoDiv = document.createElement('div')
  toDoDiv.classList.add('todo')

  const toDoLi = document.createElement('li')
  toDoLi.classList.add('todo-list')
  toDoLi.innerText = 'Coraline'

  toDoDiv.appendChild(toDoLi)

  const completedBtn = document.createElement('button')
  completedBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
  completedBtn.classList.add('completed-btn')
  toDoDiv.appendChild(completedBtn)

  const deleteBtn = document.createElement('button')
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
  deleteBtn.classList.add('delete-btn')
  toDoDiv.appendChild(deleteBtn)

  toDoList.appendChild(toDoDiv)

}
