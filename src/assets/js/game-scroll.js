//Обработка прокручивание страницы
$(document).ready(function(){
	if($('.game__right').length > 0 && window.screen.width > 575){
		$('.mainHeader__inner').addClass('mainHeader__inner--border');

	    var $element = $('.game__descriptons');
	    let scroll = $('.game__right').offset().top + $('.game__right').height();

	    let offset = $element.offset().top + $element.height();
	  	let top = offset - $('.game__right').height();
	  	let header = $('.header__inner').height() + $('.mainHeader').height() + $('.game__title').height(); 

	  	CheckScroll();

		$(window).scroll(function() {
			CheckScroll();
		});

		function CheckScroll(){
			if($(window).scrollTop() > 0)
				$('.mainHeader__inner').removeClass('mainHeader__inner--border');
			else
				$('.mainHeader__inner').addClass('mainHeader__inner--border');

			if(scroll < offset) {
				$('.game__right').css('position', 'fixed');
				$('.game__right').css('top', header);
				scroll = $('.game__right').offset().top + $('.game__right').height();
			}
			else{
				$('.game__right').css('position', 'absolute');
				$('.game__right').css('top', top);

				if($(window).scrollTop() + $(window).height() < offset + $('.game__title').height()){
					$('.game__right').css('position', 'fixed');
					$('.game__right').css('top', header);
					scroll = $('.game__right').offset().top + $('.game__right').height();
				}
			}
		}
	}
});