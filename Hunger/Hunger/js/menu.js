document.addEventListener("DOMContentLoaded", () => {
	let menu_btn = document.getElementById("menu_btn");
	let menu = document.getElementById("menu");

	menu_btn.addEventListener("click", () => {
		menu.classList.toggle("page__header-active");
		menu_btn.classList.toggle("_active");
		document.body.classList.toggle("non-scroll");
	});
})