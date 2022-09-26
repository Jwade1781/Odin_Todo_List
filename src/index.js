import './css/style.css';
import eventsController from './eventsController.js';
import domController from './domController';
function main(){
    eventsController().createHandlers();
    //const domControl = domController();
    //domControl.addNewProjectMenu();
}

window.addEventListener("load", () => main());

