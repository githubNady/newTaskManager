let taskInput = document.getElementById('newTask');
let addTaskButton = document.getElementById('addTaskButn');
let incompleteTasks = document.getElementById('taskList');


let addTask = function () {
    let text = taskInput.value;
    let li = document.createElement('li');
    li.classList.add("dyncs");
    li.innerHTML = "<label>" + text + "</label>";
                   
    incompleteTasks.appendChild(li);
}

addTaskButton.onclick = addTask;