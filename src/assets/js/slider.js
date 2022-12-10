const games = document.querySelectorAll('.sliderGame');
const inners = document.querySelectorAll('.content__inner');
let content = document.querySelector('.content');
let id = 0;
let active_game;
let time_interval = 6000;
let Interval;


if($('.slider').length > 0){
	Start();
	$('.mainHeader__link').each(function(){
		if($(this).text() == "Главная")
			$(this).addClass('mainHeader__link--active');
	})
}

function Start(){
	let interval = setInterval(function(){
		switching(games[0]);
	}, time_interval);
	animation(games[0]);
	for(const game of games){
	game.addEventListener('click', () => {
		clearInterval(interval);
			active_game = game;
			activeGame(game);
			interval = setInterval(function(){
				switching(active_game);
			}, time_interval);
		})
	}
}

//Действия при активации игры

function activeGame(game){
	for(const inner of inners)
		inner.classList.remove('show');
	for(const game_ of games){
		game_.classList.remove('active');
		game_.style = `background-image: none`;
	}
	let dataId = game.getAttribute('data-id');
	id = dataId.replace('sliderGame_', '') - 1;
	document.querySelector(`#${dataId}`).classList.add('show');
	game.classList.add('active');
	game.classList.add('scale');
	setTimeout(function(){
		game.classList.remove('scale');
	}, 250)
	animation(game);
}

//Переход на следующую игру

function switching(game){
	if(isNaN(id) === false){
		if(id != 4)
			id++;
		else
			id = 0;
		activeGame(games[id]);
	}
}

// Анимация замены фона

function animation(game){
	clearInterval(Interval);
	let line = 0;
	let text;
	Interval = setInterval(function(){
		text = `background-image: linear-gradient(to right, #363636 ${line}%, #252525 0%)`;
		document.getElementsByClassName('active')[0].style = text;
		line++;
		if(line === 101){
			line = -1;	
			clearInterval(Interval);
			document.getElementsByClassName('active')[0].style = `background-image: none`;
		}
	}, time_interval/102);
}