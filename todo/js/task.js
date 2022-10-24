export default class Task {
    constructor(content = "", id = Date.now(), completed = false) {
        this.content = content;
        this.id = id;
        this.completed = completed;
    }
    toggleTask() {
        this.completed = !this.completed;
    }
    createElement(updateCallback, removeItemCallback) {
        let element = document.createElement('li');
        element.classList.add('task');

        let check = document.createElement('label');
        check.classList.add('check_box');
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.addEventListener('click', (event) => {
            this.toggleTask();
            updateCallback();
        });
        this.completed ? checkbox.setAttribute('checked', 'true') : "";
        let checkmark = document.createElement('span');
        checkmark.classList.add('check_mark');
        check.appendChild(checkbox);
        check.appendChild(checkmark);

        let name = document.createElement('div');
        name.classList.add('taskname');
        name.innerHTML = this.content;


        let button = document.createElement('button');
        button.classList.add("delete_task");
        button.innerHTML = "❌";
        button.addEventListener('click', (event) => removeItemCallback(this));
        element.appendChild(check);
        check.appendChild(name);
        element.appendChild(button);
        return element;
    }
}