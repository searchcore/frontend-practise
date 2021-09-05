let scroll = document.getElementById("scroll");

scroll.addEventListener("click", () => {
	let scrollLen = document.getElementById("home").offsetHeight;
	window.scrollTo({ top: scrollLen, behavior: "smooth" })
})