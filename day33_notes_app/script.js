const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
	notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
	const note = document.createElement("div");
	note.classList.add("note");
	note.innerHTML = `<div class="tools">
			<button class="edit"><i class="fas ${
				text ? "fa-edit" : "fa-check"
			}"></i></button>
			<button class="delete"><i class="fas fa-trash"></i></button>
		</div>
		<div>
			<div class="main ${text ? "" : "hidden"}"></div>
			<textarea class="${text ? "hidden" : ""}"></textarea>
		</div>`;

	const editBtn = note.querySelector(".edit");
	const deleteBtn = note.querySelector(".delete");
	const main = note.querySelector(".main");
	const textArea = note.querySelector("textarea");

	textArea.value = text;
	main.innerHTML = marked(text);

	deleteBtn.addEventListener("click", () => {
		const response = confirm("Are you sure you want to delete this note?");
		if (response) {
			note.remove();
			updateLS();
		} else {
		}
	});

	// original version
	// let editIsClicked = false;

	// editBtn.addEventListener("click", () => {
	// 	const icon = editBtn.querySelector("i");

	// 	main.classList.toggle("hidden");
	// 	textArea.classList.toggle("hidden");

	// 	if (icon.classList.contains("fa-check")) {
	// 		icon.classList.replace("fa-check", "fa-edit");
	// 		icon.style.color = "#f9f9f9";
	// 	} else {
	// 		icon.classList.replace("fa-edit", "fa-check");
	// 		icon.style.color = "fff";
	// 	}
	// });

	// simplified version:  the ternary conditional expression simplifies the icon change logic by toggling the class and color based on whether the "fa-check" class is present
	editBtn.addEventListener("click", () => {
		const icon = editBtn.querySelector("i");
		main.classList.toggle("hidden");
		textArea.classList.toggle("hidden");
		icon.classList.toggle("fa-check");
		icon.classList.toggle("fa-edit");
		icon.style.color = icon.classList.contains("fa-check") ? "#f9f9f9" : "fff";
	});

	textArea.addEventListener("input", (event) => {
		const { value } = event.target;
		main.innerHTML = marked(value);

		updateLS();
	});

	document.body.appendChild(note);
}

function updateLS() {
	const notesText = document.querySelectorAll("textarea");
	const notes = [];

	notesText.forEach((note) => notes.push(note.value));

	localStorage.setItem("notes", JSON.stringify(notes));
}
