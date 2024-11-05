import { tasks, createTask } from "./index.js";
import { projects } from "./project.js";
import { saveTasks } from "./storage.js";



const main = document.querySelector('main');
const container = document.querySelector('.container');
const tasksContainer = document.querySelector('.tasks-container');
const body = document.getElementsByTagName('body')[0];

function createForm() {
    console.log(projects);
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    console.log('create form');
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';

    const form = document.createElement('form');
    form.className = 'task-form';

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';
    const title = document.createElement('input');
    title.className = 'title-input';

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description';
    const description = document.createElement('input');
    description.className = "description-input";

    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Date';
    const date = document.createElement('input');
    date.type = 'date';
    date.className="date-input";

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
    hightLabel.textContent = 'High';
    const hightRadio = document.createElement('input');
    hightRadio.type = 'radio';
    hightRadio.id = 'hightRadio';
    hightLabel.htmlFor = 'hightRadio';
    hightRadio.name = 'taskPriority';
    hightRadio.value = 'high';

    const projectLabel = document.createElement('label');
    projectLabel.textContent = 'Project';
    const projectComboBox = document.createElement('select');
    projectComboBox.className = "project-combo-box";

    for (const projectName of projects) {
        const boxOption = document.createElement('option');
        boxOption.value = projectName;
        boxOption.text = projectName;
        projectComboBox.appendChild(boxOption);
        console.log(projectName);
    }

    
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
    form.appendChild(projectLabel);
    form.appendChild(projectComboBox);
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
        tasks.push(createTask(title.value, description.value, date.value, checked.value, projectComboBox.value));
        console.log(tasks);
        console.log(date.value);
        overlay.remove();

        let lastTask = tasks.slice(-1);
        renderTask(lastTask);
        console.log(lastTask.title);

        saveTasks(tasks);
    })
    cancel.addEventListener('click', ()=> {
        console.log('cancelllll');
        overlay.remove();
    })

    
}

function renderTask(task) {
    for (let i = 0; i < task.length; i++) {
      const taskContainer = document.createElement('div');
      taskContainer.className = 'task-container';
      
      const onlyTasks = document.createElement('div');
      onlyTasks.className = 'only-tasks';
      const titleDiv = document.createElement('div');
      titleDiv.className = 'title';
      const descriptionDiv = document.createElement('div');
      descriptionDiv.className = 'description';
      const dateDiv = document.createElement('div');
      dateDiv.className = 'date';
      const priorityDiv = document.createElement('div');
      priorityDiv.className = 'priority';


      const checkIcon = document.createElement('div');
      checkIcon.className = 'check-icon';
      checkIcon.style.backgroundImage = "url('./pictures/cyrcle.svg')";
      
      const buttonsContainer = document.createElement('div');
      buttonsContainer.className = 'buttons-container';

      const editIcon = document.createElement('div');
      editIcon.className = 'edit-icon';
      editIcon.style.backgroundImage = "url('./pictures/edit.svg')";
      editIcon.dataset.index = task[i].description;

      const removeIcon = document.createElement('div');
      removeIcon.className = 'remove-icon';
      removeIcon.style.backgroundImage = "url('pictures/thrash.svg')";
      removeIcon.dataset.index = task[i].description;

      if (task[i].priority === 'low') {
        taskContainer.style.border = '1px solid green';
      } else if (task[i].priority === 'medium'){
        taskContainer.style.border = '1px solid #ffe79a';
      } else {
        taskContainer.style.border = '1px solid red';
      }
      
      checkIcon.addEventListener('click', () => {
        // const strike = document.createElement('s');
        // taskContainer.parentNode.insertBefore(strike, taskContainer);
        // strike.appendChild(taskContainer);
        if (taskContainer.style.textDecoration === 'line-through') {
            taskContainer.style.textDecoration = 'none';
            console.log('text decorrrrrrrrrr');
            checkIcon.style.backgroundImage = "url('./pictures/cyrcle.svg')";
        } else {
            taskContainer.style.textDecoration = 'line-through';
            console.log('lineeeeeeeeeeeeeee');
            console.log(taskContainer.style.textDecoration);
            checkIcon.style.backgroundImage = "url('./pictures/blackCyrcle.svg')";
        }
      })

      removeIcon.addEventListener('click', () => {
        let index = tasks.findIndex((key) => key['description'] === removeIcon.dataset.index);
        console.log(index);
        tasks.splice(index,1);
        console.log(tasks);
        buttonsContainer.parentNode.remove();
        saveTasks(tasks);
        // tasksContainer.innerHTML = '';
        // renderTask(tasks);
      })

      editIcon.addEventListener('click', ()=> {
        let index = tasks.findIndex((key)=> key['description'] === editIcon.dataset.index);
        console.log(index);
        createForm();
        const titleInput = document.querySelector('.title-input');
        const descriptionInput = document.querySelector('.description-input');
        const dateInput = document.querySelector('.date-input');
        const projectCombo = document.querySelector('.project-combo-box');
        const submit = document.querySelector('.submit');
        const taskForm = document.querySelector('.task-form');
        const updateBtn = document.createElement('button');
        updateBtn.className = 'update-btn';
        updateBtn.textContent = 'Update task';


        titleInput.value = tasks[index].title;
        descriptionInput.value = tasks[index].description;
        dateInput.value = tasks[index].dueDate;
        projectCombo.value = tasks[index].project;

        submit.remove();
        taskForm.appendChild(updateBtn);
        
        updateBtn.addEventListener('click', ()=> {
            tasks[index].title = titleInput.value;
            tasks[index].description = descriptionInput.value;
            tasks[index].dueDate = dateInput.value;
            tasks[index].project = projectCombo.value;
            editIcon.parentNode.remove();
            saveTasks(tasks);
        })

      })
      
      titleDiv.textContent = task[i].title;
      descriptionDiv.textContent = task[i].description;
      dateDiv.textContent = task[i].dueDate;
      priorityDiv.textContent = task[i].priority;
      console.log(task[i].priority);
      
      onlyTasks.append(titleDiv, descriptionDiv, dateDiv)
      buttonsContainer.append(editIcon, removeIcon);
      taskContainer.append(checkIcon, onlyTasks, buttonsContainer);
      tasksContainer.appendChild(taskContainer);
    }
    
}


function clear () {
    console.log('clearrrrrrrrrrrrrr');
    const formContainer = document.querySelector('.form-container');
    formContainer.remove();
}

function removeTask(icon) {  
    
}

export { createForm, renderTask, removeTask };