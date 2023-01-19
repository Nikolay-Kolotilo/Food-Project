function modal() {
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
}

module.exports = modal;