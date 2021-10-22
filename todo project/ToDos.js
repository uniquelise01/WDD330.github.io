'use strict';

import {ToDos} from "./utilities.js";


//RETRIEVING old To-dos ************************
let ToDoClass = new ToDos();

window.addEventListener("load", () => {
    ToDoClass.getTodos("myList");
});



//ADDING ***************************************

//add event listener to add button
let taskBtn = document.getElementById("new-task-btn");
taskBtn.addEventListener("click", addTaskFunct);

//when the button is clicked...
function addTaskFunct () {
    let taskContent = document.getElementById("new-task-input").value;
    let ToDoClass = new ToDos(Date.now(), taskContent, false, "list-of-tasks", "task-list-footer");
    ToDoClass.addTodo();
    document.getElementById("new-task-input").value = "";
}