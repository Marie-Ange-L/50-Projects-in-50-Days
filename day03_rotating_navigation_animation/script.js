const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", (event) => container.classList.add("show-nav"));

close.addEventListener("click", () => container.classList.remove("show-nav"));
