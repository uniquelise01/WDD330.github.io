'use strict';

import {myStorage} from "./ls.js";

const ls = new myStorage();

var ToDoArray = [];

//Create ToDos class
export class ToDos {
    constructor(id, content, completed, elementId, footerId) {
        this.id = id;
        this.content = content;
        this.completed = completed;
        this.taskDiv = document.getElementById(elementId); 
        this.footer = document.getElementById(footerId);
        this.todo = {id: this.id, content: this.content, completed: this.completed}
    }
    
    saveTodo(key, value) {
        ls.set(key, value);
    }
    
    getTodos(key) {
        const oldList = ls.get(key);       
        oldList.forEach(child => {
            renderOldTask(child.id, child.content, child.completed);
        })
    }

    addTodo() {
        const task = this.content;
        const id = this.id;
        if(task === ""){
            checkIfEmpty();
        }else{
            this.taskDiv.appendChild(renderTodoList(task, id));
            checkIfEmpty();
            this.taskEvents();

            //for saving the array        
            ToDoArray.push(this.todo);
            this.saveTodo("myList", ToDoArray);

            tasksLeft()}
    }

    completeTodo() {
        const id = this.id;  
        const contId = this.content;
        const index = ToDoArray.findIndex(element => element.id === id);

        if (ToDoArray[index].completed === false) {
            ToDoArray[index].completed = true;        
            markAsDone(contId, id);        
        } else {
            ToDoArray[index].completed = false;
            markAsUndone(contId, id);
        }

        this.saveTodo("myList", ToDoArray);

        tasksLeft();
    }

    removeTodo() {
        const id = this.id;

        const index = ToDoArray.findIndex(element => element.id === id);
        ToDoArray.splice(index, 1);

        removeTaskRendering(id);

        this.saveTodo("myList", ToDoArray);

        tasksLeft();
    }

    listTodos() {
        ToDoArray.forEach(object => {
            displayObject(object.id);
        })
    }

    filterActive() {
        ToDoArray.forEach(object => {
            if (object.completed === true) {
                hideObject(object.id);
            }else{
                displayObject(object.id);
            }
        })
    }

    filterCompleted() {
        ToDoArray.forEach(object => {
            if(object.completed === false) {
                hideObject(object.id);
            }else{
                displayObject(object.id);
            }
        })
    }

    taskEvents() {

        //mark complete button
        this.taskDiv.lastChild.childNodes[1].addEventListener('click', e => {
            this.completeTodo(e.target);
        })

        //remove button
        this.taskDiv.lastChild.lastChild.addEventListener('click', e => {
            this.removeTodo(e.target);
        })

        //footer buttons
        this.footer.childNodes[3].addEventListener('click', e => {
            this.listTodos(e.target);
        })

        this.footer.childNodes[5].addEventListener('click', e => {
            this.filterActive(e.target);
        })

        this.footer.childNodes[7].addEventListener('click', e => {
            this.filterCompleted(e.target);
        })
    }

}

//RENDERING ************************************

//render the task to the task list
function renderTodoList(task, id) {
    const item = document.createElement("div");
    item.classList.add('task-div');
    item.id = `${id}_pineapple`;
    item.innerHTML = `
    <button class="check-box">
        <img src="../images/2561393_square_icon.png" alt="empty checkbox" class="empty-checkbox" id="${id}_sid">
        <img src="../images/2639910_checkbox_checked_icon.png" alt="checkbox" class="checked-box" id="${id}">
    </button>  
    <p class="task-text" id="${task}">${task}</p>
    <button class="x-button">
        <img src="../images/2561206_square_x_icon.png" alt="remove button">
    </button>`;
    return item;
}


//to render tasks left on the list...
function renderTasksLeft(x) {
    document.getElementById("tasks-left").innerHTML = x + " tasks left"
}


//remove a div once the X is clicked
function removeTaskRendering(id) {
    document.getElementById(id + "_pineapple").remove();

    checkIfEmpty();
}


//hide and display tasks for footer menu
function hideObject(id) {
    document.getElementById(id + "_pineapple").style.display = "none";
}

function displayObject(id) {
    document.getElementById(id + "_pineapple").style.display = "grid";
}


//render old task from localStorage
function renderOldTask(id, content, completed) {
    let ToDoClass = new ToDos(id, content, completed, "list-of-tasks", "task-list-footer");
    ToDoClass.addTodo();
    if (completed === true){
        markAsDone(content, id);
    }
}


//to calculate the tasks left
function tasksLeft() {
    let x = 0;

    ToDoArray.forEach(child => {
        if (child.completed === false) {
            x++;
        }
    renderTasksLeft(x);
    })
}



//OTHER ******************************************

//for when the task is marked as complete...
function markAsDone(contId, id) {
    document.getElementById(id).style.display = "block";
    document.getElementById(id + "_sid").style.display = "none";
    document.getElementById(contId).style.textDecoration = "line-through";
}

function markAsUndone(contId, id) {
    document.getElementById(id).style.display = "none";
    document.getElementById(id + "_sid").style.display = "block";
    document.getElementById(contId).style.textDecoration = "none";
}



//empty list note ********************************

function checkIfEmpty(){
    let emptyTest = document.querySelector("#list-of-tasks")

    if (emptyTest.childNodes.length === 1){
        document.getElementById("empty-list").style.display = "block";
        document.getElementById("task-list-footer").style.display = "none";
    } else {
        document.getElementById("empty-list").style.display = "none";
        document.getElementById("task-list-footer").style.display = "flex";
    }
}

checkIfEmpty();