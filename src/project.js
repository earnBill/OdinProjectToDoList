import { renderTask } from "./domStuff.js";
import { tasks } from "./index.js";
import { saveProjects } from "./storage.js";

let projects = ["General"];

const body = document.getElementsByTagName('body')[0];
const aside = document.getElementsByTagName('aside')[0];
const main =document.getElementsByTagName('main')[0];
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
    labelForm.textContent = 'Title:';
    const inputForm = document.createElement('input');
    inputForm.type = 'text';
    const formButton = document.createElement('button');
    formButton.textContent = 'Add project';
    formButton.className = 'project-button';

    projectForm.append(headerForm, labelForm, inputForm, formButton);
    formProjectContainer.appendChild(projectForm);
    overlay.appendChild(formProjectContainer);
    body.appendChild(overlay);

    let projectFormButton = document.querySelector('.project-button');
    
    projectFormButton.addEventListener('click', (event) => {
        event.preventDefault();
        let projectName = inputForm.value;
        console.log(projectName);
        projectDiv.textContent = projectName;
        aside.appendChild(projectDiv);
        projects.push(projectName);
        console.log(projects);
        saveProjects(projects);
        overlay.remove();

    });
   
}

function renderProjects() {
    for (let project of projects) {
        const projectContainer = document.createElement('div');
        const addProject = document.createElement('div');
        const delProject = document.createElement('div');
        projectContainer.className = 'project-container';
        addProject.className = 'projects';
        delProject.className = 'remove-icon';
        addProject.textContent = project;
        projectContainer.append(addProject, delProject);
        aside.appendChild(projectContainer);
        
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

export { createProject, projects, renderProjects };