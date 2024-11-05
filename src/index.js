import { createForm, removeTask, renderTask } from "./domStuff.js";
import { createProject, projects, renderProjects} from "./project.js";
import { loadProjects, loadTasks, saveProjects, saveTasks } from "./storage.js";
import { checkDate } from "./project.js";

let tasks = [];

console.log(projects)

if (localStorage.length) { 
    tasks = [...loadTasks()];
    projects = [...loadProjects()];
    renderTask(tasks);
    renderProjects(projects);
    let bill = loadProjects();
    console.log(bill);
}
else {
    renderProjects(projects);
    saveTasks(tasks);
    saveProjects(projects);
}

console.log(tasks);

let addTask = document.querySelector('.add-task');
let addProject = document.querySelector('.add-project');
const container = document.querySelector('.container');
const projectButton = document.querySelector('.add-project');
const filterTasks = document.querySelectorAll('.filter-tasks');

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

filterTasks.forEach( filterTask => {
    filterTask.addEventListener('click', () => { 
        checkDate(filterTask.textContent);
    })
})

export { tasks, createTask };

