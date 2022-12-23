grid = document.querySelector('.grid');
for(i = 0; i < 16; i++){
    const div = document.createElement('div');
    div.setAttribute('style', 'margin: auto')
    div.textContent = 'Hello';
    grid.appendChild(div);
}