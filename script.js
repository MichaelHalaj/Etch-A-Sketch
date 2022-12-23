const maxGridSize = 960;


grid = document.querySelector('.grid');
dimensions = 16;


size = maxGridSize / dimensions;
sizeString = `${size}px`;
grid.setAttribute('style', `grid-template-rows: repeat(${dimensions}, ${sizeString}); grid-template-columns: repeat(${dimensions},${sizeString})`)
for(i = 0; i < dimensions * dimensions; i++){
    const div = document.createElement('div');
    div.setAttribute('style', 'margin: auto')
    div.textContent = 'Hello';
    grid.appendChild(div);
}