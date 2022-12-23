const maxGridSize = 960;
const maxGridSizeString = `${maxGridSize}px`;

const gridMinLimit = 4;
const gridMaxLimit = 100;

const button = document.querySelector('.input');
const container = document.querySelector('.container');

function dimIsValid(dimensions){
    return dimensions >= gridMinLimit && dimensions <= gridMaxLimit; 
}

function drawGrid(dimensions){    
    grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
    size = maxGridSize / dimensions;
    sizeString = `${size}px`;
    grid.setAttribute('style', `display: grid; 
                    grid-template-rows: repeat(${dimensions}, ${sizeString}); 
                    grid-template-columns: repeat(${dimensions},${sizeString}); 
                    justify-items: stretch; 
                    align-items: stretch;`
                    );
    for(let i = 0; i < dimensions * dimensions; i++){
        const div = document.createElement('div');
        div.setAttribute('style', 'background: #EEE;');
        div.setAttribute('id', i);
        div.classList.add('grid-item');
        grid.appendChild(div);
        div.addEventListener('mouseover', (event)=>{
            div.setAttribute('style', 'background: black;');
            console.log(event);
        });
    }
}

function clearGrid(){
    let grid = document.querySelector('.grid');
    container.removeChild(grid);
}
button.addEventListener('click', (event)=>{
    dimensions = prompt("Enter size of grid (eg. 16, 32...):");
    if(dimIsValid(dimensions)){
        drawGrid(dimensions);
    }else{
        alert(`Size is invalid! Size must be integer between ${gridMinLimit} and ${gridMaxLimit}.`)
    }
    
})
