// Select all figures and create an overlay
const figures = document.querySelectorAll('figure');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Add click event listener to each figure
figures.forEach((figure) => {
    figure.addEventListener('click', () => {
        // Clone the clicked figure
        const clonedFigure = figure.cloneNode(true);
        clonedFigure.classList.add('cloned-figure');

        // Create the close button
        const closeButton = document.createElement('button');
        closeButton.classList.add('close-btn');
        closeButton.textContent = '×'; // The "X" character

        // Append the close button to the cloned figure
        clonedFigure.appendChild(closeButton);

        // Append the cloned figure to the overlay
        overlay.innerHTML = ''; // Clear any previous content
        overlay.appendChild(clonedFigure);

        // Show the overlay
        overlay.style.display = 'block';
        document.body.classList.add('expanding'); // Disable scrolling

        // Close the overlay when the button is clicked
        closeButton.addEventListener('click', (event) => {
            overlay.style.display = 'none'; // Hide overlay
            document.body.classList.remove('expanding'); // Re-enable scrolling
            event.stopPropagation(); // Prevent the click from propagating to the overlay
        });

        // Close the overlay when the overlay itself is clicked
        overlay.onclick = () => {
            overlay.style.display = 'none';
            document.body.classList.remove('expanding');
        };
    });
});
