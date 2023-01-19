function forms() {
    // Forms

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
    //Лекция 89 12:50
    fetch('http://localhost:3000/menu') //Лекция 89 17:40
        .then(data => data.json())
        .then(res => console.log(res));
}

module.exports = forms;