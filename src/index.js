import './css/style.css';
import { events } from './eventList';

function main() {
    events.startup();
}

window.addEventListener("load", () => main());

