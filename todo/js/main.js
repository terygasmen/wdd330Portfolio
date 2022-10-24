import todo_list from "./todo_list.js";

class Todo {
    constructor() {
        this.todoList = new todo_list();
        document.getElementById('new_todo').addEventListener("keyup", (event) => (event.key == 'Enter') ? this.new_task() : "")
        document.getElementById('all_tasks').addEventListener('click', this.all_tasks.bind(this));
        document.getElementById('active_tasks').addEventListener('click', this.active_tasks.bind(this));
        document.getElementById('completed_tasks').addEventListener('click', this.completed_tasks.bind(this));
        document.getElementById('enter_todo').addEventListener('click', this.new_task.bind(this));
    } new_task() {
        let txtbox = document.getElementById('new_todo');
        this.todoList.new_task(txtbox.value);
        txtbox.value = "";
    } all_tasks() {
        this.todoList.renderList()
    } active_tasks() {
        this.todoList.renderList("ACTIVE")
    } completed_tasks() {
        this.todoList.renderList("COMPLETED")
    }
} let todo = new Todo();
