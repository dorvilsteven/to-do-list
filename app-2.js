// const form = document.querySelector('#task-form');
// const taskInput = document.querySelector('#task');
// const filter = document.querySelector('#filter');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
//
// loadEventListeners();
//
// function loadEventListeners() {
//   form.addEventListener('submit', addTask);
//   taskList.addEventListener('click', deleteTask);
//   clearBtn.addEventListener('click', clearTasks);
//   filter.addEventListener('keyup', filterTask);
// }
//
// function addTask(e) {
//   if (taskInput.value === '') {
//     alert('Please Enter a Task');
//   } else {
//     const li = document.createElement('li');
//     li.className = 'collection-item';
//     li.appendChild(document.createTextNode(taskInput.value));
//     const link = document.createElement('a');
//     link.className = 'delete-item secondary-content';
//     link.innerHTML = '<i class="fa fa-remove"></i>';
//     li.appendChild(link);
//     taskList.appendChild(li);
//     taskInput.value = '';
//   }
//   e.preventDefault();
// }
//
// function deleteTask(e) {
//   if (e.target.parentElement.classList.contains('delete-item')) {
//     if (confirm(`Are you sure you want to delete task: ${e.target.parentElement.previousSibling.textContent}`)) {
//       e.target.parentElement.parentElement.remove();
//     }
//   }
// }
//
// function clearTasks() {
//   if (taskList.childNodes.length != 0) {
//     if (confirm(`Are you sure you want to DELETE ALL of your task?`)) {
//       while(taskList.firstChild) {
//         taskList.removeChild(taskList.firstChild);
//       }
//     }
//   }
// }
//
// function filterTask(e) {
//   const text = e.target.value.toLowerCase();
//   document.querySelectorAll('.collection-item').forEach(function(task){
//     const taskText = task.firstChild.textContent.toLowerCase();
//     if (taskText.indexOf(text) != -1) {
//       task.style.display = 'block';
//     } else {
//       task.style.display = 'none';
//     }
//   });
// }
