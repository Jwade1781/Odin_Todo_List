import projectsMenuDom from "./projectsMenuDom";

function domController() {
    const menuDom = projectsMenuDom();

    const removeElement = (element) => element.parentNode.removeChild(element);
    const addElement = (element, parent) => parent.appendChild(element);
    const addNewProjectMenu = () => menuDom.addNewProjectMenu();

    return { addNewProjectMenu, removeElement, addElement }
}

export default domController;