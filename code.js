function createTask(title, description, dueDate, priority) {
    return { title, description, dueDate, priority };
}

let bill = createTask('Bnb','Go to work', '10', 'hight');

console.log(bill);