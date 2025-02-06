function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function loadTodos() {
  try {
    const stored = localStorage.getItem('todos')
    todos = stored ? JSON.parse(stored) : []
  } catch (e) {
    todos = []
  }
}

let todos = []

function renderTodos() {
  const listDiv = document.getElementById('ft_list')
  listDiv.innerHTML = ''

  if (todos.length === 0) {
    const emptyDiv = document.createElement('div')
    emptyDiv.className = 'empty-todo'
    emptyDiv.textContent = 'No tasks yet.'
    listDiv.appendChild(emptyDiv)
    return
  }

  todos.forEach((todo, index) => {
    const todoDiv = document.createElement('div')
    todoDiv.className = 'todo'
    todoDiv.textContent = todo
    todoDiv.onclick = function () {
      if (confirm('Are you sure to remove this task?')) {
        todos.splice(index, 1)
        saveTodos()
        renderTodos()
      }
    }
    listDiv.prepend(todoDiv)
  })
}

// Add new task button
document.getElementById('new-button').onclick = function () {
  let text = prompt('Enter new task:')
  if (text && text.trim()) {
    todos.push(text.trim())
    saveTodos()
    renderTodos()
  }
}

// Load todos on page load
document.addEventListener('DOMContentLoaded', function () {
  loadTodos()
  renderTodos()
})
