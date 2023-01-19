window.addEventListener('DOMContentLoaded', () => {
            // Tabs
      const tabs = require('./modules/tabs'), //Lec_102. webpack.
            // Timer.
            timer = require('./modules/timer'),
            // Modal window. Лекция 72
            modal = require('./modules/modal'),
            // Карточки продуктов меню.Лекция 79.
            cards = require('./modules/cards'),
            // Forms    
            forms = require('./modules/forms'),
            // Lec_92 Организация Слайдера. See lec 92 by myself.
            // Lec_93. Carousel (Взамен лекции 92.). Вариант слайдера в виде карусели.
            slider = require('./modules/slider'),
            // Calc Lec_97. 3:50
            calc = require('./modules/calc');
      tabs(); //Lec_102. 24:25
      timer();
      modal();
      cards();
      forms();
      slider();
      calc();      
});


