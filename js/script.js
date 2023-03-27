//Step 1 Find the element 
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer= document.getElementById("todo-list");
var templateContainer = document.getElementById("list-item-template");
var template = templateContainer.innerHTML;
var showActiveButton = document.getElementById("show-Active");

//Step 2 Write the behaviour 
function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    var taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
}

function onTodoListContainerClicked(event){
while(!targetElement.classList.contains("task")) {
    targetElement = targetElement.parentElement; 
}
var checkbox = targetElement.querySelector(".checkbox");
if(checkbox.checked){
    targetElement.classList.add("completed")
}
else{
    targetElement.classList.remove("completed")
}
}

function showActiveTasks () {
    var tasks = document.getElementsByClassName('task')
    for (let i= 0; < tasks.length; i++){
        if (tasks[i].classList.contains("completed")){
            tasks[i]style.display = "none";
        }
        else {
            tasks[i].style.display = "block"; 
                }
    } 
}
//Step 3 Link to event handler 
addTaskButton.addEventListener('click', onAddTaskClicked); 
todoListContainer.addEventListener('click', onTodoListContainerClicked);
showActiveButton.addEventListener('click', showActiveTasks);