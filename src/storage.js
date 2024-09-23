

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    return localStorage.getItem(JSON.parse('tasks'));
}

export { saveTasks, loadTasks }