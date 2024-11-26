const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');

function createGrid(size) {
    container.innerHTML = '';
    const squareSize = Math.min(container.offsetWidth / size, container.offsetHeight / size);
    container.style.width = `${squareSize * size}px`;
    container.style.height = `${squareSize * size}px`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#ff4500';
        });
        container.appendChild(square);
    }
}

resizeButton.addEventListener('click', () => {
    let newSize = parseInt(prompt('Grid (1-100):'));
    if (newSize >= 1 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Enter a number between 1 and 100.');
    }
});

createGrid(10);
