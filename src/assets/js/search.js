//Проверка локального хранилища на наличие текста для поиска
var yourdata = JSON.parse(localStorage.getItem('data'));
if(yourdata != null){
    search = yourdata;
    Search(search);
    localStorage.clear();
}

if($('.gallery').length > 0){
    $(".search__input").on('keyup paste', function() {
        let search = $(".search__input").val();
        Search(search);
    });
    $('.mainHeader__link').each(function(){
        if($(this).text() == "Все игры")
            $(this).addClass('mainHeader__link--active');
    })
}

function Search(search){
    let bool = false;

    $('.gameList__item').each(function() {
        let game = $(this);
        game.hide();

        let title = game.find('.gameList__item-title').text();

        search = search.toLowerCase();
        if (title.toLowerCase().indexOf(search) != -1){
           game.find('.gameList__item-title').closest('.gameList__item').show();
        }
    });

    //Проверка фильтров
    let arrFilters = [];
    $('.filters__sublink').each(function(){
        if($(this).hasClass('active')){
            arrFilters.push($(this).attr('data-tag'));
        }
    })

    $('.gameList__item').each(function() {
            if($(this).css('display') != 'none'){
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
        }
    });

    $('.gameList__item').each(function() {
        if($(this).css('display') != 'none'){
            bool = true;
        }
    });

    if(bool === false)
        $('.not_found').fadeIn(100);
    else
        $('.not_found').fadeOut(100);
}



//Отправка текста в поиск
$(document).ready(function() {
    $('.search__input').keydown(function(e) {
        if(e.keyCode === 13) {
            localStorage.setItem('data', JSON.stringify($(this).val()));
        }
    });
});