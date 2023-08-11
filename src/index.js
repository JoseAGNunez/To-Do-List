import './styles.css';
import { createNavigation, tabSwitching } from './navigation';
import { createInbox } from './inbox';

const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

createNavigation();
tabSwitching();
createInbox();