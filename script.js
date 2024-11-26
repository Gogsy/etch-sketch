const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');

// funkcija za izradu grida...
function createGrid(size) {
   
    container.innerHTML = '';
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    
    const totalDivs = size * size;
    for (let i = 0; i < totalDivs; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

// postavljanje grida
createGrid(16);

// event listen
resizeButton.addEventListener('click', () => {
    let newSize = parseInt(prompt('veličina mreže (1-100):'));
    if (newSize >= 1 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Molimo unesite broj između 1 i 100.');
    }
});