export function createInbox(){
    const container = document.getElementById('container');
    const content = document.createElement('div');
    content.id = 'content';
    container.appendChild(content);

    const inbox = document.createElement('div');
    inbox.id = 'inbox';
    content.appendChild(inbox);
    const inboxHeader = document.createElement('header');
    inboxHeader.id = 'inboxHeader';
    inbox.appendChild(inboxHeader);
    const inboxHeading = document.createElement('h1');
    inboxHeading.id = 'inboxHeading';
    inboxHeading.textContent = 'Inbox';
    inboxHeader.appendChild(inboxHeading);

    //Sort by

    const sortBy = document.createElement('h3');
    sortBy.id = 'sortBy';
    sortBy.textContent = 'Sort by';
    inboxHeader.appendChild(sortBy);

    //Add Task
    const addTask = document.createElement('h2');
    addTask.id = 'addTask';
    addTask.textContent = '+ Add task';
    inbox.appendChild(addTask);
};