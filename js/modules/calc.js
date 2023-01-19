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
module.exports = calc;