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

                //Lec_90 17:50 Получение карточек меню с сервера.
    const getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        } 
        return await res.json(); 
    };   
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
    
    //// Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: /*'Загрузка'$Лекция 85. 16:55.$*/'img/Forms/spinner.svg',   //Лекция 85. 16:55.
        success: 'Спасибо! Скоро мы с Вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };
    
    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {//Lec_90 4:05
        const res = await fetch(url, {//Lec_90 5:05
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json(); 
    };    

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
            postData('http://localhost:3000/requests', json) // Lec_90 11:25, 15:50
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

        openModal();
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
            closeModal();
        }, 5000);
        
    }

    //Лекция 89
    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
    
    //Lec_92 Организация Слайдера.
    const arrowPrev = document.querySelector(".offer__slider-prev"),
        arrowNext = document.querySelector(".offer__slider-next"),
        totalItem = document.querySelectorAll(".offer__slide"),
        counterTotal = totalItem.length,
        currentId = document.getElementById('current'),
        totalId = document.getElementById('total');
    let countNumber = 1;

    //Lec_92 counter
    function sliderCounter(number) {
        if (number < 1) {
            number = number + totalItem.length;
        }
        if (number > totalItem.length) {
            number = number%totalItem.length;
        } 
        countNumber = number;
        return countNumber;
    }
    sliderCounter(countNumber);
    console.log(countNumber);

    //Lec_92 sliderShow
    function sliderShow(numberOfSlide, totalItem, currentId) {
        totalItem.forEach(item => item.classList.add('hide'));
        totalItem[numberOfSlide - 1].classList.remove('hide');
        totalItem[numberOfSlide - 1].classList.add('show');
        document.querySelector('.offer__slider-wrapper').append(totalItem[numberOfSlide -1]);
        if (numberOfSlide < 10) {
            currentId.innerHTML = `0${numberOfSlide}`;
        } else {
            currentId.innerHTML = numberOfSlide;
        }        
        if (counterTotal < 10 ) {
            totalId.innerHTML = `0${counterTotal}`;
        } else {
            totalId.innerHTML = counterTotal;
        }
    }
    sliderShow(countNumber, totalItem, currentId);

    arrowPrev.addEventListener('click', (e) => {
        e.preventDefault();
        countNumber = countNumber - 1;
        sliderCounter(countNumber);
        // console.log(countNumber);
        sliderShow(countNumber, totalItem, currentId);
    });
    arrowNext.addEventListener('click', (e) => {
        e.preventDefault();
        countNumber++;
        sliderCounter(countNumber);
        // console.log(countNumber);
        sliderShow(countNumber, totalItem, currentId);
    });
});

