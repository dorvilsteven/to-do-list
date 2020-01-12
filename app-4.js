const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

loadEventListeners();

function loadEventListeners() {
  // reload event
  document.addEventListener('DOMContentLoaded', getTasks);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', deleteTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTask);
}
// get task from local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
}
function addTask(e) {
  if (taskInput.value === '') {
    alert('Please enter a task');
  } else {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    // local storage
    saveTask(taskInput.value);
    taskInput.value = '';
  }
  e.preventDefault();
}
function saveTask(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function deleteTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm(`Are you sure you want to delete task: ${e.target.parentElement.previousSibling.textContent}`)) {
      // remove from UI
      e.target.parentElement.parentElement.remove();
      // remove from local storage
      removeFromLS(e.target.parentElement.parentElement);
    }
  }
}
function removeFromLS(taskItem) {
  // initialize task and check to see if task
  // already exist in local storage
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // check each task in local storage and
  // remove the task that matches taskItems text content
  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  // set local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function clearTasks() {
  while(taskList.firstChild) {
    if (confirm(`Are you sure you want to DELETE ALL task?`)) {
      taskList.removeChild(taskList.firstChild);
    }
  }
  // clear local storage call
  clearLS();
}
function clearLS() {
  // clear the entore local storage
  localStorage.clear();
}
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task) {
    const taskText = task.textContent.toLowerCase();
    if (taskText.indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
