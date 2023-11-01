const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2000);

function getData() {
	header.innerHTML =
		'<img src="https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?auto=format&fit=crop&q=80&w=2531&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />';
	title.innerHTML = "Lorem ipsum dolor sit amet";
	excerpt.innerHTML =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ab!";
	profile_img.innerHTML =
		'<img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="" />';
	name.innerHTML = "John Doe";
	date.innerHTML = "Oct 08, 2020";

	animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
	animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
