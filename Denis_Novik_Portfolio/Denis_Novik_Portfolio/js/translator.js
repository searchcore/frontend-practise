document.addEventListener("DOMContentLoaded", () => {
	const changelangButton = document.getElementById("change-lang");

	changelangButton.addEventListener('click', () => {
		if (changelangButton.classList.toggle('_active')) {
			setLang("ru");
		} else {
			setLang("en");
		}
	})
});

async function setLang(lang) {

	let response = await fetch(`./translations/${lang}.json`);

	let translations = await response.json();

	for (classID in translations) {
		const element = document.querySelector(`.${classID}`);
		if (element) {
			element.innerHTML = translations[classID];
		}
	}
}