import { tasks, createTask } from "./index.js";

const main = document.querySelector('main');
const container = document.querySelector('.container');
const tasksContainer = document.querySelector('.tasks-container');
const body = document.getElementsByTagName('body')[0];

function createForm() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    console.log('create form');
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';

    const form = document.createElement('form');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';
    const title = document.createElement('input');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description';
    const description = document.createElement('input');

    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Date';
    const date = document.createElement('input');
    date.type = 'date';

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';

    const priorityContainer = document.createElement('div');
    priorityContainer.className = 'priority-container';

    const lowLabel = document.createElement('label');
    lowLabel.textContent = 'Low';
    const lowRadio = document.createElement('input');
    lowRadio.type = 'radio';
    lowRadio.id = 'lowRadio';
    lowLabel.htmlFor = 'lowRadio';
    lowRadio.name = 'taskPriority';
    lowRadio.value = 'low';
    lowRadio.checked = true;

    const mediumLabel = document.createElement('label');
    mediumLabel.textContent = 'Medium';
    const mediumRadio = document.createElement('input');
    mediumRadio.type = 'radio';
    mediumRadio.id = 'mediumRadio';
    mediumLabel.htmlFor = 'mediumRadio';
    mediumRadio.name = 'taskPriority';
    mediumRadio.value = 'medium';

    const hightLabel = document.createElement('label');
    hightLabel.textContent = 'Hight';
    const hightRadio = document.createElement('input');
    hightRadio.type = 'radio';
    hightRadio.id = 'hightRadio';
    hightLabel.htmlFor = 'hightRadio';
    hightRadio.name = 'taskPriority';
    hightRadio.value = 'hight';

    const submit = document.createElement('button');
    submit.classList = 'submit';
    submit.type = "submit";
    submit.textContent = "Add Todo";

    const cancel = document.createElement('button');
    cancel.textContent = "Cancel";

    
    priorityContainer.append(lowLabel, lowRadio, mediumLabel, mediumRadio, hightLabel, hightRadio);
    
    form.appendChild(titleLabel);
    form.appendChild(title);
    form.appendChild(descriptionLabel)
    form.appendChild(description);
    form.appendChild(dateLabel);
    form.appendChild(date);
    form.appendChild(priorityLabel);
    form.appendChild(priorityContainer);
    form.appendChild(submit);
    form.appendChild(cancel);

    formContainer.appendChild(form);
    body.appendChild(overlay);
    overlay.appendChild(formContainer);

  
    submit.addEventListener('click', (event) => {
        let checked = form.querySelector('input[name=taskPriority]:checked');
        console.log(checked.value);        
        event.preventDefault();
        console.log('add task');
        tasks.push(createTask(title.value, description.value, date.value, checked.value));
        console.log(tasks);
        console.log(date.value);
        overlay.remove();

        let lastTask = tasks.slice(-1);
        renderTask(lastTask);
        console.log(lastTask.title);

    })
    cancel.addEventListener('click', ()=> {
        console.log('cancelllll');
        overlay.remove();
    })

    
}

function renderTask(task) {
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'description';
    const dateDiv = document.createElement('div');
    dateDiv.className = 'date';
    const priorityDiv = document.createElement('div');
    priorityDiv.className = 'priority';

    titleDiv.textContent = task[0].title;
    descriptionDiv.textContent = task[0].description;
    dateDiv.textContent = task[0].dueDate;
    priorityDiv.textContent = task[0].priority;
    console.log(task[0].priority);
    

    taskContainer.append(titleDiv, descriptionDiv, dateDiv, priorityDiv);
    tasksContainer.appendChild(taskContainer);
    
}

function clear () {
    console.log('clearrrrrrrrrrrrrr');
    const formContainer = document.querySelector('.form-container');
    formContainer.remove();
}

export { createForm };