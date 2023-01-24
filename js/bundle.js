/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    //Calc Lec_97. 3:50
    const result = document.querySelector('.calculating__result span');

    let sex, height, weight, age, ratio;
      //Lec_98. 6:50  
    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function initLocalSettings(selector, activeClass) { //Lec_98. 9:40
        const elements = document.querySelectorAll(selector);
        elements.forEach((elem) => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }
    initLocalSettings('#gender div', 'calculating__choose-item_active');//Lec_98. 15:05
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {//Lec_97. 8:00
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = "____";
            return;
        }
        if (sex === "female") { //Lec_97. 9:40
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }
    calcTotal(); //Lec_97. 12:00 Проверка работоспособности функции

    function getStaticInformation(Selector, activeClass) { //Lec_97. 12:45
        const elements = document.querySelectorAll(Selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {//Lec_97. 14:10
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio')); //Lec_98. 5:00
            } else {
                sex = e.target.getAttribute('id');  
                localStorage.setItem('sex', e.target.getAttribute('id')); //Lec_98. 5:00
            }
            console.log(ratio, sex); //Lec_97. 16:35 Проверка правильности получения атрибутов.

            elements.forEach(elem => {
                elem.classList.remove(activeClass);                
            });
            e.target.classList.add(activeClass);
            calcTotal();
            });             
        });
    }
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDinamicInformation(selector) {//Lec_97. 20:00 Работа с элементами ввода данных.
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) { //Lec_98. 2:35 Подсветка красной рамкой при ошибке.
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }
            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;                
            }
            calcTotal();            
        });
        
    }
    getDinamicInformation('#height');
    getDinamicInformation('#weight');
    getDinamicInformation('#age');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import { getResource } from "..servises/servises"; // Установлена библиотека Axios мз 91 урока


