var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
	// Создание экземпляра карты и его привязка к контейнеру с
	// заданным id ("map").
	myMap = new ymaps.Map('map', {
		// При инициализации карты обязательно нужно указать
		// её центр и коэффициент масштабирования.
		center: [58.3, 47.1], // Москва
		zoom: 12
	}, {
		searchControlProvider: 'yandex#search'
	});

}