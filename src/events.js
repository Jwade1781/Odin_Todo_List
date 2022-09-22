const events = (() => {

    let nightmodeDict, newProjectDict;
    const eventHandlers = [
        nightmodeDict = {
            "id": "nightmodeBtn",
            "callback": () => {
                const bodyClasses = document.body.classList;
                bodyClasses.contains("invertColor") ? bodyClasses.remove("invertColor") : bodyClasses.add("invertColor");
            },
            "trigger": "click"
        },

        newProjectDict = {
            "id": "newProjectBtn",
            "callback": () => {
                const bodyClasses = document.body.classList;
                bodyClasses.contains("invertColor") ? bodyClasses.remove("invertColor") : bodyClasses.add("invertColor");
            },
            "trigger": "click"
        },
    ];

    const createEventHandlers = () => {
        for (let i = 0; i < eventHandlers.length; i++) {
            let element = eventHandlers[i];
            document.querySelector("#" + element["id"]).addEventListener(element["trigger"], element["callback"]);
        }
    }

    return { createEventHandlers }
})();

const createEventHandlers = () => {
    { return events.createEventHandlers() };
}

export { createEventHandlers };