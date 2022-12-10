//Сортировка списка фильтров
$('.filters__subnav').each(function(){
   let c = jQuery.makeArray($(this).children('li'));
   c.sort(function (a, b) {
      a = $(a).text();
      b = $(b).text();
      return a < b ? -1 : a > b ? 1 : 0;
    });
   $(c).appendTo($(this));
})


//Выпадение списка фильтров
$(function(){
   $('.filters__item .filters__link').click(function(){
      $(this).toggleClass('rotate');
      $(this).next('.filters__subnav').toggleClass('filters__subnav--active'); 
   });
});


//Фильтр
$(function(){
   let arrFilters = [];
   $('.filters__sublink').click(function(event){
      event.preventDefault();
      tag = $(this).attr('data-tag');

      if($(this).hasClass('active')){
         $(this).removeClass('active');
         let index = $.inArray(tag, arrFilters);
         if(index > -1)
            arrFilters.splice(index, 1);
      }
      else{
         $(this).addClass('active');
         arrFilters.push(tag);
      }

      let bool = false;

      //Просмотр каждой игры
      $('.gameList__item').each(function() {
         let counter = 0;
         let game = $(this);
         game.hide();

         //Проверка каждого фильтра
         arrFilters.forEach(function(item, i, arr){
            //Сравнение фильра с тегом игры
            game.find('.gameList__tag').each(function(){
               if($(this).text() === item){
                  counter++;
               }
            });
         });

         //Совпадение
         if(counter === arrFilters.length){
            game.show();
         }
      });

      //Проверка поля поиска
      let search = $(".search__input").val();

      $('.gameList__item').each(function() {
         if($(this).css('display') != 'none'){

            let game = $(this);
            game.hide();

            let title = game.find('.gameList__item-title').text();

            search = search.toLowerCase();
            if (title.toLowerCase().indexOf(search) != -1){
               game.find('.gameList__item-title').closest('.gameList__item').show();
               bool = true;
            }
         }
      });



      //Результаты не найдены
      if(bool === false)
         $('.not_found').fadeIn(100);
      else
         $('.not_found').fadeOut(100);
   });
});


$('.mini__filters').click(function(){
   if($('.filters').css('display') === 'none'){
      $('.mini__filters').addClass('arrow');
      $('.filters').show();
      $('.games').hide();
      $('header').hide();
      $('footer').hide();
      $('main').css('padding-top', '20px');
   }
});

$('.filters__btn').click(function(){
   $('.mini__filters').removeClass('arrow');
   $('.filters').hide();
   $('.games').show();
   $('header').show();
   $('footer').show();
   $('main').css('padding-top', '150px');

   $('html, body').animate({scrollTop: 0}, 0);
});