import domList from "./domList";

export const events = (function () {
    const createHandler = (item) => { document.querySelector("#" + item["id"]).addEventListener(item["trigger"], item["callback"]) }
    const toggleClass = (element, className) =>
        !(element.classList.contains(className)) ? element.classList.add(className) : element.classList.remove(className);

    const toggleAnimation = (element, animationName) => {
        element.classList.add(animationName);
        element.addEventListener('animationend', () => {
            element.classList.remove(animationName); 
        });
    }

    const startup = function () {
        const darkmodeBtn = domList.createIdElementPair(domList.darkmodeBtn());
        const addProjectBtn = domList.createIdElementPair(domList.addProjectBtn());
        const content = domList.createIdElementPair(domList.content());
        const items = [
            {
                "id": darkmodeBtn["id"],
                "callback": () => {
                    toggleClass(content["element"], "invertColor")
                    if (content["element"].classList.contains("invertColor"))
                        toggleAnimation(darkmodeBtn["element"], "buttonSwing")
                    else
                        toggleAnimation(darkmodeBtn["element"], "buttonSwingReverse")
                },
                "trigger": "click"
            },

            {
                "id": addProjectBtn["id"],
                "callback": () => {
                    toggleAnimation(addProjectBtn["element"], "buttonSwing");
                    domList.toggleMenu();
                },
                "trigger": "click"
            },
        ]

        for (let i = 0; i < items.length; i++)
            createHandler(items[i])
    };

    const menuButtons = function () {
        const cancelBtn = domList.cancelBtn();
        createHandler({
            "id": cancelBtn, "trigger": "click", "callback": () => {
                domList.toggleMenu();
            }
        })

        const acceptAddBtn = domList.acceptAddBtn();
        createHandler({
            "id": acceptAddBtn, "trigger": "click", "callback": () => {
                console.log("Project Accepted");
                domList.toggleMenu();
            }
        })
    };

    return { startup, menuButtons };
})();