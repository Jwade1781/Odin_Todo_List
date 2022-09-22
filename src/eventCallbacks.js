function getEventCallbacks(){
    function nightmode(){
        const invertingElements = [
            document.body.querySelector("#content").classList,
            document.body.querySelector("#logo").classList
        ]

        for (const element of invertingElements)
            element.contains("invertColor") ? element.remove("invertColor") : element.add("invertColor");
    }
    
    function addProject(){
        console.log("Button was pressed");
    }

    const eventCallbacks = {
        "nightmodeBtn" : nightmode,
        "newProjectBtn" : addProject
    }

    return eventCallbacks;
}
export default getEventCallbacks;