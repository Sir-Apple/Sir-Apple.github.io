let previewContainer = document.querySelector('.card-preview');
let previewBox = previewContainer.querySelectorAll('.preview'); 

document.querySelectorAll('.swiper-slide .card').forEach(card => {
    card.onclick = () => {
        previewContainer.style.display = 'flex'; 
        let name = card.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target'); 
            if (name === target) {
                preview.classList.add('active'); 
            } else {
                preview.classList.remove('active'); 
            }
        });
    };
});

// Close button logic
document.querySelectorAll('.close-button span').forEach(closeButton => {
    closeButton.onclick = () => {
        previewContainer.style.display = 'none'; // Hide the preview container when the close button is clicked
        previewBox.forEach(preview => {
            preview.classList.remove('active'); // Remove 'active' from all previews
        });
    };
});