function cards() {
    //// Лекция 79. Карточки продуктов меню.

            //Класс для удаления меню (Не по видео).    
    class MenuCardDelete {
        constructor(menuCardSelector) {
            this.menuCardSelector = menuCardSelector;
            this.menuItemIs = document.querySelectorAll(this.menuCardSelector);
        }
        del() {
            this.menuItemIs.forEach(item => {
                item.remove();
            });
        }
    }
    new MenuCardDelete('.menu__item').del();

    
            //Классы для карточек.
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {//// Лекция 80. 7:40;
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAN();            
        }
        changeToUAN() {
            this.price = this.price * this.transfer;
        }
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }            
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.title} - ${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
                `;
            this.parent.append(element);
        }
    }

                //Lec_90 17:50 Получение карточек меню с сервера.
    /*const getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        } 
        return await res.json(); 
    };   */
                //Lec_90 21:25 Получение карточек меню с сервера.
    // getResource('http://localhost:3000/menu')//Lec_91 5:10
    //     .then(data => { // деструктуризация объекта
    //         data.forEach( ({img, altimg, title, descr, price})   => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container' // Ввод данных при деструктуризации объекта.
    //                 // obj.img, //Lec_90. 25:00
    //                 // obj.altimg,
    //                 // obj.title,
    //                 // obj.descr,
    //                 // obj.price,                    
    //             ).render();
    //         });        
    //     });
    
    //Lec_91 5:10 Применение библиотеки axios в проете Food..
    axios.get('http://localhost:3000/menu')
        .then(data => {   //Lec_91 7:20.
            data.data.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container'
                ).render();
            });
        });
    // Формирование карточек мануально без конструктора описано 'Lec_90_Async_Await (ES8)_Getting data from server.js'. 27:25.

    // new MenuCard( //Lec_90 21:25
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     9,
    //     '.menu .container',
    // ).render();

    // new MenuCard(
    //     "img/tabs/elite.jpg",
    //     "elite",
    //     'Меню "Премиум"',
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     20,
    //     '.menu .container'
    // ).render();   
    
    // new MenuCard(
    //     "img/tabs/post.jpg",
    //     "post",
    //     'Меню "Премиум"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     16,
    //     '.menu .container'
    // ).render();        
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _servises_servises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servises/servises */ "./js/servises/servises.js");




function forms(formSelector, modalTimerId) { //Lec_104 17:50, 19:20 Довавляем аргумент modalTimerId после модульного разделения.
    // Forms

    const forms = document.querySelectorAll(formSelector);//Lec_104 19:20.

    const message = {
        loading: /*'Загрузка'$Лекция 85. 16:55.$*/'img/Forms/spinner.svg',   //Лекция 85. 16:55.
        success: 'Спасибо! Скоро мы с Вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };
    
    forms.forEach(item => {
        bindPostData(item);
    });
    
    //Lec_90 4:05. //Lec_104 20:25 Переносим postData из forms в servises.js

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img'); //Лекция 85. 17:20.
            statusMessage.src = message.loading/*classList.add('status')*/;//Лекция 85. 17:20.
            statusMessage.style.cssText = `     
                display: block;
                margin: 0 auto;
            `/*textContent = message.loading*/;//Лекция 85. 18:37.
            //form.appendChild(statusMessage);  Лекция 85. 23:00.
            form.insertAdjacentElement('afterend', statusMessage);  //Лекция 85. 22:30.
            
            const formData = new FormData(form);

            // const object = {};   //Lec_90 14:10
            // formData.forEach(function(value, key) {
            //     object[key] = value;
            // });     
            ////Lec_90 14:10
            const json = JSON.stringify(Object.fromEntries(formData.entries())); //Берем Форм дату, превращаем 
            // в Массив массивов, затем в объект массивов и получаем json.

            // fetch('server1.php', {  //Lec_90 11:50
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify(object)
            // })
            (0,_servises_servises__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json) // Lec_90 11:25, 15:50
                // .then(data => data.text()) // Lec_90 12:30
                .then(data => {
                console.log(data);
                /*statusMessage.textContent = $Лекция 85. 12:25$*/
                showThanksModal(message.success);//Лекция 85. 12:25
                //setTimeout(() => {   Лекция 85. 12:25
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });

            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         /*statusMessage.textContent = $Лекция 85. 12:25$*/showThanksModal(message.success);//Лекция 85. 12:25
            //         form.reset();
            //         //setTimeout(() => {   Лекция 85. 12:25
            //             statusMessage.remove();
            //         //}, 2000);    Лекция 85. 12:25
            //     } else {
            //         /*statusMessage.textContent = $Лекция 85. 13:00$*/showThanksModal(message.failure);//Лекция 85. 13:00
            //     }
            // });
        });
    }

    //Окно оповещения пользователя. Лекция 85. 2:40
    function showThanksModal(message) {
        const prevModalDilog = document.querySelector('.modal__dialog');
        prevModalDilog.classList.add('hide'); // Лекция 85. 4:10

        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId); //Lec_104 17:30. Довавляем аргумент '.modal' после модульного разделения.
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class='modal__content'>
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);// Лекция 85. 9:20.
        setTimeout(() => {
            thanksModal.remove();
            prevModalDilog.classList.add('show');
            prevModalDilog.classList.remove('hide');
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal'); //Lec_104 17:10. Довавляем аргумент '.modal' после модульного разделения.
            
        }, 5000);
        
    }
    //Лекция 89 12:50
    fetch('http://localhost:3000/menu') //Лекция 89 17:40
        .then(data => data.json())
        .then(res => console.log(res));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector, modalTimerId) {  // Лекция 73. 1:15. Lec_104 9:10 Добавляем modalSelector.
    const modal = document.querySelector(modalSelector);//Lec_104 9:10 Добавляем modalSelector.
    modal.classList.add('show');
    modal.classList.remove('hide');  
    document.body.style.overflow = ''; //72 - 7:55. Прокрутка при Закрытии окна.

    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);        
    }
}

function closeModal(modalSelector) { //72 - 15:00. Функция для повторяющегося кода. Lec_104 9:10 Добавляем modalSelector.
    const modal = document.querySelector(modalSelector);//Lec_104 9:25 Добавляем modalSelector.
    modal.classList.add('hide');
    modal.classList.remove('show');  
    document.body.style.overflow = ''; //72 - 7:55. Прокрутка при Закрытии окна.
}



function modal(triggerSelector, modalSelector, modalTimerId) { //Lec_104 8:10
    // Modal window. Лекция 72
    
    const modalTrigger = document.querySelectorAll(triggerSelector), //72 - 2:25. Кнопки открытия окна.
        modal = document.querySelector(modalSelector)/*, //72 - 3:30. Само модальное окно.
        modalCloseBtn = document.querySelector('[data-close]')$Лекция 85. 7:35$*/;  //72 - 3:45. Кнопка закрытия модального окна. 

    
    modalTrigger.forEach(btn => {       //72 - 10:15. Перебор кнопок для псевдомассива.
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));// => {72 - 4:05. Алгоритм работы, открытие окна. Лекция 73. 1:30 (openModal)
        /*Lec_104. 10:20. openModal заменяем на стрелочную функцию из-за ограничений обработчика событий:
        () => openModal(modalSelector)*/ 
        // modal.classList.add('show');
        // modal.classList.remove('hide');    
        // document.body.style.overflow = 'hidden';//72 - 7:15. Прокрутка при открытом окне.
        //});        
    });



    /*modalCloseBtn.addEventListener('click', closeModal);$Лекция 85. 7:35$*/ //72 - 6:05. Закрытие окна. 15:40 Оптимизация кода.
        

    modal.addEventListener('click', (e) => {  //72 - 11:30. Закрытие модального окна по клику вне самого окна.
        if (e.target === modal || e.target.getAttribute('data-close') == '') {  //Размер модального окна в Классе modal - составояет 100% высоты и ширины в CSS. $Лекция 85. 8:25$
            closeModal(modalSelector);   //15:50 Оптимизация кода.
        }
    });
    document.addEventListener('keydown', (e) => {  //72 - 16:06. Закрытие модального окна по клику 'Escape'.
        if (e.code == 'Escape' && modal.classList.contains('show')) {  
            closeModal(modalSelector);   //15:50 Оптимизация кода.
        }
    });
    
    function showModalByCcroll() {//Лекция 73. 3:50. 9:40.
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);//Lec_104. 11:00.
            window.removeEventListener('scroll', showModalByCcroll);
        }        
    };


    window.addEventListener('scroll', showModalByCcroll);/*, () => {//Лекция 73. 3:50.
    }, {once: 'true'});//Лекция 73. 8:25.*/
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field} ) { //Lec_104 29:00  Используем деструктуризацию.
    //Lec_92 Организация Слайдера. See lec 92 by myself.
    //Lec_93. Carousel (Взамен лекции 92.). Вариант слайдера в виде карусели.
    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container), //Lec_94. 2:00 Создаем контейнер для слайдера.
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;
    
    let slideIndex = 1,
        ofset = 0;

    console.log(slidesWrapper);
    console.log(width);
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    } 

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });
    
    slider.style.position = 'relative'; //Lec_94. 2:30 Позиция размещения - Релатив.

    const indicatorsDots = document.createElement('ol'),
          dots = []; //Lec_94. 9:00 Создание массива для всех созданных точек.
    indicatorsDots.classList.add('carousel-indicators');
    //Lec_94. 3:45 Стилизация блока карусели:
    indicatorsDots.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `; 
    slider.append(indicatorsDots);

     //Lec_94. 3:45 Создание слайдов по количеству точек.
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
            `;
             //Lec_94. 8:00 Назначение класса активности.
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicatorsDots.append(dot);     
        dots.push(dot);
    };


    next.addEventListener('click', () => {
        if (ofset == clearingForNumbers(width)/*Lec_96. 20:40. Оптимизация Кода*/ *(slides.length - 1) ) { //Превращение  width (650px) в 650.
            ofset = 0;
        } else { //14:50.
            ofset += clearingForNumbers(width)/*Lec_96. 20:40. Оптимизация Кода*/;
        }
        slidesField.style.transform = `translateX(-${ofset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        } 
        // if (slides.length < 10 ) {
        //     current.textContent = `0${slideIndex}`;
        // } else {
        //     current.textContent = slideIndex;
        // }             
        addZero();//Lec_96. 20:40. Оптимизация Кода - сокращение повторений кода.
        
        // dots.forEach(dot => dot.style.opacity = '.5'); //Lec_94. 10:00 Назначение класса активности событию.
        // dots[slideIndex - 1].style.opacity = '1';
        addStyleDots();
    });

    prev.addEventListener('click', () => {
        if (ofset == 0) { 
            ofset = clearingForNumbers(width)/*Lec_96. 20:40. Оптимизация Кода*/ * (slides.length - 1);
        } else { //14:50.
            ofset -= clearingForNumbers(width)/*Lec_96. 20:40. Оптимизация Кода*/;
        }
        slidesField.style.transform = `translateX(-${ofset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        } 
        // if (slides.length < 10 ) {
        //     current.textContent = `0${slideIndex}`;
        // } else {
        //     current.textContent = slideIndex;
        // }             
        addZero();//Lec_96. 20:40. Оптимизация Кода - сокращение повторений кода.
        
        // dots.forEach(dot => dot.style.opacity = '.5'); //Lec_94. 10:55 Назначение класса активности событию.
        // dots[slideIndex - 1].style.opacity = '1';
        addStyleDots();
    });

    //Lec_94. 11:20. Добавление события на точки.
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');// Lec_94. 11:50. Получение значения атрибута.

            slideIndex = slideTo;// Lec_94. 12:30. Присваивание индексу значения атрибута полученного ранее.
            ofset = clearingForNumbers(width)/*Lec_96. 20:40. Оптимизация Кода*/ * (slideTo - 1); //Lec_94. 12:50. Передвижение по галлерее.
            slidesField.style.transform = `translateX(-${ofset}px)`;

            // if (slides.length < 10 ) {
            //     current.textContent = `0${slideIndex}`;
            // } else {
            //     current.textContent = slideIndex;
            // }             
            addZero();//Lec_96. 20:40. Оптимизация Кода - сокращение повторений кода.
            
            // dots.forEach(dot => dot.style.opacity = '.5'); //Lec_94. 13:40. Изменение отображения точек.
            // dots[slideIndex - 1].style.opacity = '1';
            addStyleDots();

        });
    });
    
    function addZero() {//Lec_96. 20:40. Оптимизация Кода - сокращение повторений кода.
        if (slides.length < 10) {//Lec_94. 13:50. Применение счетчика на точках.
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        } 
    }

    function addStyleDots() {//Lec_96. 20:40. Оптимизация Кода - сокращение повторений кода.
        dots.forEach(dot => dot.style.opacity = '.5'); 
        dots[slideIndex - 1].style.opacity = '1';
    }

    function clearingForNumbers(numberSting) {//Lec_96. 20:40. Оптимизация Кода - сокращение повторений кода.
        let number = +numberSting.replace(/\D/g, '');
        return number;
    }
    // console.log(clearingForNumbers(width));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) { //23:25. Подставляем аргуметы в вызов функции в script
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) { //24:30. В script подставлен селектор с точкой, поэтому надо точку из аргумента убрать.
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {  //Lec_104 26:00
    ///// Timer.
    //Получение данных для таймера
    // const deadline = '2023-05-11'; //Lec_104 26:00, удаляем т.к. есть deadline

    function getTimeRemeaning(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - // Получим рез-т в мСек.
            Date.parse(new Date());
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            Date.parse(new Date()), // Текущая дата в mSec.
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / (1000)) % 60);            
        }
              
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    // getTimeRemeaning(deadline);
    // Помещение таймера на странице
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }
        else {
            return num;
        }
    
    }
    
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        // Обновление таймера

        updateClock(); // убирание моргания времени       
        function updateClock() {
            const t = getTimeRemeaning(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock(id, deadline); //Lec_104 26:00
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/servises/servises.js":
/*!*********************************!*\
  !*** ./js/servises/servises.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {//Lec_90 4:05. //Lec_104 20:25 Переносим postData из forms в servises.js
    const res = await fetch(url, {//Lec_90 5:05
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json(); 
};    

// const getResource = async (url) => { // Установлена библиотека Axios мз 91 урока
//     const res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status ${res.status}`);
//     } 
//     return await res.json(); 
// };   




// export { getResource };

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");


// Tabs
 //Lec_102. webpack.//Lec_104 Изменения для export default: from.
// Timer.

// Modal window. Лекция 72

// Карточки продуктов меню.Лекция 79.

// Forms    

// Lec_92 Организация Слайдера. See lec 92 by myself.
// Lec_93. Carousel (Взамен лекции 92.). Вариант слайдера в виде карусели.

// Calc Lec_97. 3:50

//Lec_104 15:40




window.addEventListener('DOMContentLoaded', () => {

      const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)('.modal', modalTimerId), 50000);  //Lec_104 14:40
      (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active'); //Lec_102. 24:25 Lec_104 8: 23:25
      (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])('.timer', '2023-05-11'); //Lec_104 25:35
      (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modal]', '.modal', modalTimerId); //Lec_104 8:40, 15:40
      (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
      (0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId);
      (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({ //Lec_104 30:00  Используем деструктуризацию, для передачи в модуль slider. Благодаря деструктуризации порядок не важен.
            container: '.offer__slider',
            slide: ".offer__slide",
            nextArrow: ".offer__slider-next",
            prevArrow: ".offer__slider-prev",
            totalCounter: '#total',
            currentCounter: '#current',
            wrapper: '.offer__slider-wrapper',
            field: '.offer__slider-inner'
      });
      (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])();      
});



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map