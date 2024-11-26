const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');

function createGrid(size) {
    container.innerHTML = '';
    const totalDivs = size * size;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    let squareSize = Math.floor(Math.min(containerWidth / size, containerHeight / size));

    container.style.gridTemplateColumns = `repeat(${size}, ${squareSize}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${squareSize}px)`;

    for (let i = 0; i < totalDivs; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
}

resizeButton.addEventListener('click', () => {
    let newSize = parseInt(prompt('Grid (1-100):'));
    if (newSize >= 1 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('1 i 100.');
    }
});

createGrid(10);
