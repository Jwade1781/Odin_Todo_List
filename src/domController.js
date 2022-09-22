import createEventHandlers from './eventHandlers.js'

function domController(){
    const setupEventHandlers = () => createEventHandlers();
    const start = () => setupEventHandlers();
    return {start};
};

export default domController;