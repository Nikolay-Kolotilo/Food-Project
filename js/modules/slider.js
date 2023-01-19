function slider() {
    //Lec_92 Организация Слайдера. See lec 92 by myself.
    //Lec_93. Carousel (Взамен лекции 92.). Вариант слайдера в виде карусели.
    const slides = document.querySelectorAll(".offer__slide"),
        slider = document.querySelector('.offer__slider'), //Lec_94. 2:00 Создаем контейнер для слайдера.
        prev = document.querySelector(".offer__slider-prev"),
        next = document.querySelector(".offer__slider-next"),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
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

module.exports = slider;