const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getData();

filter.addEventListener("input", (event) => filterData(event.target.value));

async function getData() {
	const response = await fetch(
		"https://random-data-api.com/api/v2/users?size=50"
	);
	const data = await response.json();

	//clear results
	result.innerHTML = "";

	data.forEach((user) => {
		const li = document.createElement("li");
		listItems.push(li);
		li.innerHTML = `
        <img src="${user.avatar}" alt="${user.first_name}" />
        <div class="user-info">
            <h4>${user.first_name} ${user.last_name}</h4>
			<p>${user.address.city}, ${user.address.state}</p>
		</div>
        `;
		result.appendChild(li);
	});
}

function filterData(searchTerm) {
	listItems.forEach((item) => {
		if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
			item.classList.remove("hide");
		} else {
			item.classList.add("hide");
		}
	});
}
