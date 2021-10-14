'use strict';

import {JSONStorage} from "./ls.js";
//add code to read local data***********


//Create ToDos class
class ToDos {
    constructor(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
    
}

function addTask() {
    
}


//Create saveTodo(task, key)


//Create getTodos(key) function


//Complete Todos.addTodo()


//Bind Todos.addTodo to the Add button


//Create the renderTodoList(list, element) funtion


//Complete Todos.listTodos()


//Complete Todos.completeTodo()


//Complete Todos.removeTodo()


//Complete Todos.filterTodos()


//empty list note
let emptyTest = document.querySelector("#list-of-tasks")

if (emptyTest.childNodes.length === 1){
    document.getElementById("empty-list").style.display = "block";
} else {
    document.getElementById("empty-list").style.display = "none";
}