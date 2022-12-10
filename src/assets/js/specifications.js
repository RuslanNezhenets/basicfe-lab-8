//Переключение между характеристиками
const specificationsBtn = $(".specifications__nav-btn");
const specificationsItem 	= $(".specifications__item");	

specificationsBtn.each(function(){
	$(this).click(function(){
		let currentBtn = $(this);
		let tabId = currentBtn.attr("data-tab");
		let currentTab = $(tabId);

		if(!currentBtn.hasClass('active')){
			specificationsBtn.each(function(){
				$(this).removeClass('active');
			});
			specificationsItem.each(function(){
				$(this).removeClass('active');
			});
			currentBtn.addClass('active');
			currentTab.addClass('active');
		}
	});
});