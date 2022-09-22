import './css/style.css';
import {createEventHandlers} from './events.js'

function main(){
    createEventHandlers();
}

window.addEventListener("load", () => main());

