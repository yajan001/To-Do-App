
const input = document.getElementById('input-task');
const addBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', function() {
  const task = input.value;
  
  const li = document.createElement('li');
  
  const span = document.createElement('span');
  span.textContent = task;

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.classList.add('close-btn');
  
  closeBtn.addEventListener('click', function() {
    li.remove();
  });
  
  li.appendChild(span);
  li.appendChild(closeBtn);
  
  taskList.appendChild(li);
  
  input.value = '';
});
