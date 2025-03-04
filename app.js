document.getElementById('add-task-btn').addEventListener('click', function() {
    let taskInput = document.getElementById('task-input');
    let taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      let li = document.createElement('li');
      li.classList.add('list-group-item');
      li.textContent = taskText;
  
      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'float-end');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function() {
        li.remove();
      });
  
      li.appendChild(deleteBtn);
      document.getElementById('task-list').appendChild(li);
      taskInput.value = ''; 
    }
  });
  

  document.getElementById('clear-all-btn').addEventListener('click', function() {
    let taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; 
  });
  