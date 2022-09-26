import createEventHandlers from './eventHandlers.js'

function eventsController() {
    const createHandlers = () => { return createEventHandlers(); }
    // const resize = (elementID) => $('#content').resizable().draggable(); 
    
    return { createHandlers}
};

export default eventsController;