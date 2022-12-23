grid = document.querySelector('.grid');
dimensions = 16;
size = '50px'
grid.setAttribute('style', `grid-template-rows: repeat(${dimensions}, ${size}); grid-template-columns: repeat(${dimensions},${size})`)
for(i = 0; i < dimensions * dimensions; i++){
    const div = document.createElement('div');
    div.setAttribute('style', 'margin: auto')
    div.textContent = 'Hello';
    grid.appendChild(div);
}