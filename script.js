const maxGridSize = 960;
maxGridSizeString = `${maxGridSize}px`;

container = document.querySelector('.container');
grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);
dimensions = 10;




size = maxGridSize / dimensions;
sizeString = `${size}px`;
grid.setAttribute('style', `display: grid; 
                grid-template-rows: repeat(${dimensions}, ${sizeString}); 
                grid-template-columns: repeat(${dimensions},${sizeString}); 
                justify-items: stretch; 
                align-items: stretch;
                `)
for(i = 0; i < dimensions * dimensions; i++){
    const div = document.createElement('div');
    div.setAttribute('style', 'background: #EEE;');
    div.setAttribute('id', i);
    //div.textContent = 'Hello';
    div.classList.add('grid-item');
    grid.appendChild(div);
    div.addEventListener('mouseover', (event)=>{
        div.setAttribute('style', 'background: black;');
        console.log(event);
    });
}
