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
}

module.exports = cards;