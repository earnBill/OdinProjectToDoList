import { createForm, removeTask, renderTask } from "./domStuff.js";
import { createProject} from "./project.js";
import { loadTasks } from "./storage.js";

const tasks = [];
if (localStorage.length) {
    const storedTAsks = [...loadTasks()];
    console.logr(storedTAsks);
;}

let addTask = document.querySelector('.add-task');
let addProject = document.querySelector('.add-project');
const container = document.querySelector('.container');
const projectButton = document.querySelector('.add-project');

addTask.addEventListener('click', () => {
    console.log(tasks)
    createForm();
    // const removeIcons = document.querySelectorAll('.remove-icon');
    // console.log(removeIcons);
    // removeIcons.forEach(icon => {
    //   removeTask(icon);
    // });
});

projectButton.addEventListener('click', () => {
    createProject();
    console.log('new Project');
    
})

function createTask(title, description, dueDate, priority, project) {
    return { title, description, dueDate, priority, project };
}

export {tasks, createTask};

