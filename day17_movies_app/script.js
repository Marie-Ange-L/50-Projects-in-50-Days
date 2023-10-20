const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=43e8596d7a88c6c6eb2fbb1127ffc376&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=43e8596d7a88c6c6eb2fbb1127ffc376&query=""`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
	const response = await fetch(url);
	const data = await response.json();

	showMovies(data.results);
}

function showMovies(movies) {
	main.innerHTML = "";

	function limit(string = "", limit = 0) {
		return string.substring(0, limit);
	}

	movies.forEach((movie) => {
		const { id, title, poster_path, vote_average, overview } = movie;
		const movieEl = document.createElement("div");
		movieEl.classList.add("movie");
		movieEl.innerHTML = `            
				<img
					src="${IMG_PATH + poster_path}"
					alt="${title}"
				/>
				<div class="movie-info">
					<h3>${title}</h3>
					<span class="${getClassByRate(vote_average)}">${vote_average}</span>
				</div>
				<div class="overview">
					<h3>${title}</h3>
					<p><span>Overview:</span><br> ${truncateString(overview)}</p>
                    <a href="https://www.themoviedb.org/movie/${id}" target="_blank" alt="${title} on TMDB.org (new tab)">View more on TMDB</a>
				</div>			
        `;

		main.appendChild(movieEl);
	});
}

function truncateString(overview, limit = 250) {
	if (overview.length > limit) {
		return overview.substring(0, limit) + "(...)";
	} else {
		return overview;
	}
}

function getClassByRate(vote) {
	if (vote >= 8) {
		return "green";
	} else if (vote >= 5) {
		return "orange";
	} else {
		return "red";
	}
}

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const searchTerm = search.value;

	if (searchTerm && searchTerm !== "") {
		getMovies(SEARCH_API + searchTerm);
		search.value = "";
	} else {
		window.location.reload();
	}
});
