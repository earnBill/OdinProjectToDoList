

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function saveProjects(project) {
    localStorage.setItem('projects',JSON.stringify(project));
}
function loadTasks() {
    return JSON.parse(localStorage.getItem("tasks"));
}
function loadProjects() {
    return JSON.parse(localStorage.getItem("projects"));
}

export { saveTasks, loadTasks, saveProjects, loadProjects }