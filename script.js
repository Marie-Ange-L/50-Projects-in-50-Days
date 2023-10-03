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

	const percentage = (totalProjects / 50) * 100;

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
