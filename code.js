let currentRating = 0;

function rate(rating) {
  currentRating = rating;
  let stars = document.querySelectorAll(".star");
  for (let i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].classList.add("selected");
    } else {
      stars[i].classList.remove("selected");
    }
  }
  document.querySelector("#rating-text").innerHTML = "Your rating: " + rating;
}
