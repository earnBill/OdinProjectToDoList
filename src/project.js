import { renderTask } from "./domStuff.js";
import { tasks } from "./index.js";


const body = document.getElementsByTagName('body')[0];
const aside = document.getElementsByTagName('aside')[0];
const main =document.getElementsByTagName('main')[0];

const projects = ['General'];

const defaultProject = document.createElement('div');
defaultProject.textContent = projects[0];
defaultProject.className = 'projects';
aside.appendChild(defaultProject);



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
        overlay.remove();

        const allProjects = document.querySelectorAll('.projects');
        console.log(allProjects);

        allProjects.forEach((project) => {
            project.addEventListener('click', () => {
            const tasksContainer = document.querySelector('.tasks-container');
            tasksContainer.innerHTML = '';
            renderTask(tasks.filter(task => task.project === project.textContent));                
            })
        })
    });
   
}


export { createProject, projects };