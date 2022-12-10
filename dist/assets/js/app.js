/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/authentication.js":
/*!*****************************************!*\
  !*** ./src/assets/js/authentication.js ***!
  \*****************************************/
/***/ (function() {

eval("if($('.authentication').length > 0){\r\n\t$('.mainHeader').remove();\r\n\t$('.footer').remove();\r\n\r\n\t$('.main').css('padding-top', '50px');\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/authentication.js?");

/***/ }),

/***/ "./src/assets/js/filters.js":
/*!**********************************!*\
  !*** ./src/assets/js/filters.js ***!
  \**********************************/
/***/ (function() {

eval("//Сортировка списка фильтров\r\n$('.filters__subnav').each(function(){\r\n   let c = jQuery.makeArray($(this).children('li'));\r\n   c.sort(function (a, b) {\r\n      a = $(a).text();\r\n      b = $(b).text();\r\n      return a < b ? -1 : a > b ? 1 : 0;\r\n    });\r\n   $(c).appendTo($(this));\r\n})\r\n\r\n\r\n//Выпадение списка фильтров\r\n$(function(){\r\n   $('.filters__item .filters__link').click(function(){\r\n      $(this).toggleClass('rotate');\r\n      $(this).next('.filters__subnav').toggleClass('filters__subnav--active'); \r\n   });\r\n});\r\n\r\n\r\n//Фильтр\r\n$(function(){\r\n   let arrFilters = [];\r\n   $('.filters__sublink').click(function(event){\r\n      event.preventDefault();\r\n      tag = $(this).attr('data-tag');\r\n\r\n      if($(this).hasClass('active')){\r\n         $(this).removeClass('active');\r\n         let index = $.inArray(tag, arrFilters);\r\n         if(index > -1)\r\n            arrFilters.splice(index, 1);\r\n      }\r\n      else{\r\n         $(this).addClass('active');\r\n         arrFilters.push(tag);\r\n      }\r\n\r\n      let bool = false;\r\n\r\n      //Просмотр каждой игры\r\n      $('.gameList__item').each(function() {\r\n         let counter = 0;\r\n         let game = $(this);\r\n         game.hide();\r\n\r\n         //Проверка каждого фильтра\r\n         arrFilters.forEach(function(item, i, arr){\r\n            //Сравнение фильра с тегом игры\r\n            game.find('.gameList__tag').each(function(){\r\n               if($(this).text() === item){\r\n                  counter++;\r\n               }\r\n            });\r\n         });\r\n\r\n         //Совпадение\r\n         if(counter === arrFilters.length){\r\n            game.show();\r\n         }\r\n      });\r\n\r\n      //Проверка поля поиска\r\n      let search = $(\".search__input\").val();\r\n\r\n      $('.gameList__item').each(function() {\r\n         if($(this).css('display') != 'none'){\r\n\r\n            let game = $(this);\r\n            game.hide();\r\n\r\n            let title = game.find('.gameList__item-title').text();\r\n\r\n            search = search.toLowerCase();\r\n            if (title.toLowerCase().indexOf(search) != -1){\r\n               game.find('.gameList__item-title').closest('.gameList__item').show();\r\n               bool = true;\r\n            }\r\n         }\r\n      });\r\n\r\n\r\n\r\n      //Результаты не найдены\r\n      if(bool === false)\r\n         $('.not_found').fadeIn(100);\r\n      else\r\n         $('.not_found').fadeOut(100);\r\n   });\r\n});\r\n\r\n\r\n$('.mini__filters').click(function(){\r\n   if($('.filters').css('display') === 'none'){\r\n      $('.mini__filters').addClass('arrow');\r\n      $('.filters').show();\r\n      $('.games').hide();\r\n      $('header').hide();\r\n      $('footer').hide();\r\n      $('main').css('padding-top', '20px');\r\n   }\r\n});\r\n\r\n$('.filters__btn').click(function(){\r\n   $('.mini__filters').removeClass('arrow');\r\n   $('.filters').hide();\r\n   $('.games').show();\r\n   $('header').show();\r\n   $('footer').show();\r\n   $('main').css('padding-top', '150px');\r\n\r\n   $('html, body').animate({scrollTop: 0}, 0);\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/filters.js?");

/***/ }),

/***/ "./src/assets/js/game-gallery.js":
/*!***************************************!*\
  !*** ./src/assets/js/game-gallery.js ***!
  \***************************************/
