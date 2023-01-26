let currentRating = 0;
let rated = false;

function rate(rating) {
  if(rated) return;
  currentRating = rating;
  rated = true;
  let stars = document.querySelectorAll(".rating-star");
  for (let i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].classList.add("selected");
    } else {
      stars[i].classList.remove("selected");
    }
  }
  document.querySelector("#rating-text").innerHTML = "Your rating: " + rating;
}
