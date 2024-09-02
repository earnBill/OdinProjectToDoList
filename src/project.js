const projects = ['general'];

function createProject() {
    const body = document.getElementsByTagName('body')[0];
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    const aside = document.getElementsByTagName('aside')[0];
    const main =document.getElementsByTagName('main')[0];

    const projectDiv = document.createElement('div');
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
    });
   
}


export { createProject };