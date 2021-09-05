document.addEventListener("DOMContentLoaded", () => {

	getLanguageText("eng", setLanguageVariables);
	getLanguageText("ru", setLanguageVariables);

	let languages = [];
	let phrases = [];
	let classes;
	let menu_btn_text = [];

	function setLanguageVariables(text) {
		languages.push(text);
		phrases.push(buildPhrasesMap(text));
		classes = buildClasses(text);
		menu_btn_text = [phrases[0].get("lang-button-6-o"), phrases[0].get("lang-button-6-c")];
	}

	let curLang = "eng";

	let changelang_btn = document.getElementById("change-lang");
	let ru_btn_text = document.getElementById("lang-ru");
	let eng_btn_text = document.getElementById("lang-eng");
	let menu_btn = document.getElementById("menu-btn");
	let header = document.getElementById("header");

	menu_btn.addEventListener("click", () => {
		if (header.classList.contains("show-menu")) {
			menu_btn.innerText = menu_btn_text[0];
		} else {
			menu_btn.innerText = menu_btn_text[1];
		}
		header.classList.toggle("show-menu");
	})
	changelang_btn.addEventListener("click", (e) => {
		if (curLang == "ru") {
			curLang = "eng";
			setPageLanguage(classes, phrases[0]);
			menu_btn_text = [phrases[0].get("lang-button-6-o"), phrases[0].get("lang-button-6-c")];
			ru_btn_text.classList.toggle("lang-active");
			eng_btn_text.classList.toggle("lang-active");
		} else {
			curLang = "ru";
			setPageLanguage(classes, phrases[1]);
			menu_btn_text = [phrases[1].get("lang-button-6-o"), phrases[1].get("lang-button-6-c")];
			ru_btn_text.classList.toggle("lang-active");
			eng_btn_text.classList.toggle("lang-active");
		}
	})



})
function getLanguageText(lang, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "./translations/" + lang + ".txt", true);
	xhr.timeout = 1500;
	xhr.responseType = "text";
	xhr.send();

	let lines = [];
	xhr.onload = function () {
		let text = xhr.response;
		let cursor = 0;
		for (let i = 0; i < text.length; i++) {
			if (text.charAt(i) == "\n") {
				lines.push(text.substring(cursor, i));
				cursor = i + 1;
			}
		}

		callback(lines);

	};

	xhr.onerror = function () {
		console.log(`Ошибка соединения`);
	};
}
function buildPhrasesMap(phrases) {
	let phrasesMap = new Map();

	for (let i = 0; i < phrases.length; i++) {
		let singlePhrase = phrases[i];
		let indexOfDivivder = singlePhrase.indexOf("=");
		let className = singlePhrase.substring(0, indexOfDivivder);
		let text = singlePhrase.substring(indexOfDivivder + 1, singlePhrase.length);

		phrasesMap.set(className, text);
	}
	return phrasesMap;
}
function buildClasses(phrases) {
	let array = [];

	for (let i = 0; i < phrases.length; i++) {
		let singlePhrase = phrases[i];
		let indexOfDivivder = singlePhrase.indexOf("=");
		let className = singlePhrase.substring(0, indexOfDivivder);

		array.push(className);
	}
	return array;
}
function setPageLanguage(classes, phrasesMap) {
	for (let i = 0; i < classes.length; i++) {
		let element = document.getElementsByClassName(classes[i])[0];
		if (element == undefined)
			continue;
		element.innerHTML = phrasesMap.get(classes[i]);
	}
}