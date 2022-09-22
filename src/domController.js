import createEventHandlers from './eventHandlers.js'

function domController(){
    const setupEventHandlers = () => createEventHandlers();
    const styleElement = (element, style, filter) => {
        if (filter) element.style.filter === style ?  element.style.filter = style :  element.style.filter = style; // last value will need to have regex to reset value to 0
    };
    const create = () => {}
    const start = () => setupEventHandlers();
    return {start, styleElement, create};
};

export default domController;