let defaultProject = [];
let addTask = document.querySelector('.add-task');
let addProject = document.querySelector('.add-project');

addTask.addEventListener('click', () => {
    defaultProject.push(createTask('bill', 'bill', '20', 'bill'));
    console.log(defaultProject)
})

function createTask(title, description, dueDate, priority) {
    return { title, description, dueDate, priority };
}

defaultProject.push(createTask('Bnb','Go to work', '10', 'hight'));
console.log(defaultProject);

