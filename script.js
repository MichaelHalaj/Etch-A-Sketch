const maxGridSize = 960;


container = document.querySelector('.container');
grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);
dimensions = 10;

//grid.setAttribute('style', 'border: 5px solid black;');


size = maxGridSize / dimensions;
sizeString = `${size}px`;
grid.setAttribute('style', `display: grid; 
                grid-template-rows: repeat(${dimensions}, ${sizeString}); 
                grid-template-columns: repeat(${dimensions},${sizeString}); 
                justify-items: stretch; 
                align-items: stretch;
                border: 5px solid black;
                padding: ${maxGridSize} ${maxGridSize}`)
for(i = 0; i < dimensions * dimensions; i++){
    const div = document.createElement('div');
    div.setAttribute('style', 'margin: auto; background-color: blue;');
    div.setAttribute('id', i);
    //div.textContent = 'Hello';
    div.classList.add('grid-item');
    grid.appendChild(div);
    div.addEventListener('mouseover', (event)=>{
        div.setAttribute('style', 'background: black;');
        console.log(event);
    });
}
