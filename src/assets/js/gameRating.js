let text = $('.game__title').text();

let settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://imdb8.p.rapidapi.com/auto-complete?q=${text}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "085aa99e18msh63588a047e58c8ap1313a5jsnd567033c36aa"
	}
};

let id;

$.ajax(settings).done(function(response) {
	id = response.d[0].id;
});


setTimeout(function(){
	settings = {
		"async": true,
		"crossDomain": true,
		"url": `https://imdb8.p.rapidapi.com/title/get-reviews?tconst=${id}&currentCountry=US&purchaseCountry=US`,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "imdb8.p.rapidapi.com",
			"x-rapidapi-key": "085aa99e18msh63588a047e58c8ap1313a5jsnd567033c36aa"
		}
	};

	let rating;

	$.ajax(settings).done(function (response) {
		rating = response.imdbrating.rating;
		$('.game__rating__grade-grade').eq(0).text(rating);
	});
}, 1000);



const modalBtn = $('[data-modal]');
const body = $(document.body);
const modalClose = $('.modal__close')
const modal = $('.modal')

modalBtn.each(function(){
	$(this).click(function(){
		let modalId = $(this).attr('data-modal');
		let modal = $(`#${modalId}`);
		let modalContent = $(modal).find('.modal__content');

		modalContent.click(function(event){
			event.stopPropagation();
		});

		modal.addClass('show');
		body.addClass('no-scroll');

		setTimeout(() => {
			modalContent.css('transform', 'none');
			modalContent.css('opacity', '1');
		}, 1);
	});
});


modalClose.each(function(){
	$(this).click(function(event){
		let currentModal = event.currentTarget.closest('.modal');

		closeModal(currentModal);
	});
});

modal.each(function(){
	$(this).click(function(event){
		let currentModal = event.currentTarget;

		closeModal(currentModal);
	});
});

function closeModal(currentModal){
	let modalContent = $(`.modal__content`);
	modalContent.removeAttr('style');

	setTimeout(() => {
		$(currentModal).removeClass('show');
		body.removeClass('no-scroll');
	}, 200);
}



for(let i = 1; i <= 10; i++){
	let star = $(`<div class='modal__content-star' data-star = ${i}></div>`)
	.append(`<svg class="modal__content-icon small"><use xlink:href="#empty_star"></use></svg>`);
	$('.modal__content__stars').append(star);
}

let stars = $('[data-star]');

stars.mouseout(function(){
	let id = $(this).attr('data-star');

	stars.each(function(){
		$(this).find('use').attr('xlink:href', '#empty_star');
	});
	
	for(let i = 0; i < id; i++){
		stars.eq(i).find('use').attr('xlink:href', '#star');
	}
});

stars.click(function(){
	let id = $(this).attr('data-star');
	if($('.modal__content__counter').text() === '')
		$('.modal__content__btn').addClass('active');

	$('.modal__content__counter').text(id);

	stars.each(function(){
		$(this).find('use').attr('xlink:href', '#empty_star');
	});
	
	for(let i = 0; i < id; i++){
		stars.eq(i).find('use').attr('xlink:href', '#star');
	}

	if(id == 1)
		id = '05';
	else
		id = (id/2) * 10;

	$('.modal__content__star').css('transform', `scale(1.${id})`);
});


(function(){
    //Сохраняем ссылку на стандартный метод jQuery
    var originalAddClassMethod = jQuery.fn.addClass;
    //Переопределяем
    $.fn.addClass = function(){
        var result = originalAddClassMethod.apply(this, arguments);
        //Инициализируем событие смены класса
        $(this).trigger('cssClassChanged');
        return result;
    }
})();

$(function(){
    $(".modal__content__btn").bind('cssClassChanged', function(){ 
        $(".modal__content__btn.active").click(function(){
        	$('[data-modal] .game__rating__grade-grade').text($('.modal__content__counter').text());
        	$('[data-modal] .game__rating__grade-number').text("/10");
        	$('[data-modal] .game__rating__grade-img').find('use').attr('xlink:href', '#star');

        	
        	if($('.modal__content').find('.modal__content__btn--delete').length === 0){
				let btn = $(`<div class="modal__content__btn modal__content__btn--delete">Удалить рейтинг</div>`)
				$('.modal__content').append(btn);

				btn.click(function(){
					$('[data-modal] .game__rating__grade-grade').text("");
        			$('[data-modal] .game__rating__grade-number').text("Оценить");
        			$('[data-modal] .game__rating__grade-img').find('use').attr('xlink:href', '#empty_star');
        			$('.modal__content__btn').removeClass('active');
        			$('.modal__content__counter').text("");

        			btn.remove();
        			stars.each(function(){
						$(this).find('use').attr('xlink:href', '#empty_star');
					});

        			closeModal($('.modal'));
				});
        	}
        	
        	closeModal($('.modal'));
        });
    });
});
