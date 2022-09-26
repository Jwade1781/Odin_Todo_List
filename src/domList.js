import menuDom from "./menu";

export const domList = (function () {
    const getElement = (id) => {return document.querySelector(`#${id}`)};
    const createIdElementPair = (id) => {return {"id" : id, "element" : getElement(id)}}
    
    const darkmodeBtn = () => {return "darkmodeBtn"};
    const addProjectBtn = () => {return "addProjectBtn"};
    const content = () => {return "content"};
    const cancelBtn = () => {return "cancelBtn"};
    const acceptAddBtn = () => {return "acceptAddBtn"};
    const toggleMenu = () => menuDom.toggleProjectMenu();

    return { darkmodeBtn, addProjectBtn, content, cancelBtn, acceptAddBtn, toggleMenu, createIdElementPair};
})();

export default domList;