/***/ (function() {

eval("let small = $('.game-gallery__small img');\r\nlet big = $('.game-gallery__big-img');\r\nlet counter = 0;\r\n\r\n$(document).ready(function () {\r\n\tbig.hide().attr('src', small.eq(0).attr('src')).show();\r\n\r\n\tsmall.click(function(event){\r\n\t\tif(big.attr('src')!==$(this).attr('src')){\r\n\t\t\tbig.hide().attr('src', $(this).attr('src')).show();\r\n\r\n\t\t\tsmall.each(function(){\r\n\t\t\t\t$(this).removeClass('active');\r\n\t\t\t});\r\n\r\n\t\t\t$(this).addClass('active');\r\n\r\n\t\t\tsmall.each(function(i){\r\n\t\t\t\tif($(this).hasClass('active')){\r\n\t\t\t\t\tcounter = i;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tevent.preventDefault();\r\n\t});\r\n});\r\n\r\nlet button = $('[data-arrow]');\r\n\r\nbutton.click(function(){\r\n\tif($(this).attr('data-arrow') === \"left\"){\r\n\t\tcounter--;\r\n\t\tif(counter < 0)\r\n\t\t\tcounter = small.length - 1;\r\n\t}\r\n\telse if($(this).attr('data-arrow') === \"right\"){\r\n\t\tcounter++;\r\n\t\tif(counter == small.length)\r\n\t\t\tcounter = 0;\r\n\t}\r\n\r\n\tconsole.log(counter);\r\n\r\n\tbig.hide().attr('src', small.eq(counter).attr('src')).show();\r\n\r\n\tsmall.each(function(){\r\n\t\t$(this).removeClass('active');\r\n\t});\r\n\r\n\tsmall.eq(counter).addClass('active');\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/game-gallery.js?");

/***/ }),

/***/ "./src/assets/js/game-scroll.js":
/*!**************************************!*\
  !*** ./src/assets/js/game-scroll.js ***!
  \**************************************/
/***/ (function() {

eval("//Обработка прокручивание страницы\r\n$(document).ready(function(){\r\n\tif($('.game__right').length > 0 && window.screen.width > 575){\r\n\t\t$('.mainHeader__inner').addClass('mainHeader__inner--border');\r\n\r\n\t    var $element = $('.game__descriptons');\r\n\t    let scroll = $('.game__right').offset().top + $('.game__right').height();\r\n\r\n\t    let offset = $element.offset().top + $element.height();\r\n\t  \tlet top = offset - $('.game__right').height();\r\n\t  \tlet header = $('.header__inner').height() + $('.mainHeader').height() + $('.game__title').height(); \r\n\r\n\t  \tCheckScroll();\r\n\r\n\t\t$(window).scroll(function() {\r\n\t\t\tCheckScroll();\r\n\t\t});\r\n\r\n\t\tfunction CheckScroll(){\r\n\t\t\tif($(window).scrollTop() > 0)\r\n\t\t\t\t$('.mainHeader__inner').removeClass('mainHeader__inner--border');\r\n\t\t\telse\r\n\t\t\t\t$('.mainHeader__inner').addClass('mainHeader__inner--border');\r\n\r\n\t\t\tif(scroll < offset) {\r\n\t\t\t\t$('.game__right').css('position', 'fixed');\r\n\t\t\t\t$('.game__right').css('top', header);\r\n\t\t\t\tscroll = $('.game__right').offset().top + $('.game__right').height();\r\n\t\t\t}\r\n\t\t\telse{\r\n\t\t\t\t$('.game__right').css('position', 'absolute');\r\n\t\t\t\t$('.game__right').css('top', top);\r\n\r\n\t\t\t\tif($(window).scrollTop() + $(window).height() < offset + $('.game__title').height()){\r\n\t\t\t\t\t$('.game__right').css('position', 'fixed');\r\n\t\t\t\t\t$('.game__right').css('top', header);\r\n\t\t\t\t\tscroll = $('.game__right').offset().top + $('.game__right').height();\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/game-scroll.js?");

/***/ }),

/***/ "./src/assets/js/gameRating.js":
/*!*************************************!*\
  !*** ./src/assets/js/gameRating.js ***!
  \*************************************/
