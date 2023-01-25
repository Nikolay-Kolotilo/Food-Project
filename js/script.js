<<<<<<< HEAD
require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
=======

>>>>>>> master

// Tabs
import tabs from './modules/tabs'; //Lec_102. webpack.//Lec_104 Изменения для export default: from.
// Timer.
import timer from './modules/timer';
// Modal window. Лекция 72
import modal from './modules/modal';
// Карточки продуктов меню.Лекция 79.
import cards from './modules/cards';
// Forms    
import forms from './modules/forms';
// Lec_92 Организация Слайдера. See lec 92 by myself.
// Lec_93. Carousel (Взамен лекции 92.). Вариант слайдера в виде карусели.
import slider from './modules/slider';
// Calc Lec_97. 3:50
import calc from './modules/calc';
//Lec_104 15:40
import {openModal} from './modules/modal';



window.addEventListener('DOMContentLoaded', () => {

      const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);  //Lec_104 14:40
      tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active'); //Lec_102. 24:25 Lec_104 8: 23:25
      timer('.timer', '2023-05-11'); //Lec_104 25:35
      modal('[data-modal]', '.modal', modalTimerId); //Lec_104 8:40, 15:40
      cards();
      forms('form', modalTimerId);
      slider({ //Lec_104 30:00  Используем деструктуризацию, для передачи в модуль slider. Благодаря деструктуризации порядок не важен.
            container: '.offer__slider',
            slide: ".offer__slide",
            nextArrow: ".offer__slider-next",
            prevArrow: ".offer__slider-prev",
            totalCounter: '#total',
            currentCounter: '#current',
            wrapper: '.offer__slider-wrapper',
            field: '.offer__slider-inner'
      });
      calc();      
});


