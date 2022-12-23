window.addEventListener('DOMContentLoaded', () => {
    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
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
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    ///// Timer.
    //Получение данных для таймера
    const deadline = '2023-05-11';
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
    setClock('.timer', deadline);

        // Modal window. Лекция 72
    
    const modalTrigger = document.querySelectorAll('[data-modal]'), //72 - 2:25. Кнопки открытия окна.
        modal = document.querySelector('.modal')/*, //72 - 3:30. Само модальное окно.
        modalCloseBtn = document.querySelector('[data-close]')$Лекция 85. 7:35$*/;  //72 - 3:45. Кнопка закрытия модального окна. 

    function openModal() {       // Лекция 73. 1:15
        modal.classList.add('show');
        modal.classList.remove('hide');  
        document.body.style.overflow = ''; //72 - 7:55. Прокрутка при Закрытии окна.
        clearInterval(modalTimerId);
    }
    
    modalTrigger.forEach(btn => {       //72 - 10:15. Перебор кнопок для псевдомассива.
        btn.addEventListener('click', openModal);// => {72 - 4:05. Алгоритм работы, открытие окна. Лекция 73. 1:30 (openModal)           
        // modal.classList.add('show');
        // modal.classList.remove('hide');    
        // document.body.style.overflow = 'hidden';//72 - 7:15. Прокрутка при открытом окне.
        //});        
    });


    function closeModal() {       //72 - 15:00. Функция для повторяющегося кода.
        modal.classList.add('hide');
        modal.classList.remove('show');  
        document.body.style.overflow = ''; //72 - 7:55. Прокрутка при Закрытии окна.
    }

    /*modalCloseBtn.addEventListener('click', closeModal);$Лекция 85. 7:35$*/ //72 - 6:05. Закрытие окна. 15:40 Оптимизация кода.
        

    modal.addEventListener('click', (e) => {  //72 - 11:30. Закрытие модального окна по клику вне самого окна.
        if (e.target === modal || e.target.getAttribute('data-close') == '') {  //Размер модального окна в Классе modal - составояет 100% высоты и ширины в CSS. $Лекция 85. 8:25$
            closeModal();   //15:50 Оптимизация кода.
        }
    });
    document.addEventListener('keydown', (e) => {  //72 - 16:06. Закрытие модального окна по клику 'Escape'.
        if (e.code == 'Escape' && modal.classList.contains('show')) {  
            closeModal();   //15:50 Оптимизация кода.
        }
    });
    
    const modalTimerId = setTimeout(openModal, 50000);  //таймер всплытия модального окна. Лекция 73.

    function showModalByCcroll() {//Лекция 73. 3:50. 9:40.
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByCcroll);
        }        
    };


    window.addEventListener('scroll', showModalByCcroll);/*, () => {//Лекция 73. 3:50.
    }, {once: 'true'});//Лекция 73. 8:25.*/


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
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "Премиум"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        20,
        '.menu .container'
    ).render();   
    
    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Премиум"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        16,
        '.menu .container'
    ).render();    
    
    //// Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: /*'Загрузка'$Лекция 85. 16:55.$*/'img/Forms/spinner.svg',   //Лекция 85. 16:55.
        success: 'Спасибо! Скоро мы с Вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };
    
    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
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
            
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //Лекция 84. 21:10
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });                
            const json = JSON.stringify(object);

            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    /*statusMessage.textContent = $Лекция 85. 12:25$*/showThanksModal(message.success);//Лекция 85. 12:25
                    form.reset();
                    //setTimeout(() => {   Лекция 85. 12:25
                        statusMessage.remove();
                    //}, 2000);    Лекция 85. 12:25
                } else {
                    /*statusMessage.textContent = $Лекция 85. 13:00$*/showThanksModal(message.failure);//Лекция 85. 13:00
                }
            });
        });
    }

    //Окно оповещения пользователя. Лекция 85. 2:40


    function showThanksModal(massage) {
        const prevModalDilog = document.querySelector('.modal__dialog');
        prevModalDilog.classList.add('hide'); // Лекция 85. 4:10

        openModal();
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class='modal__content'>
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${massage}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);// Лекция 85. 9:20.
        setTimeout(() => {
            thanksModal.remove();
            prevModalDilog.classList.add('show');
            prevModalDilog.classList.remove('hide');
            closeModal();
        }, 5000);
        
    }

});


