import { createInbox } from "./inbox";

export function createNavigation(){
    const container = document.getElementById('container');

    const navigationHeader = document.createElement('header');
    navigationHeader.id = 'navigationHeader';
    container.appendChild(navigationHeader);

    const navigationUl = document.createElement('ul');
    navigationUl.id = 'navigationUl';
    navigationHeader.appendChild(navigationUl);

    const navTabs = ['Inbox', `Today's tasks`, 'Upcoming tasks'];

    navTabs.forEach(navTab =>{
        const li = document.createElement('li');
        const navTabId = navTab.replace(/[^a-zA-Z ]/g, '').charAt(0).toLowerCase() + navTab.slice(1).replace(/[^a-zA-Z ]/g, '').replace(/ (\w)/g, function(match, p1) {
        return p1.toUpperCase();
        });
        li.id = `${navTabId}Tab`;
        li.className = 'navTabs';
        navigationUl.appendChild(li);
        li.textContent = `${navTab}`;
    });
};

export function tabSwitching() {
    const inboxTab = document.getElementById('inboxTab');
    inboxTab.addEventListener('click', ()=>{
        document.getElementById('content').remove();
        createInbox();
    });
};