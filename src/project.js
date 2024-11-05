import { renderTask } from "./domStuff.js";
import { tasks } from "./index.js";
import { saveProjects, saveTasks } from "./storage.js";

let projects = ["General"];

const body = document.getElementsByTagName('body')[0];
const aside = document.getElementsByTagName('aside')[0];
const main =document.getElementsByTagName('main')[0];
const projectsContainer = document.querySelector('.projects-container');
const tasksContainer = document.querySelector('.tasks-container');
console.log(projects);

// const defaultProject = document.createElement('div');
// defaultProject.textContent = projects[0];
// defaultProject.className = 'projects';
// aside.appendChild(defaultProject);


function createProject() {
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    const projectDiv = document.createElement('div');
    projectDiv.className = 'projects';
    const formProjectContainer = document.createElement('div');
    formProjectContainer.className = 'form-project-container';
    const projectForm = document.createElement('form');
    const headerForm = document.createElement('h3');
    headerForm.textContent = 'Add Project';
    const labelForm = document.createElement('label');
    labelForm.textContent = 'Title ';
    const inputForm = document.createElement('input');
    inputForm.type = 'text';
    const addButton = document.createElement('button');
    addButton.textContent = 'Add project';
    addButton.className = 'add-button';
    const cancelButton = document.createElement('button');
    cancelButton.className = 'cancel-button';
    cancelButton.textContent = 'Cancel';

    projectForm.append(headerForm, labelForm, inputForm, addButton, cancelButton);
    formProjectContainer.appendChild(projectForm);
    overlay.appendChild(formProjectContainer);
    body.appendChild(overlay);

    // let projectFormButton = document.querySelector('.project-button');
    
    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        let projectName = inputForm.value;
        console.log(projectName);
        projectDiv.textContent = projectName;
        // aside.appendChild(projectDiv);
        projects.push(projectName);
        console.log(projects);
        saveProjects(projects);
        overlay.remove();

        renderProjects();
    });

    cancelButton.addEventListener('click', () => {
        overlay.remove();
    });
   
}

function renderProjects() {
    projectsContainer.innerHTML = '';
    for (let project of projects) {
        if (project != "General") {
            const projectContainer = document.createElement('div');
            const addProject = document.createElement('div');
            const delProject = document.createElement('div');
            projectContainer.className = 'project-container';
            addProject.className = 'projects';
            delProject.className = 'remove-icon';
            addProject.textContent = project;
            projectContainer.append(addProject, delProject);
            projectsContainer.appendChild(projectContainer);
        

        delProject.addEventListener('click', () => {
            const deletedProject = addProject.textContent;
            console.log(deletedProject);
            const index = projects.findIndex(elem => elem === deletedProject);
            console.log(index);
            projects.splice(index,1);
            console.log(projects);
            delProject.parentNode.remove();
            saveProjects(projects);
            tasks.filter((currentValue, index, array) => {
                console.log(`The deleted project is ${currentValue.project}`);
                if (currentValue.project === deletedProject) {
                    array.splice(index, 1);
                }
            })
            tasksContainer.innerHTML = '';
            saveTasks(tasks);
            renderTask(tasks);
            console.log(tasks);
            })
        }
    }
    const allProjects = document.querySelectorAll('.projects');
    console.log(allProjects);
    allProjects.forEach((project) => {
        project.addEventListener('click', () => {
            const tasksContainer = document.querySelector('.tasks-container');
            console.log('you click me');
            if (project.textContent === 'General') {
                tasksContainer.innerHTML = '';
                renderTask(tasks);
                console.log(tasks);
            }
            else {
                tasksContainer.innerHTML = '';
                renderTask(tasks.filter(task => task.project === project.textContent));                
            }
        })
    })
}

function checkDate(day) {   
    tasksContainer.innerHTML = '';
    const today = new Date().toISOString().slice(0, 10); 
    if(day === 'Today') {
        renderTask(tasks.filter(day => day.dueDate === today));
    }
    else if (day === 'Upcoming') {
        renderTask(tasks.filter(day => day.dueDate !== today));
    }
    else {
        renderTask(tasks);
    }
}

export { createProject, projects, renderProjects, checkDate };