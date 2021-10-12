//todo: { id : timestamp, content: string, completed: bool }
//toDoList = [toDo];


export class JSONStorage {
    constructor(storage) {
      if (!storage || typeof storage !== "object")
        throw new Error(`Expected a Storage object, got ${storage}`)
      this.storage = storage
    }
    set(k, v) {
      const str = JSON.stringify(v)
      if (typeof str === "undefined")
        return this.storage.removeItem(k)
      this.storage.setItem(k, v)
    }
    get(k) {
      const str = this.storage.getItem(k)
      // we return `undefined` instead of `null`, so that we can differentiate between the cases when the key doesn't exist vs when the value is a JSON-serialized `"null"`
      if (str === null) return
      return JSON.parse(str)
    }
    remove(k) {
      this.storage.removeItem(k)
    }
}