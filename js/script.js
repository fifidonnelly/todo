//Step 1 Find the element 
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer= document.getElementById("todo-list");

//Step 2 Write the behaviour 
function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    todoListContainer.insertAdjacentElement('afterbegin', taskName);
}

//Step 3 Link to event handler 
addTaskButton.addEventListener('click', onAddTaskClicked); 