const panel = document.getElementById("panel");
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.getElementById("send");
let selectedRating = "Satisfied";

// ratingsContainer.addEventListener("click", (e) => {
// 	if (e.target.parentNode.classList.contains("rating")) {
// 		removeActive();
// 		e.target.parentNode.classList.add("active");
// 		selectedRating = e.target.nextElementSibling.innerHTML;
// 	}
// });
// Edited original because it seems odd to not be able to click the whole block
// This modification uses e.target.closest(".rating") to find the closest ancestor with the class "rating" when a click event occurs. This ensures that the entire rating div is selected, and the "active" class is added to it.

ratingsContainer.addEventListener("click", (e) => {
	const clickedRating = e.target.closest(".rating");
	if (clickedRating) {
		removeActive();
		clickedRating.classList.add("active");
		selectedRating = clickedRating.querySelector("small").innerHTML;
	}
});

sendBtn.addEventListener("click", (e) => {
	panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActive() {
	for (let i = 0; i < ratings.length; i++) {
		ratings[i].classList.remove("active");
	}
}
