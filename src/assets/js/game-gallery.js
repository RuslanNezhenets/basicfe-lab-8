let small = $('.game-gallery__small img');
let big = $('.game-gallery__big-img');
let counter = 0;

$(document).ready(function () {
	big.hide().attr('src', small.eq(0).attr('src')).show();

	small.click(function(event){
		if(big.attr('src')!==$(this).attr('src')){
			big.hide().attr('src', $(this).attr('src')).show();

			small.each(function(){
				$(this).removeClass('active');
			});

			$(this).addClass('active');

			small.each(function(i){
				if($(this).hasClass('active')){
					counter = i;
				}
			});
		}

		event.preventDefault();
	});
});

let button = $('[data-arrow]');

button.click(function(){
	if($(this).attr('data-arrow') === "left"){
		counter--;
		if(counter < 0)
			counter = small.length - 1;
	}
	else if($(this).attr('data-arrow') === "right"){
		counter++;
		if(counter == small.length)
			counter = 0;
	}

	console.log(counter);

	big.hide().attr('src', small.eq(counter).attr('src')).show();

	small.each(function(){
		$(this).removeClass('active');
	});

	small.eq(counter).addClass('active');
});