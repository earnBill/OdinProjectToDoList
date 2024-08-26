const tasks = [];
let addTask = document.querySelector('.add-task');
let addProject = document.querySelector('.add-project');
const container = document.querySelector('.container');

addTask.addEventListener('click', () => {
    tasks.push(createTask('bill', 'bill', '20', 'bill', 'degault'));
    console.log(tasks)
    createForm();
})

function createTask(title, description, dueDate, priority, project) {
    return { title, description, dueDate, priority, project };
}

function createForm() {
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

    const mediumLabel = document.createElement('label');
    mediumLabel.textContent = 'Medium';
    const mediumRadio = document.createElement('input');
    mediumRadio.type = 'radio';

    const hightLabel = document.createElement('label');
    hightLabel.textContent = 'Hight';
    const hightRadio = document.createElement('input');
    hightRadio.type = 'radio';

    priorityContainer.append(lowLabel, lowRadio, mediumLabel, mediumRadio, hightLabel, hightRadio);
    
    form.appendChild(titleLabel);
    form.appendChild(title);
    form.appendChild(descriptionLabel)
    form.appendChild(description);
    form.appendChild(dateLabel);
    form.appendChild(date);
    form.appendChild(priorityContainer);

    formContainer.appendChild(form);
    container.appendChild(formContainer);
}

tasks.push(createTask('Bnb','Go to work', '10', 'hight'));
console.log(tasks);