/***/ (function() {

eval("let text = $('.game__title').text();\r\n\r\nlet settings = {\r\n\t\"async\": true,\r\n\t\"crossDomain\": true,\r\n\t\"url\": `https://imdb8.p.rapidapi.com/auto-complete?q=${text}`,\r\n\t\"method\": \"GET\",\r\n\t\"headers\": {\r\n\t\t\"x-rapidapi-host\": \"imdb8.p.rapidapi.com\",\r\n\t\t\"x-rapidapi-key\": \"085aa99e18msh63588a047e58c8ap1313a5jsnd567033c36aa\"\r\n\t}\r\n};\r\n\r\nlet id;\r\n\r\n$.ajax(settings).done(function(response) {\r\n\tid = response.d[0].id;\r\n});\r\n\r\n\r\nsetTimeout(function(){\r\n\tsettings = {\r\n\t\t\"async\": true,\r\n\t\t\"crossDomain\": true,\r\n\t\t\"url\": `https://imdb8.p.rapidapi.com/title/get-reviews?tconst=${id}&currentCountry=US&purchaseCountry=US`,\r\n\t\t\"method\": \"GET\",\r\n\t\t\"headers\": {\r\n\t\t\t\"x-rapidapi-host\": \"imdb8.p.rapidapi.com\",\r\n\t\t\t\"x-rapidapi-key\": \"085aa99e18msh63588a047e58c8ap1313a5jsnd567033c36aa\"\r\n\t\t}\r\n\t};\r\n\r\n\tlet rating;\r\n\r\n\t$.ajax(settings).done(function (response) {\r\n\t\trating = response.imdbrating.rating;\r\n\t\t$('.game__rating__grade-grade').eq(0).text(rating);\r\n\t});\r\n}, 1000);\r\n\r\n\r\n\r\nconst modalBtn = $('[data-modal]');\r\nconst body = $(document.body);\r\nconst modalClose = $('.modal__close')\r\nconst modal = $('.modal')\r\n\r\nmodalBtn.each(function(){\r\n\t$(this).click(function(){\r\n\t\tlet modalId = $(this).attr('data-modal');\r\n\t\tlet modal = $(`#${modalId}`);\r\n\t\tlet modalContent = $(modal).find('.modal__content');\r\n\r\n\t\tmodalContent.click(function(event){\r\n\t\t\tevent.stopPropagation();\r\n\t\t});\r\n\r\n\t\tmodal.addClass('show');\r\n\t\tbody.addClass('no-scroll');\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\tmodalContent.css('transform', 'none');\r\n\t\t\tmodalContent.css('opacity', '1');\r\n\t\t}, 1);\r\n\t});\r\n});\r\n\r\n\r\nmodalClose.each(function(){\r\n\t$(this).click(function(event){\r\n\t\tlet currentModal = event.currentTarget.closest('.modal');\r\n\r\n\t\tcloseModal(currentModal);\r\n\t});\r\n});\r\n\r\nmodal.each(function(){\r\n\t$(this).click(function(event){\r\n\t\tlet currentModal = event.currentTarget;\r\n\r\n\t\tcloseModal(currentModal);\r\n\t});\r\n});\r\n\r\nfunction closeModal(currentModal){\r\n\tlet modalContent = $(`.modal__content`);\r\n\tmodalContent.removeAttr('style');\r\n\r\n\tsetTimeout(() => {\r\n\t\t$(currentModal).removeClass('show');\r\n\t\tbody.removeClass('no-scroll');\r\n\t}, 200);\r\n}\r\n\r\n\r\n\r\nfor(let i = 1; i <= 10; i++){\r\n\tlet star = $(`<div class='modal__content-star' data-star = ${i}></div>`)\r\n\t.append(`<svg class=\"modal__content-icon small\"><use xlink:href=\"#empty_star\"></use></svg>`);\r\n\t$('.modal__content__stars').append(star);\r\n}\r\n\r\nlet stars = $('[data-star]');\r\n\r\nstars.mouseout(function(){\r\n\tlet id = $(this).attr('data-star');\r\n\r\n\tstars.each(function(){\r\n\t\t$(this).find('use').attr('xlink:href', '#empty_star');\r\n\t});\r\n\t\r\n\tfor(let i = 0; i < id; i++){\r\n\t\tstars.eq(i).find('use').attr('xlink:href', '#star');\r\n\t}\r\n});\r\n\r\nstars.click(function(){\r\n\tlet id = $(this).attr('data-star');\r\n\tif($('.modal__content__counter').text() === '')\r\n\t\t$('.modal__content__btn').addClass('active');\r\n\r\n\t$('.modal__content__counter').text(id);\r\n\r\n\tstars.each(function(){\r\n\t\t$(this).find('use').attr('xlink:href', '#empty_star');\r\n\t});\r\n\t\r\n\tfor(let i = 0; i < id; i++){\r\n\t\tstars.eq(i).find('use').attr('xlink:href', '#star');\r\n\t}\r\n\r\n\tif(id == 1)\r\n\t\tid = '05';\r\n\telse\r\n\t\tid = (id/2) * 10;\r\n\r\n\t$('.modal__content__star').css('transform', `scale(1.${id})`);\r\n});\r\n\r\n\r\n(function(){\r\n    //Сохраняем ссылку на стандартный метод jQuery\r\n    var originalAddClassMethod = jQuery.fn.addClass;\r\n    //Переопределяем\r\n    $.fn.addClass = function(){\r\n        var result = originalAddClassMethod.apply(this, arguments);\r\n        //Инициализируем событие смены класса\r\n        $(this).trigger('cssClassChanged');\r\n        return result;\r\n    }\r\n})();\r\n\r\n$(function(){\r\n    $(\".modal__content__btn\").bind('cssClassChanged', function(){ \r\n        $(\".modal__content__btn.active\").click(function(){\r\n        \t$('[data-modal] .game__rating__grade-grade').text($('.modal__content__counter').text());\r\n        \t$('[data-modal] .game__rating__grade-number').text(\"/10\");\r\n        \t$('[data-modal] .game__rating__grade-img').find('use').attr('xlink:href', '#star');\r\n\r\n        \t\r\n        \tif($('.modal__content').find('.modal__content__btn--delete').length === 0){\r\n\t\t\t\tlet btn = $(`<div class=\"modal__content__btn modal__content__btn--delete\">Удалить рейтинг</div>`)\r\n\t\t\t\t$('.modal__content').append(btn);\r\n\r\n\t\t\t\tbtn.click(function(){\r\n\t\t\t\t\t$('[data-modal] .game__rating__grade-grade').text(\"\");\r\n        \t\t\t$('[data-modal] .game__rating__grade-number').text(\"Оценить\");\r\n        \t\t\t$('[data-modal] .game__rating__grade-img').find('use').attr('xlink:href', '#empty_star');\r\n        \t\t\t$('.modal__content__btn').removeClass('active');\r\n        \t\t\t$('.modal__content__counter').text(\"\");\r\n\r\n        \t\t\tbtn.remove();\r\n        \t\t\tstars.each(function(){\r\n\t\t\t\t\t\t$(this).find('use').attr('xlink:href', '#empty_star');\r\n\t\t\t\t\t});\r\n\r\n        \t\t\tcloseModal($('.modal'));\r\n\t\t\t\t});\r\n        \t}\r\n        \t\r\n        \tcloseModal($('.modal'));\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/gameRating.js?");

/***/ }),

