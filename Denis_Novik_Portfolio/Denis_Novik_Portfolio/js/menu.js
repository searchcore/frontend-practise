document.addEventListener("DOMContentLoaded", () => {

	const menuButton = document.getElementById("menu-btn");
	const header = document.getElementById("header");

	menuButton.addEventListener("click", () => {
		header.classList.toggle("_show-menu");
	});
});