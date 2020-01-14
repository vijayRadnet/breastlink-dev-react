let showToggleOff = true; //state?

const util = (selector) => {
    let el = document.querySelector(selector);

    let show = () => {
        el.classList.add('show');
        showToggleOff = false;
    }

    let hide = () => {
        el.classList.remove('show');
        showToggleOff = true;
    }

    let toggle = () => {
        showToggleOff ? show() : hide();
    }
   
    return {
        show: show,
        hide: hide,
        toggle: toggle
    }
}



export default util;