/***/ "./src/assets/js/search.js":
/*!*********************************!*\
  !*** ./src/assets/js/search.js ***!
  \*********************************/
/***/ (function() {

eval("//Проверка локального хранилища на наличие текста для поиска\r\nvar yourdata = JSON.parse(localStorage.getItem('data'));\r\nif(yourdata != null){\r\n    search = yourdata;\r\n    Search(search);\r\n    localStorage.clear();\r\n}\r\n\r\nif($('.gallery').length > 0){\r\n    $(\".search__input\").on('keyup paste', function() {\r\n        let search = $(\".search__input\").val();\r\n        Search(search);\r\n    });\r\n    $('.mainHeader__link').each(function(){\r\n        if($(this).text() == \"Все игры\")\r\n            $(this).addClass('mainHeader__link--active');\r\n    })\r\n}\r\n\r\nfunction Search(search){\r\n    let bool = false;\r\n\r\n    $('.gameList__item').each(function() {\r\n        let game = $(this);\r\n        game.hide();\r\n\r\n        let title = game.find('.gameList__item-title').text();\r\n\r\n        search = search.toLowerCase();\r\n        if (title.toLowerCase().indexOf(search) != -1){\r\n           game.find('.gameList__item-title').closest('.gameList__item').show();\r\n        }\r\n    });\r\n\r\n    //Проверка фильтров\r\n    let arrFilters = [];\r\n    $('.filters__sublink').each(function(){\r\n        if($(this).hasClass('active')){\r\n            arrFilters.push($(this).attr('data-tag'));\r\n        }\r\n    })\r\n\r\n    $('.gameList__item').each(function() {\r\n            if($(this).css('display') != 'none'){\r\n            let counter = 0;\r\n            let game = $(this);\r\n            game.hide();\r\n\r\n            //Проверка каждого фильтра\r\n            arrFilters.forEach(function(item, i, arr){\r\n                //Сравнение фильра с тегом игры\r\n                game.find('.gameList__tag').each(function(){\r\n                    if($(this).text() === item){\r\n                      counter++;\r\n                    }\r\n                });\r\n            });\r\n\r\n            //Совпадение\r\n            if(counter === arrFilters.length){\r\n                game.show();\r\n            }\r\n        }\r\n    });\r\n\r\n    $('.gameList__item').each(function() {\r\n        if($(this).css('display') != 'none'){\r\n            bool = true;\r\n        }\r\n    });\r\n\r\n    if(bool === false)\r\n        $('.not_found').fadeIn(100);\r\n    else\r\n        $('.not_found').fadeOut(100);\r\n}\r\n\r\n\r\n\r\n//Отправка текста в поиск\r\n$(document).ready(function() {\r\n    $('.search__input').keydown(function(e) {\r\n        if(e.keyCode === 13) {\r\n            localStorage.setItem('data', JSON.stringify($(this).val()));\r\n        }\r\n    });\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/search.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/***/ (function() {

eval("const games = document.querySelectorAll('.sliderGame');\r\nconst inners = document.querySelectorAll('.content__inner');\r\nlet content = document.querySelector('.content');\r\nlet id = 0;\r\nlet active_game;\r\nlet time_interval = 6000;\r\nlet Interval;\r\n\r\n\r\nif($('.slider').length > 0){\r\n\tStart();\r\n\t$('.mainHeader__link').each(function(){\r\n\t\tif($(this).text() == \"Главная\")\r\n\t\t\t$(this).addClass('mainHeader__link--active');\r\n\t})\r\n}\r\n\r\nfunction Start(){\r\n\tlet interval = setInterval(function(){\r\n\t\tswitching(games[0]);\r\n\t}, time_interval);\r\n\tanimation(games[0]);\r\n\tfor(const game of games){\r\n\tgame.addEventListener('click', () => {\r\n\t\tclearInterval(interval);\r\n\t\t\tactive_game = game;\r\n\t\t\tactiveGame(game);\r\n\t\t\tinterval = setInterval(function(){\r\n\t\t\t\tswitching(active_game);\r\n\t\t\t}, time_interval);\r\n\t\t})\r\n\t}\r\n}\r\n\r\n//Действия при активации игры\r\n\r\nfunction activeGame(game){\r\n\tfor(const inner of inners)\r\n\t\tinner.classList.remove('show');\r\n\tfor(const game_ of games){\r\n\t\tgame_.classList.remove('active');\r\n\t\tgame_.style = `background-image: none`;\r\n\t}\r\n\tlet dataId = game.getAttribute('data-id');\r\n\tid = dataId.replace('sliderGame_', '') - 1;\r\n\tdocument.querySelector(`#${dataId}`).classList.add('show');\r\n\tgame.classList.add('active');\r\n\tgame.classList.add('scale');\r\n\tsetTimeout(function(){\r\n\t\tgame.classList.remove('scale');\r\n\t}, 250)\r\n\tanimation(game);\r\n}\r\n\r\n//Переход на следующую игру\r\n\r\nfunction switching(game){\r\n\tif(isNaN(id) === false){\r\n\t\tif(id != 4)\r\n\t\t\tid++;\r\n\t\telse\r\n\t\t\tid = 0;\r\n\t\tactiveGame(games[id]);\r\n\t}\r\n}\r\n\r\n// Анимация замены фона\r\n\r\nfunction animation(game){\r\n\tclearInterval(Interval);\r\n\tlet line = 0;\r\n\tlet text;\r\n\tInterval = setInterval(function(){\r\n\t\ttext = `background-image: linear-gradient(to right, #363636 ${line}%, #252525 0%)`;\r\n\t\tdocument.getElementsByClassName('active')[0].style = text;\r\n\t\tline++;\r\n\t\tif(line === 101){\r\n\t\t\tline = -1;\t\r\n\t\t\tclearInterval(Interval);\r\n\t\t\tdocument.getElementsByClassName('active')[0].style = `background-image: none`;\r\n\t\t}\r\n\t}, time_interval/102);\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider.js?");

/***/ }),

/***/ "./src/assets/js/small-slider.js":
/*!***************************************!*\
  !*** ./src/assets/js/small-slider.js ***!
  \***************************************/
/***/ (function() {

eval("let counter = 0;\r\nlet games = $('#small-slider .gameList__games');\r\nlet buttons = $('.gameList__nav-link');\r\n\r\n//Действия при загрузке сайта\r\ngames.each(function(index){\r\n\tlet game = $(this);\r\n\tgame.hide();\r\n\tif(index == counter)\r\n\t\tgame.show();\r\n\r\n\tbuttons.each(function(){\r\n\t\tlet button = $(this);\r\n\r\n\t\tif(button.text() == '<' & counter == 0)\r\n\t\t\tbutton.addClass('inactive');\r\n\t\tif(button.text() == '>' & counter == games.length - 5)\r\n\t\t\tbutton.addClass('inactive');\r\n\t});\r\n});\r\n\r\n\r\n//Обработчик клика по кнопке\r\nbuttons.click(function(event){\r\n\tevent.preventDefault();\r\n\tlet button = $(this);\r\n\r\n\t//Удаление статуса \"неактивный\" у обеих кнопок\r\n\tbuttons.each(function(){\r\n\t\t$(this).removeClass('inactive');\r\n\t});\r\n\r\n\r\n\t//Переход на новый сборник игр\r\n\tif(button.text() == '<')\r\n\t\tcounter -= 1;\r\n\telse if(button.text() == '>')\r\n\t\tcounter += 1;\r\n\r\n\t//Добавление статуса \"неактивный\" если нужно\r\n\tif(button.text() == '<' & counter == 0)\r\n\t\tbutton.addClass('inactive');\r\n\tif(button.text() == '>' & counter == games.length - 1)\r\n\t\tbutton.addClass('inactive');\r\n\r\n\t//Вывести нужные игры\r\n\tgames.each(function(index){\r\n\t\tlet game = $(this);\r\n\t\tgame.hide();\r\n\r\n\t\tif(index == counter)\r\n\t\t\tgame.fadeIn(300);\r\n\t});\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/small-slider.js?");

/***/ }),

/***/ "./src/assets/js/specifications.js":
/*!*****************************************!*\
  !*** ./src/assets/js/specifications.js ***!
  \*****************************************/
/***/ (function() {

eval("//Переключение между характеристиками\r\nconst specificationsBtn = $(\".specifications__nav-btn\");\r\nconst specificationsItem \t= $(\".specifications__item\");\t\r\n\r\nspecificationsBtn.each(function(){\r\n\t$(this).click(function(){\r\n\t\tlet currentBtn = $(this);\r\n\t\tlet tabId = currentBtn.attr(\"data-tab\");\r\n\t\tlet currentTab = $(tabId);\r\n\r\n\t\tif(!currentBtn.hasClass('active')){\r\n\t\t\tspecificationsBtn.each(function(){\r\n\t\t\t\t$(this).removeClass('active');\r\n\t\t\t});\r\n\t\t\tspecificationsItem.each(function(){\r\n\t\t\t\t$(this).removeClass('active');\r\n\t\t\t});\r\n\t\t\tcurrentBtn.addClass('active');\r\n\t\t\tcurrentTab.addClass('active');\r\n\t\t}\r\n\t});\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/specifications.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/authentication.js"]();
/******/ 	__webpack_modules__["./src/assets/js/filters.js"]();
/******/ 	__webpack_modules__["./src/assets/js/game-gallery.js"]();
/******/ 	__webpack_modules__["./src/assets/js/game-scroll.js"]();
/******/ 	__webpack_modules__["./src/assets/js/gameRating.js"]();
/******/ 	__webpack_modules__["./src/assets/js/search.js"]();
/******/ 	__webpack_modules__["./src/assets/js/slider.js"]();
/******/ 	__webpack_modules__["./src/assets/js/small-slider.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/specifications.js"]();
/******/ 	
/******/ })()
;