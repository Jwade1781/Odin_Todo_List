function createEventHandlers() {
    function createHandler(item) {
        document.querySelector("#" + item["id"]).addEventListener(item["trigger"], item["callback"])
    }

    const toggleClass = (elementID, className) => {
        const element = document.querySelector(`#${elementID}`);
        !(element.classList.contains(className)) ? element.classList.add(className) : element.classList.remove(className);
    }

    const items = [
        {
            "id": "darkmodeBtn",
            "callback": () => toggleClass("content", "invertColor"),
            "trigger": "click"
        },

        {
            "id": "darkmodeBtn",
            "callback": () => toggleClass("darkmodeBtn", "buttonSwing"),
            "trigger": "click"
        },

        {
            "id": "addProjectBtn",
            "callback": () => console.log("Add Project Pressed"),
            "trigger": "click"
        },

        {
            "id": "addProjectBtn",
            "callback": () => toggleClass("addProjectBtn", "buttonSwing"),
            "trigger": "click"
        }
    ]

    for (let i = 0; i < items.length; i++)
        createHandler(items[i])
};

export default createEventHandlers;