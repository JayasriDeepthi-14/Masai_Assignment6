// L2 - Dynamic To-Do List with Event Handling

// script.js - To-Do List logic

const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addTaskBtn');
const list = document.getElementById('taskList');

// Create a new <li> element representing one task
function createTaskItem(text) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  const completeBtn = document.createElement('button');
  completeBtn.className = 'small complete-btn';
  completeBtn.type = 'button';
  completeBtn.textContent = 'Complete';
  completeBtn.setAttribute('aria-label', `Mark "${text}" complete`);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'small delete-btn';
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'Delete';
  deleteBtn.setAttribute('aria-label', `Delete "${text}"`);

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  return li;
}

// Add a task from input (guard against empty)
function addTask() {
  const text = input.value.trim();
  if (!text) {
    alert('Please enter a task before adding.');
    input.focus();
    return;
  }

  const item = createTaskItem(text);
  list.appendChild(item);
  input.value = '';
  input.focus();
}

// Handle clicks for Complete / Delete using event delegation
list.addEventListener('click', (e) => {
  const target = e.target;
  const li = target.closest('li');
  if (!li) return; // clicked outside a list item

  if (target.classList.contains('delete-btn')) {
    // Delete the task
    li.remove();
  } else if (target.classList.contains('complete-btn')) {
    // Toggle completed state
    const span = li.querySelector('.task-text');
    span.classList.toggle('completed');
    // Optionally change button text
    target.textContent = span.classList.contains('completed') ? 'Undo' : 'Complete';
  }
});

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on Enter key
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});