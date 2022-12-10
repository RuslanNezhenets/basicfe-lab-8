let counter = 0;
let games = $('#small-slider .gameList__games');
let buttons = $('.gameList__nav-link');

//Действия при загрузке сайта
games.each(function(index){
	let game = $(this);
	game.hide();
	if(index == counter)
		game.show();

	buttons.each(function(){
		let button = $(this);

		if(button.text() == '<' & counter == 0)
			button.addClass('inactive');
		if(button.text() == '>' & counter == games.length - 5)
			button.addClass('inactive');
	});
});


//Обработчик клика по кнопке
buttons.click(function(event){
	event.preventDefault();
	let button = $(this);

	//Удаление статуса "неактивный" у обеих кнопок
	buttons.each(function(){
		$(this).removeClass('inactive');
	});


	//Переход на новый сборник игр
	if(button.text() == '<')
		counter -= 1;
	else if(button.text() == '>')
		counter += 1;

	//Добавление статуса "неактивный" если нужно
	if(button.text() == '<' & counter == 0)
		button.addClass('inactive');
	if(button.text() == '>' & counter == games.length - 1)
		button.addClass('inactive');

	//Вывести нужные игры
	games.each(function(index){
		let game = $(this);
		game.hide();

		if(index == counter)
			game.fadeIn(300);
	});
});