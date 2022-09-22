const events = (() => {

    let nightmodeDict, newProjectDict;
    const eventHandlers = [
        nightmodeDict = {
            "id": "nightmodeBtn",
            "callback": () => {
                const invertingElements = [
                    document.body.querySelector("#content").classList,
                    document.body.querySelector("#logo").classList
                ]

                for (const element of invertingElements)
                    element.contains("invertColor") ? element.remove("invertColor") : element.add("invertColor");
            },
            "trigger": "click"
        },

        newProjectDict = {
            "id": "newProjectBtn",
            "callback": () => {
                const invertingElements = [
                    document.body.querySelector("#content").classList,
                    document.body.querySelector("#logo").classList
                ]

                for (const element of invertingElements)
                    element.contains("invertColor") ? element.remove("invertColor") : element.add("invertColor");
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