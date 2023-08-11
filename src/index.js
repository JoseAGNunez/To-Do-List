import './styles.css';
import { createNavigation } from './navigation';

const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

createNavigation();