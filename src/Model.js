class Model {
    constructor() {
        this.storeKey = 'todos'
        this.todos = localStorage.getItem(this.storeKey) ?
            JSON.parse(localStorage.getItem(this.storeKey)) : []
        this.listeners = []
    }

    subscribe = (listener) => {
        this.listeners.push(listener)
    }
    emit = () => {
        this.listeners.forEach(listener => listener())
    }
    notify = (todos) => {
        localStorage.setItem(this.storeKey, JSON.stringify(todos))
        this.todos = todos
        this.emit()
    }
    addToDo = (todo) => {
        todo.id = Date.now()
        todo.completed = false
        let todos = this.todos
        todos.push(todo)
        this.notify(todos)
    }
    toggle = (id) => {
        let todos = this.todos
        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        this.notify(todos)
    }
    remove = (id) => {
        let todos = this.todos
        let index = todos.findIndex(todo => todo.id === id)
        todos.splice(index, 1)
        this.notify(todos)
    }
    toggleAll = (e) => {
        let checked = e.target.checked
        let todos = this.todos
        todos = todos.map(todo => {
            todo.completed = checked
            return todo
        })
        this.notify(todos)
    }
    clearCompleted = () => {
        let todos = this.todos
        todos = todos.filter(todo => !todo.completed)
        this.notify(todos)
    }

}
export default Model