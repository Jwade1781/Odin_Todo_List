import './css/style.css';
import domController from './domController'

function main(){
    console.log("Main Start");
    domController().start();
}

window.addEventListener("load", () => main());

