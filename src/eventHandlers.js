import getEventCallbacks from "./eventCallbacks";

function eventHandlers() {
    const eventCallbacks = getEventCallbacks();
    const eventHandlers = [
        "nightmodeBtn" = {
            "id": "nightmodeBtn",
            "callback": eventCallbacks["nightmodeBtn"],
            "trigger": "click"
        },

        "newProjectBtn" = {
            "id": "newProjectBtn",
            "callback": eventCallbacks["newProjectBtn"],
            "trigger": "click"
        },
    ];

    const createEventHandlers = () => {
        for (const element of eventHandlers) document.querySelector("#" + element["id"]).addEventListener(element["trigger"], element["callback"])
    }

    return { createEventHandlers }
};

const createEventHandlers = () => { return eventHandlers().createEventHandlers() };

export default createEventHandlers;