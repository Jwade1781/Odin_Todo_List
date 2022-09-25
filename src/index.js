import './css/style.css';
import eventsController from './eventsController.js';

function main(){
    eventsController().createHandlers();
}

window.addEventListener("load", () => main());

