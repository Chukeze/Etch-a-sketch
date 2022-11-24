
const create = (tag = "div", options = {}, children = []) => {
    const node = Object.assign(document.createElement(tag), options);
    if(children.length) node.append(...children);
    return node;
}
let penColor = "#000000";
let boardSize = 16;
const board = document.querySelector('.board');

const createGrid = (length = boardSize) => {
    [...board.children].forEach(el => el.remove());
    board.style.setProperty("--repeat", length);
    board.append(
      ...Array.from({length: length ** 2}, () => (length > 100) ? null : document.createElement("div"))
    );
}

const hex2rgba = (hex, alpha = 1) =>{
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
};
document.querySelector('#board-size').addEventListener('change', (e) =>{
    boardSize = e.target.value;
    createGrid(boardSize);
}, {passive: true});

document.querySelector('#color-picker').addEventListener('change', (e) => {
    penColor = e.target.value;
}, {passive: true});

document.querySelector('#reset').addEventListener('click', () => {
    [...board.children].forEach(el => el.remove());
    createGrid()
})
/*document.querySelector('#shade').addEventListener('click',(e)=>{
    if(!e.target.matches(".board > *")) return;
    [...board.children].forEach(el => el.id = 'shading');
    let alpha = 0;
    let ink = document.querySelector('#color-picker').value;
    hex2rgba(ink,...alpha++);
}, {passive: true})
let clicked = false;*/
document.querySelector(".board").addEventListener("mouseover", e => {
  if(!e.target.matches(".board > *")) return;
  e.target.style.setProperty("--bg-color", penColor);
}, {passive: true})

createGrid();
