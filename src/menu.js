import { events  } from "./eventList";
export const menuDom = (function () {

    const removeElement = (element) => element.parentNode.removeChild(element);
    const addElement = (element, parent) => parent.appendChild(element);

    const projectsList = () => {
        const setList = (projectList) => projectsList.list = projectList;
        const getList = () => { return projectsList.list };
        return { setList, getList };
    }

    function toggleProjectMenu() {
        const parent = document.querySelector("#innerContainer");
        const addProjectMenuId = "addProjectMenu";

        const createProjectsMenu = () => {
            const addProjectMenu = document.createElement("div");
            const addProjectHeader = document.createElement("h2");
            const buttonsDiv = document.createElement("div");
            const addProjectBtn = document.createElement("button");
            const cancelBtn = document.createElement("button");

            addProjectHeader.textContent = "Add a new project";
            addProjectBtn.textContent = "Add Project";
            cancelBtn.textContent = "Cancel";
            cancelBtn.id = "cancelBtn";
            addProjectBtn.id = "acceptAddBtn";

            buttonsDiv.appendChild(addProjectBtn);
            buttonsDiv.appendChild(cancelBtn);
            
            addProjectMenu.id = addProjectMenuId;

            const createInput = (inputs) => {
                const inputsDiv = document.createElement("div");
                for (let i = 0; i < inputs.length; i++) {
                    const inputVals = inputs[i];
                    const inputDiv = document.createElement("div");
                    const inputLabel = document.createElement("label");
                    inputLabel.for = inputVals["name"];
                    inputLabel.textContent = inputVals["text"];
                    inputDiv.appendChild(inputLabel);

                    const input = document.createElement("input");
                    input.type = inputVals["type"];
                    input.id = inputVals["id"];
                    input.name = inputVals["name"];
                    inputDiv.appendChild(input);
                    inputsDiv.appendChild(inputDiv);
                }
                return inputsDiv;
            }

            const inputs = [
                { "type": "text", "id": "projectName", "name": "projectName", "text": "Name" },
                { "type": "text", "id": "subject", "name": "subject", "text": "Subject" },
                { "type": "text", "id": "description", "name": "description", "text": "description" },
                { "type": "date", "id": "date", "name": "date", "text": "Date" }
            ]

            const inputsDiv = createInput(inputs);
            addProjectMenu.appendChild(addProjectHeader);
            addProjectMenu.appendChild(inputsDiv);
            addProjectMenu.appendChild(buttonsDiv);
            return addProjectMenu;
        }

        // the add project menu is not displayed, create and display it
        if (!document.querySelector(`#${addProjectMenuId}`)) {
            projectsList().setList(document.querySelector("#projects"));
            addElement(createProjectsMenu(), parent);
            removeElement(projectsList().getList());
            events.menuButtons();
        }

        else {
            removeElement(document.querySelector(`#${addProjectMenuId}`));
            addElement(projectsList().getList(), parent);
        }
    }

    return { toggleProjectMenu }
})();

export default menuDom;