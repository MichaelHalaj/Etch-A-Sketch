const maxGridSize = 960;
maxGridSizeString = `${maxGridSize}px`;

const gridMinLimit = 4;
const gridMaxLimit = 100;
container = document.querySelector('.container');
button = document.querySelector('.input');
grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);


function drawGrid(dimensions){
    size = maxGridSize / dimensions;
    sizeString = `${size}px`;
    grid.setAttribute('style', `display: grid; 
                    grid-template-rows: repeat(${dimensions}, ${sizeString}); 
                    grid-template-columns: repeat(${dimensions},${sizeString}); 
                    justify-items: stretch; 
                    align-items: stretch;`
                    );
    for(i = 0; i < dimensions * dimensions; i++){
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
function dimIsValid(dimensions){
    return dimensions >= gridMinLimit && dimensions <= gridMaxLimit; 
}
button.addEventListener('click', (event)=>{
    dimensions = prompt("Enter size of grid (eg. 16, 32...):");
    if(dimIsValid(dimensions)){
        drawGrid(dimensions);
    }else{
        alert(`Size is invalid! Size must be integer between ${gridMinLimit} and ${gridMaxLimit}.`)
    }
    
})
