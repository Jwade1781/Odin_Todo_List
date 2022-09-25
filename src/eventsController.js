import createEventHandlers from './eventHandlers.js'

function eventsController() {
    const createHandlers = () => { return createEventHandlers(); }
    return { createHandlers }
};

export default eventsController;