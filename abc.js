let hamburger_pane = document.querySelector(`.hamburger-pane`);
let hamburger_logo = document.querySelector(`#hamburger-logo`);

let flag = false;

function hamburger() {
    if (flag == false) {
        hamburger_pane.style.display = "flex";
        hamburger_logo.src = './images/xmark-solid.svg';
        hamburger_logo.style.transform = "rotate(180deg)";
        hamburger_logo.style.transition = "all 1s ease-in-out";
        flag = true;
    }
    else {
        hamburger_pane.style.display = "none";
        hamburger_logo.src = './images/bars-solid.svg';
        hamburger_logo.style.transform = "rotate(-180deg)";
        hamburger_logo.style.transition = "all 1s ease-in-out";
        flag = false;
    }
}


hamburger_logo.addEventListener('click', hamburger);


