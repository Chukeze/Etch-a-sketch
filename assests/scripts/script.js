let square;
const board = document.querySelector('.board');
const boardScreen = document.createElement('div');
boardScreen.classList.add("screen");
board.appendChild(boardScreen);
function dimensions(a,b){
    return a * b;
}

function createGrid() {
    let size = dimensions(16,16);
    let screenWidth =  boardScreen.offsetWidth / Math.sqrt(size);
    //let findBoardHeight = board.getBoundingClientRect();;
    //let findBoardWidth = board.getBoundingClientRect();
    console.log(Math.sqrt(size))
    for (let index = 0; index < size; index++) {
        square = document.createElement('div');
        square.classList.add('square');
        square.style.height = `${(Math.sqrt(size) * 2)}px`;
        square.style.width = `${(Math.sqrt(size) *2)}px`;
        boardScreen.appendChild(square);
    }
    /*square = document.querySelector('.square');
    let findSquareWidth = square.offsetWidth;
    let findSquareHeight = square.offsetHeight;*/
    boardScreen.style.gridTemplateColumns =  `repeat(${Math.sqrt(size) - 1 }, ${screenWidth}px) 1fr`;
    boardScreen.style.gridTemplateRows = `repeat(${Math.sqrt(size) - 1 }, ${screenWidth }px) 1fr `;
    
//`grid-template: repeat(${(((Math.sqrt(size) / 2),(findBoardHeight.height % screenWidth))/((Math.sqrt(size) / 2),(findBoardHeight.height % screenWidth)))}px) 1fr 1fr 1fr
    /*boardScreen.setAttribute('style', 
        `grid-template-columns: repeat(${size},1fr)`
    );*/
    //boardScreen.setAttribute('style', `grid-template-rows: repeat(${size}, 1fr)`,`grid-template-columns: repeat(${size}, 1fr)`);
}

function fillGrid(){
    createGrid();
    square = document.querySelectorAll('.square');
    square.forEach((unit) =>{
        unit.addEventListener('mouseover', ()=>{
            unit.style.backgroundColor = "black";
        })
    })
}

fillGrid();