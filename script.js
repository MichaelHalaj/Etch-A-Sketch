const maxGridSize = 960;

function changeColor(){

}

container = document.querySelector('.container');
grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);
dimensions = 16;


size = maxGridSize / dimensions;
sizeString = `${size}px`;
grid.setAttribute('style', `display: grid; grid-template-rows: repeat(${dimensions}, ${sizeString}); grid-template-columns: repeat(${dimensions},${sizeString})`)
for(i = 0; i < dimensions * dimensions; i++){
    const div = document.createElement('div');
    div.setAttribute('style', 'margin: auto');
    div.classList.add('grid-item');
    div.textContent = 'Hello';
    grid.appendChild(div);
    div.addEventListener('mouseover', (event)=>{
        
    });
}
