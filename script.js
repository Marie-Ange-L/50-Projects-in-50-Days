// Projects Count & Progress bar

function updateProgress() {
	const projectElements = document.querySelectorAll(".project");
	const totalProjects = projectElements.length;
	const currentDate = new Date();

	const formattedDate = currentDate.toLocaleDateString("en-GB", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const progressTracker = document.getElementById("progress-tracker");

	const percentage = Math.round((totalProjects / 50) * 100);

	const progressText = createProgressText(formattedDate, totalProjects);

	const progressBar = createProgressBar(percentage);

	const backgroundContainer = createBackgroundContainer(
		percentage,
		progressBar
	);

	// Clear the progress tracker and append the new elements
	progressTracker.innerHTML = "";
	progressTracker.appendChild(progressText);
	progressTracker.appendChild(backgroundContainer);
}

function createProgressText(date, totalProjects) {
	const progressText = document.createElement("p");
	progressText.innerHTML = `
        <small>${date}:</small><br>
        As of today, I completed <br>
        <span class="highlight">${totalProjects} projects</span>
    `;
	return progressText;
}

function createProgressBar(percentage) {
	const progressBar = document.createElement("div");
	progressBar.className = "progress-bar";
	progressBar.style.width = percentage + "%";
	return progressBar;
}

function createBackgroundContainer(percentage, progressBar) {
	const backgroundContainer = document.createElement("div");
	backgroundContainer.className = "background-container";

	const percentageText = document.createElement("div");
	percentageText.className = "percentage-text";
	percentageText.innerText = percentage + "%";

	backgroundContainer.appendChild(percentageText);
	backgroundContainer.appendChild(progressBar);
	return backgroundContainer;
}

updateProgress();

// Reload iFrame

document.addEventListener("click", function (event) {
	if (event.target.classList.contains("reload-button")) {
		const iframeId = event.target.getAttribute("data-target");
		const iframe = document.getElementById(iframeId);

		if (iframe) {
			iframe.src = iframe.src;
		}
	}
});

// Scroll Animation

const projects = document.querySelectorAll(".project");

window.addEventListener("scroll", checkProjects);

checkProjects();

function checkProjects() {
	const triggerBottom = (window.innerHeight / 5) * 3.5;
	projects.forEach((project) => {
		const projectTop = project.getBoundingClientRect().top;

		if (projectTop < triggerBottom) {
			project.classList.add("show");
		} else {
			project.classList.remove("show");
		}
	});
}
