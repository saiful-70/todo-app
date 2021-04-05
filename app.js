//DOM Selector
const form = document.querySelector('form');
const inputField = document.getElementById('input-field');
const submitBtn = document.getElementById('submit');
const incompleteTask = document.querySelector('.incomplete-task ul');
const completeTask = document.querySelector('.complete-task ul');

//Create tasks
let createTask = (task) => {
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    listItem.className = 'list-item';
    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    label.innerText = task;
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';

    return listItem;
}

//Add tasks
let addTask = (e) => {
    e.preventDefault();
    let taskName = inputField.value;
    if(taskName !== '') {
        let createdTask = createTask(taskName);
        console.log(createdTask);
        incompleteTask.insertAdjacentElement('beforeend',createdTask);
        inputField.value = '';
    }
}


//move tasks
let moveTask = (event) => {
    if(event.target.id === 'checkbox') {
        let listItem = event.target.parentNode;
        console.log(event.target.parentNode);
        completeTask.insertAdjacentElement('beforeend', listItem);
        let checkbox = document.querySelector('.complete-task #checkbox');
        checkbox.remove();
        
        let deteteBtn = document.createElement('input');
        deteteBtn.type = 'submit';
        deteteBtn.id = 'delete';
        deteteBtn.value = 'Delete';

        listItem.appendChild(deteteBtn);
    }
}


//Delete tasks
let deleteTask = (event) => {
    if(event.target.value === 'Delete') {
        console.log(event.target.value);
        event.target.parentNode.remove();
    }
}


//All event listener
const eventListener = () => {
    submitBtn.addEventListener('click',addTask);
    incompleteTask.addEventListener('click', moveTask);
    completeTask.addEventListener('click', deleteTask);
}

eventListener();