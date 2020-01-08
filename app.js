// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task');
//
// // load all events listeners
// loadEventListeners();
//
// // uses addEventListener and
// // listens for submit event on form to
// // call addtask function that we will define
// function loadEventListeners() {
//   // submit and add task
//   form.addEventListener('submit', addTask);
//   // remove tasks
//   taskList.addEventListener('click', deleteTask);
//   // clear tasks
//   clearBtn.addEventListener('click', clearTasks);
//   // filter tasks
//   filter.addEventListener('keyup', filterTask);
// }
//
// // addTask
// function addTask(e) {
//   if (taskInput.value === '') {
//     alert('Please Enter a Task');
//   }
//
//   // create li element
//   const li = document.createElement('li');
//
//   // add class
//   li.className = 'collection-item';
//
//   // creating new text node using input value
//   // appending the text node to the li we just created
//   li.appendChild(document.createTextNode(taskInput.value));
//
//   // create new link
//   const link = document.createElement('a');
//   link.className = 'delete-item secondary-content';
//
//   // create link icon
//   link.innerHTML = '<i class="fa fa-remove"></i>';
//   li.appendChild(link);
//   taskList.appendChild(li);
//
//   // clear Input
//   taskInput.value = '';
//
//   e.preventDefault();
// }
// // delete task
// function deleteTask(e) {
//   if (e.target.parentElement.classList.contains('delete-item')) {
//     if (confirm(`Are you sure you want to delete your task: \'${e.target.parentElement.parentElement.textContent}\'`)) {
//       e.target.parentElement.parentElement.remove();
//     }
//   }
// }
//
// // clear task
// function clearTasks() {
//   // taskList.innerHTML = '';
//   while(taskList.firstChild) {
//     taskList.removeChild(taskList.firstChild);
//   }
// }
//
// // filter tasks
// function filterTask(e) {
//   const text = e.target.value.toLowerCase();
//   document.querySelectorAll('.collection-item').forEach(function(task){
//     const item = task.firstChild.textContent;
//     if (item.toLowerCase().indexOf(text) != -1) {
//       task.style.display = 'block';
//     } else {
//       task.style.display = 'none';
//     }
//   });
// }
