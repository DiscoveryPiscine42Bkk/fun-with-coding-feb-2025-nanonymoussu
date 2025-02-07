$(document).ready(function () {
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

  function renderTodos() {
    const $listDiv = $('#ft_list')
    $listDiv.empty() // clear the list

    if (todos.length === 0) {
      $('<div>').addClass('empty-todo').text('No tasks yet.').appendTo($listDiv)
      return
    }

    $.each(todos, function (index, todo) {
      const $todoDiv = $('<div>')
        .addClass('todo')
        .text(todo)
        .on('click', function () {
          if (confirm('Are you sure to remove this task?')) {
            todos.splice(index, 1)
            saveTodos()
            renderTodos()
          }
        })
      $listDiv.prepend($todoDiv)
    })
  }

  // Add new task button
  $('#new-button').on('click', function () {
    const text = prompt('Enter new task:')
    if (text && text.trim()) {
      todos.push(text.trim())
      saveTodos()
      renderTodos()
    }
  })

  // Load and render todos when the page is ready
  loadTodos()
  renderTodos()
})
