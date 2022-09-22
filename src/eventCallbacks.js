import domController from './domController';

function getEventCallbacks(){
    function nightmode(){
        const invertingElements = [
            document.body.querySelector("#content").classList,
            document.body.querySelector("#logo").classList
        ]

        for (const element of invertingElements)
            element.contains("invertColor") ? element.remove("invertColor") : element.add("invertColor");
    }
    
    function addProjectBtn(){
        domController().styleElement(document.querySelector("#content"), "blur(2px)", true);
        domController().create();
    }

    const eventCallbacks = {
        "nightmodeBtn" : nightmode,
        "newProjectBtn" : addProjectBtn
    }

    return eventCallbacks;
}
export default getEventCallbacks;