import { createForm } from "./domStuff.js";
import { createProject} from "./project.js";

const tasks = [];
let addTask = document.querySelector('.add-task');
let addProject = document.querySelector('.add-project');
const container = document.querySelector('.container');
const projectButton = document.querySelector('.add-project');

addTask.addEventListener('click', () => {
    console.log(tasks)
    createForm();
})

projectButton.addEventListener('click', () => {
    createProject();
    console.log('new Project');
    
})

function createTask(title, description, dueDate, priority, project) {
    return { title, description, dueDate, priority, project };
}

export {tasks, createTask};

