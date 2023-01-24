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

export default modal;
export  {openModal, closeModal};
