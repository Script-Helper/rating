var ratingInputs = document.querySelectorAll('.rating-input');
var ratingGrades = document.querySelectorAll('.rating-grade');
var ratingProgress = document.querySelectorAll('.rating-progress');
var ratedCaption = document.querySelector('.rated-caption');
var totalRating = document.querySelector('.total-rating .total');
var averageRating = document.querySelector('.average-rating span');

var totalRatings = 0;
var totalPoints = 0;
var average = 0;

// Add event listener for each rating input
ratingInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        var rate = this.value;
        totalRatings++;
        totalPoints += parseInt(rate);
        average = totalPoints / totalRatings;
        average = average.toFixed(1);
        
        // Update the average rating
        averageRating.innerHTML = average;
        
        // Update the total rating
        totalRating.innerHTML = totalRatings;
        
        // Update the rating progress
        updateRatingProgress(rate);
        
        // Show the rated caption
        ratedCaption.classList.remove('hidden');
    });
});

function updateRatingProgress(rate) {
    ratingProgress.forEach(function(progress) {
        var progressRate = progress.getAttribute('data-rate');
        var progressText = progress.querySelector('.progress-bar');
        
        if (progressRate == rate) {
            var currentText = progress.getAttribute('data-text');
            var newText = parseInt(currentText) + 1;
            progress.setAttribute('data-text', newText);
            progressText.style.width = (newText / totalRatings) * 100 + '%';
        }
    });
}
