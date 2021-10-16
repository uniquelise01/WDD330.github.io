'use strict';

import {JSONStorage} from "./ls.js";
//add code to read local data***********

//const localStorage = new JSONStorage()


//Create ToDos class
class ToDos {
    constructor(id, content, completed, elementId) {
        this.id = id;
        this.content = content;
        this.completed = completed;
        this.taskDiv = document.getElementById(elementId);
    }
    
    saveTodo(task, key) {}
    
    getTodos(key) {}

    addTodo() {
        const task = this.content;
        const id = this.id;
        this.taskDiv.appendChild(renderTodoList(task, id));
        checkIfEmpty();
        this.tasksLeft()
        this.taskEvents();
        this.saveTodo();
    }

    completeTodo() {
        const id = this.id;        
        if (this.completed === false) {
            this.completed = true;        markAsDone(id);        
        } else {
            this.completed = false;
            markAsUndone(id);
        }
        this.tasksLeft();
    }

    tasksLeft() {
        const TodoArray = Array.from(this.taskDiv.children);
        let x = 0;

        for (let i = 0; i < TodoArray.length; i++) {
            if (this.completed === false) {
                x++;
            }
        }
        renderTasksLeft(x);
    }

    removeTodo() {}

    filterTodos() {}

    taskEvents() {
        const childrenArray = Array.from(this.taskDiv.children);

        childrenArray.forEach(child => {
            child.addEventListener('click', e => {
                this.completeTodo(e.currentTarget);
            });
        });
    }

}


//ADDING***************************************

//add event listener to add button
let taskBtn = document.getElementById("new-task-btn");
taskBtn.addEventListener("click", addTaskFunct);

//when the button is clicked...
function addTaskFunct () {
    let taskContent = document.getElementById("new-task-input").value;
    let ToDoClass = new ToDos(Date.now(), taskContent, false, "list-of-tasks");
    ToDoClass.addTodo();
    document.getElementById("new-task-input").value = "";
}



//RENDERING************************************

//render the task to the task list
function renderTodoList(task, id) {
    const item = document.createElement("div");
    item.classList.add('task-div');
    item.innerHTML = `
    <button class="check-box">
        <img src="../images/2561393_square_icon.png" alt="empty checkbox" class="empty-checkbox" id="${id}_sid">
        <img src="../images/2639910_checkbox_checked_icon.png" alt="checkbox" class="checked-box" id="${id}">
    </button>  
    <p class="task-text">${task}</p>
    <button class="x-button">
        <img src="../images/2561206_square_x_icon.png" alt="remove button">
    </button>`;
    return item;
}


//to show how many tasks are left on the list...
function renderTasksLeft(x) {
    document.getElementById("tasks-left").innerHTML = x + " tasks left"
}



//OTHER******************************************

//for when the task is marked as complete...
function markAsDone(id) {
    document.getElementById(id).style.display = "block";
    document.getElementById(id + "_sid").style.display = "none";
}

function markAsUndone(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById(id + "_sid").style.display = "block";
}





//********************************** */
//Create saveTodo(task, key)

//Create getTodos(key) function

//Complete Todos.listTodos()

//Complete Todos.completeTodo()

//Complete Todos.removeTodo()

//Complete Todos.filterTodos()




//empty list note********************************

function checkIfEmpty(){
    let emptyTest = document.querySelector("#list-of-tasks")

    if (emptyTest.childNodes.length === 1){
        document.getElementById("empty-list").style.display = "block";
    } else {
        document.getElementById("empty-list").style.display = "none";
        document.getElementById("task-list-footer").style.display = "flex";
    }
}

checkIfEmpty();





/* My current to do list:

- debug why clicking on one task marks everything under it as completed
- debug why the tasks left function says there are 0 tasks left if just one is completed.
- figure out how to add an event listener to two different buttons in a parent element*/