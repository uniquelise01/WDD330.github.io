//todo: { id : timestamp, content: string, completed: bool }
//toDoList = [toDo];


export class myStorage {
    constructor(){
    }

    set(k, v){
        localStorage.setItem(k, v);
    }

    get(k){
        localStorage.getItem(k);
    }

    remove(k){
        localStorage.removeItem(k);
    }
}