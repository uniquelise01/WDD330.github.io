'use strict';

import {JSONStorage} from "./ls.js";

//Create ToDos class
class ToDos {
    constructor(task) {
        this.task = task;
    }
    //saveToDo(task, key)
    //getToDos(key)
    //addToDo()
    //renderToDoList(list, element)
    //listToDos()
    //completeToDo()
    //removeToDo()
    //filterToDos()
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