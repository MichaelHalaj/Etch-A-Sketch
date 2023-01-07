const maxGridSize = 500;
const maxGridSizeString = `${maxGridSize}px`;

const gridMinLimit = 4;
const gridMaxLimit = 100;

const button = document.querySelector('.input');
const container = document.querySelector('.container');

function dimIsValid(dimensions){
    return dimensions >= gridMinLimit && dimensions <= gridMaxLimit; 
}

function drawGrid(dimensions){    
    const grid = document.createElement('div');
    //const grid = document.querySelector('.grid');
    grid.classList.add('grid');
    container.appendChild(grid);

    const size = maxGridSize / dimensions;
    const sizeString = `${size}px`;
    grid.setAttribute('style', `display: grid; 
                    grid-template-rows: repeat(${dimensions}, ${sizeString}); 
                    grid-template-columns: repeat(${dimensions},${sizeString}); 
                    justify-items: stretch; 
                    align-items: stretch;
                    background-color: #dc2626b5;
                    border: 12px solid #dc26267e;
                    border-radius: 2%;
                    box-shadow: 0 0 12px rgba(50, 50, 50, 0.7);`
                    );
    for(let i = 0; i < dimensions * dimensions; i++){
        const div = document.createElement('div');
        div.setAttribute('style', 'background: #e5e5e5; border: 1px dotted #a3a3a3');
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
    if(grid){
        container.removeChild(grid);
    }
    return;
    
}
button.addEventListener('click', function(){
    dimensions = prompt("Enter size of grid (eg. 16, 32...):");
    clearGrid();
    if(dimIsValid(dimensions)){
        drawGrid(dimensions);
    }else{
        alert(`Size is invalid! Size must be integer between ${gridMinLimit} and ${gridMaxLimit}.`)
    }   
});
