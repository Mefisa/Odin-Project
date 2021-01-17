let SIZE = 100;
const CONTAINER = '#container';
const CLEARBTN = '#clearButton';
const MODE = '#mode';



const container = document.querySelector(CONTAINER);
const mode = document.querySelector(MODE);
const body = document.querySelector('body');
let erase = true;

/* ACTIVATE/DEACTIVE DRAWING */
function toggleDraw(){
    erase = !erase;
    let text = 'Click do toggle mode! Mode: ' + (erase ? 'Erase' : 'Draw');
    mode.textContent = text;
}


/* CLEAR */
function clear(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    SIZE = parseInt(prompt("Please enter desired grid width: ", "10"));
    SIZE = isNaN(SIZE)? 10: SIZE;
    drawBoxes();
}

const clearbtn = document.querySelector(CLEARBTN);
clearbtn.addEventListener('click', clear);

/* INITIALIZATION */
// hover
function onHover(e){
    e.target.style['background-color'] = erase ? 'white' : 'black'; 
}

// adds one box
function addbox(){
    let box = document.createElement('div');
        box.classList.add('box');
        box.style['width'] = 100/SIZE + "%";
        box.style['height'] = 100/SIZE + "%";
        box.addEventListener('mouseover', onHover);
        container.appendChild(box);
}

// adds all the boxes
function drawBoxes(){
    for (let i=0; i < SIZE; i++){
        for (let j=0; j < SIZE; j++){
            addbox();
        }
    }
}

function init(){
    body.addEventListener('click', toggleDraw);
    mode.textContent = 'Click do toggle mode! Mode: Erase';
}

init();
drawBoxes();




