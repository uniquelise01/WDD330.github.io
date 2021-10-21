//todo: { id : timestamp, content: string, completed: bool }
//toDoList = [toDo];


export class myStorage {
    constructor(){
    }

    set(k, v){
        localStorage.setItem(k, JSON.stringify(v));
    }

    get(k){
        return JSON.parse(localStorage.getItem(k))
    }

    remove(k){
        localStorage.removeItem(k);
    }
}