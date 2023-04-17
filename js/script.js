//Step 1 Find the element 
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer= document.getElementById("todo-list");
var templateContainer = document.getElementById("list-item-template");
var template = templateContainer.innerHTML;
var showActiveButton = document.getElementById("show-active");
var showAllButton = document.getElementById("show-all");
var showCompletedButton = document.getElementById("show-completed");

function saveTasks(name,isCompleted) {
    localStorage.setItem(name, isCompleted);
}

//Step 2 Write the behaviour 
function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    var taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
    saveTasks (taskname, false)
}


function onTodoListContainerClicked(event){
while(!targetElement.classList.contains("task")) {
    targetElement = targetElement.parentElement; 
}
var checkbox = targetElement.querySelector(".checkbox");
if(checkbox.checked){
    targetElement.classList.add("completed");
}
else{
    targetElement.classList.remove("completed");
}
var taskNameElement = targetElement.querySelector(".task-name")
var taskName = taskNameElement.innerText;
saveTasks(taskName, checkbox.checked)
}

function showActiveTasks() {
    var tasks = document.getElementsByClassName('task')
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].classList.contains("completed")){
            //set the display to "none"
            tasks[i].style.display = "none";
        }  else {
            tasks[i].style.display = "block"; 
                }
    } 
}

function showAllTasks () {
    var tasks = document.getElementsByClassName('task');
    for (let i=0; i < tasks.length; i++) {
        tasks [i].style.display = 'block'
    }
}

function showCompletedTasks () {
    var tasks = document.getElementsByClassName('task');
    for (let i= 0; i <tasks.length; i++ ) {
        if (tasks[i].classList.contains("completed")){
            //set the display to "none"
            tasks[i].style.display = "block";
        }  else {
            tasks[i].style.display = "none"; 
                }
    } 
}

    }
}

function renderTasks() {
    for (i = 0; i< localStorage.length; i++) {
    var taskname = localStorage.key(i)
    var isCompleted =localStorage.getItem (taskName)
    var taskHTML = template.replace("<-- TASK_NAME -->", taskName);
    if (!isCompleted) {
        todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
    }

    }
}
//Step 3 Link to event handler 
addTaskButton.addEventListener('click', onAddTaskClicked); 
todoListContainer.addEventListener('click', onTodoListContainerClicked);
showActiveButton.addEventListener('click', showActiveTasks);
showAllButton.addEventListener('click', showAllTasks);
showCompletedButton.addEventListener('click', showCompletedTasks);

renderTasks()