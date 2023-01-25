// JavaScript code for rating system

// Get the rating elements
const ratingElements = document.querySelectorAll('.rating');

// Add event listener for when a rating is clicked
ratingElements.forEach(element => {
    element.addEventListener('click', (event) => {
        const clickedRating = event.target;
        const ratingValue = clickedRating.getAttribute('data-value');
        
        // Remove active class from all ratings
        ratingElements.forEach(element => {
            element.classList.remove('active');
        });
        
        // Add active class to clicked rating
        clickedRating.classList.add('active');
        
        // Update the rating value
        document.querySelector('.rating-value').innerHTML = ratingValue;
    });
});
