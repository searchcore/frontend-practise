//ya map
setTimeout(function () {
	let mapapi = document.createElement('script');
	mapapi.type = 'text/javascript';
	mapapi.src = 'https://api-maps.yandex.ru/2.1/?apikey=ff64f9d9-e970-45d8-b2cb-80efb7428548&lang=ru_RU&load=Map';
	let div = document.getElementById('map');
	div.after(mapapi);
}, 5000);
setTimeout(function () {
	let mapjs = document.createElement('script');
	mapjs.type = 'text/javascript';
	mapjs.src = './js/map.js';
	let div = document.getElementById('map');
	div.after(mapjs);
}, 7000);

//async style

function asyncCSS(href) {
	var css = document.createElement('link');
	css.rel = "stylesheet";
	css.href = href;
	document.head.appendChild(css);
}

setTimeout(function () {
	asyncCSS("css/style.min.css");
}, 1000);

//scroll


let last_known_scroll_position = 0;
let ticking = false;
let locked = false;

let about = document.getElementById("about");
let team = document.getElementById("team");

let booking = document.getElementById("booking");
let spec = document.getElementById("spec");

let food_menu = document.getElementById("food-menu");
let events = document.getElementById("events");

let menu = document.getElementsByClassName("menu")[0];
let menu_btn = document.getElementById("menu_btn");

function doSomething(scroll_pos) {
	let point1 = getCoords(about).top;
	if (point1 <= scroll_pos) {
		team.id = "bg-team";
		menu.classList.add("color-black");
		menu_btn.classList.add("color-black");
	} else {
		team.id = "team";
		menu.classList.remove("color-black");
		menu_btn.classList.remove("color-black");

	}

	if (getCoords(team).top <= scroll_pos) {
		menu.classList.remove("color-black");
		menu_btn.classList.remove("color-black");
	}

	let point2 = getCoords(booking).top;
	if (point2 <= scroll_pos) {
		spec.id = "bg-spec";
		menu.classList.add("color-black");
		menu_btn.classList.add("color-black");
	} else {
		spec.id = "spec";
	}

	if (getCoords(spec).top <= scroll_pos) {
		menu.classList.remove("color-black");
		menu_btn.classList.remove("color-black");
	}

	let point3 = getCoords(food_menu).top;
	if (point3 <= scroll_pos) {
		events.id = "bg-event";
		menu.classList.add("color-black");
		menu_btn.classList.add("color-black");
	} else {
		events.id = "events";
	}
	if (getCoords(events).top <= scroll_pos) {
		menu.classList.remove("color-black");
		menu_btn.classList.remove("color-black");
	}
	if (getCoords(events).top + events.offsetHeight <= scroll_pos) {
		menu.classList.add("color-black");
		menu_btn.classList.add("color-black");
	}
}

function unlockEvent() {
	locked = false;
}

window.addEventListener('scroll', function (e) {
	if (!locked) {
		if (!ticking) {
			window.requestAnimationFrame(function () {
				last_known_scroll_position = window.scrollY;
				doSomething(last_known_scroll_position)
				setTimeout(unlockEvent, 50);
				locked = true;
				ticking = false;
			});
		}
		ticking = true;
	}
});
function getCoords(elem) {
	let box = elem.getBoundingClientRect();
	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset,
	};
}