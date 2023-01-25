<<<<<<< HEAD
/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={702:function(t,e,n){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,i=void 0,s=function(t,e){f[r]=t,f[r+1]=e,2===(r+=2)&&(i?i(m):y())};var c="undefined"!=typeof window?window:void 0,a=c||{},l=a.MutationObserver||a.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(m,1)}}var f=new Array(1e3);function m(){for(var t=0;t<r;t+=2)(0,f[t])(f[t+1]),f[t]=void 0,f[t+1]=void 0;r=0}var v,p,g,_,y=void 0;function w(t,e){var n=this,r=new this.constructor(E);void 0===r[S]&&$(r);var o=n._state;if(o){var i=arguments[o-1];s((function(){return I(o,r,i,n._result)}))}else M(n,r,t,e);return r}function b(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(E);return x(e,t),e}y=u?function(){return process.nextTick(m)}:l?(p=0,g=new l(m),_=document.createTextNode(""),g.observe(_,{characterData:!0}),function(){_.data=p=++p%2}):d?((v=new MessageChannel).port1.onmessage=m,function(){return v.port2.postMessage(0)}):void 0===c?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(m)}:h()}catch(t){return h()}}():h();var S=Math.random().toString(36).substring(2);function E(){}var L=void 0;function A(e,n,r){n.constructor===e.constructor&&r===w&&n.constructor.resolve===b?function(t,e){1===e._state?T(t,e._result):2===e._state?C(t,e._result):M(e,void 0,(function(e){return x(t,e)}),(function(e){return C(t,e)}))}(e,n):void 0===r?T(e,n):t(r)?function(t,e,n){s((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?x(t,n):T(t,n))}),(function(e){r||(r=!0,C(t,e))}),t._label);!r&&o&&(r=!0,C(t,o))}),t)}(e,n,r):T(e,n)}function x(t,e){if(t===e)C(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=e),null===r||"object"!==o&&"function"!==o)T(t,e);else{var n=void 0;try{n=e.then}catch(e){return void C(t,e)}A(t,e,n)}var r,o}function q(t){t._onerror&&t._onerror(t._result),j(t)}function T(t,e){t._state===L&&(t._result=e,t._state=1,0!==t._subscribers.length&&s(j,t))}function C(t,e){t._state===L&&(t._state=2,t._result=e,s(q,t))}function M(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=n,o[i+2]=r,0===i&&t._state&&s(j,t)}function j(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?I(n,r,o,i):o(i);t._subscribers.length=0}}function I(e,n,r,o){var i=t(r),s=void 0,c=void 0,a=!0;if(i){try{s=r(o)}catch(t){a=!1,c=t}if(n===s)return void C(n,new TypeError("A promises callback cannot return that same promise."))}else s=o;n._state!==L||(i&&a?x(n,s):!1===a?C(n,c):1===e?T(n,s):2===e&&C(n,s))}var k=0;function $(t){t[S]=k++,t._state=void 0,t._result=void 0,t._subscribers=[]}var D=function(){function t(t,n){this._instanceConstructor=t,this.promise=new t(E),this.promise[S]||$(this.promise),e(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?T(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&T(this.promise,this._result))):C(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===L&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===b){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===w&&t._state!==L)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===O){var c=new n(E);s?C(c,i):A(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===L&&(this._remaining--,2===t?C(r,n):this._result[e]=n),0===this._remaining&&T(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;M(t,void 0,(function(t){return n._settledAt(1,e,t)}),(function(t){return n._settledAt(2,e,t)}))},t}();var O=function(){function e(t){this[S]=k++,this._result=this._state=void 0,this._subscribers=[],E!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){x(t,e)}),(function(e){C(t,e)}))}catch(e){C(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this,r=n.constructor;return t(e)?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();return O.prototype.then=w,O.all=function(t){return new D(this,t).promise},O.race=function(t){var n=this;return e(t)?new n((function(e,r){for(var o=t.length,i=0;i<o;i++)n.resolve(t[i]).then(e,r)})):new n((function(t,e){return e(new TypeError("You must pass an array to race."))}))},O.resolve=b,O.reject=function(t){var e=new this(E);return C(e,t),e},O._setScheduler=function(t){i=t},O._setAsap=function(t){s=t},O._asap=s,O.polyfill=function(){var t=void 0;if(void 0!==n.g)t=n.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=O},O.Promise=O,O}()},746:()=>{window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";n(746);function t(t,e){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="",console.log(e),e&&clearInterval(e)}function e(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}n(702).polyfill(),window.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>t(".modal",n)),5e4);(function(t,e,n,r){const o=document.querySelectorAll(t),i=document.querySelectorAll(e),s=document.querySelector(n);function c(){i.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),o.forEach((t=>{t.classList.remove(r)}))}function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;i[t].classList.add("show","fade"),i[t].classList.remove("hide"),o[t].classList.add("tabheader__item_active")}c(),a(),s.addEventListener("click",(e=>{const n=e.target;n&&n.classList.contains(t.slice(1))&&o.forEach(((t,e)=>{n==t&&(c(),a(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(t,e){function n(t){return t>=0&&t<10?`0${t}`:t}!function(t,e){const r=document.querySelector(t),o=r.querySelector("#days"),i=r.querySelector("#hours"),s=r.querySelector("#minutes"),c=r.querySelector("#seconds"),a=setInterval(l,1e3);function l(){const t=function(t){let e,n,r,o;const i=Date.parse(t)-Date.parse(new Date);return i<=0?(e=0,n=0,r=0,o=0):(Date.parse(new Date),e=Math.floor(i/864e5),n=Math.floor(i/36e5%24),r=Math.floor(i/6e4%60),o=Math.floor(i/1e3%60)),{total:i,days:e,hours:n,minutes:r,seconds:o}}(e);o.innerHTML=n(t.days),i.innerHTML=n(t.hours),s.innerHTML=n(t.minutes),c.innerHTML=n(t.seconds),t.total<=0&&clearInterval(a)}l()}(t,e)}(".timer","2023-05-11"),function(n,r,o){const i=document.querySelectorAll(n),s=document.querySelector(r);i.forEach((e=>{e.addEventListener("click",(()=>t(r,o)))})),s.addEventListener("click",(t=>{t.target!==s&&""!=t.target.getAttribute("data-close")||e(r)})),document.addEventListener("keydown",(t=>{"Escape"==t.code&&s.classList.contains("show")&&e(r)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(t(r,o),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",n),function(){new class{constructor(t){this.menuCardSelector=t,this.menuItemIs=document.querySelectorAll(this.menuCardSelector)}del(){this.menuItemIs.forEach((t=>{t.remove()}))}}(".menu__item").del();class t{constructor(t,e,n,r,o,i){this.src=t,this.alt=e,this.title=n,this.descr=r,this.price=o;for(var s=arguments.length,c=new Array(s>6?s-6:0),a=6;a<s;a++)c[a-6]=arguments[a];this.classes=c,this.parent=document.querySelector(i),this.transfer=27,this.changeToUAN()}changeToUAN(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.classes="menu__item",t.classList.add(this.classes)):this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.title} - ${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n                `,this.parent.append(t)}}axios.get("http://localhost:3000/menu").then((e=>{e.data.forEach((e=>{let{img:n,altimg:r,title:o,descr:i,price:s}=e;new t(n,r,o,i,s,".menu .container").render()}))}))}(),function(n,r){function o(n){const o=document.querySelector(".modal__dialog");o.classList.add("hide"),t(".modal",r);const i=document.createElement("div");i.classList.add("modal__dialog"),i.innerHTML=`\n            <div class='modal__content'>\n                <div data-close class="modal__close">&times;</div>\n                <div class="modal__title">${n}</div>\n            </div>\n        `,document.querySelector(".modal").append(i),setTimeout((()=>{i.remove(),o.classList.add("show"),o.classList.remove("hide"),e(".modal")}),5e3)}document.querySelectorAll(n).forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();let n=document.createElement("img");n.src="img/Forms/spinner.svg",n.style.cssText="     \n                display: block;\n                margin: 0 auto;\n            ",e.insertAdjacentElement("afterend",n);const r=new FormData(e);(async(t,e)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(r.entries()))).then((t=>{console.log(t),o("Спасибо! Скоро мы с Вами свяжемся."),n.remove()})).catch((()=>{o("Что-то пошло не так...")})).finally((()=>{e.reset()}))}))})),fetch("http://localhost:3000/menu").then((t=>t.json())).then((t=>console.log(t)))}("form",n),function(t){let{container:e,slide:n,nextArrow:r,prevArrow:o,totalCounter:i,currentCounter:s,wrapper:c,field:a}=t;const l=document.querySelectorAll(n),u=document.querySelector(e),d=document.querySelector(o),h=document.querySelector(r),f=document.querySelector(i),m=document.querySelector(s),v=document.querySelector(c),p=document.querySelector(a),g=window.getComputedStyle(v).width;let _=1,y=0;console.log(v),console.log(g),l.length<10?(f.textContent=`0${l.length}`,m.textContent=`0${_}`):(f.textContent=l.length,m.textContent=_),p.style.width=100*l.length+"%",p.style.display="flex",p.style.transition="0.5s all",v.style.overflow="hidden",l.forEach((t=>{t.style.width=g})),u.style.position="relative";const w=document.createElement("ol"),b=[];w.classList.add("carousel-indicators"),w.style.cssText="\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 15;\n    display: flex;\n    justify-content: center;\n    margin-right: 15%;\n    margin-left: 15%;\n    list-style: none;\n    ",u.append(w);for(let t=0;t<l.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText="\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n            ",0==t&&(e.style.opacity=1),w.append(e),b.push(e)}function S(){l.length<10?m.textContent=`0${_}`:m.textContent=_}function E(){b.forEach((t=>t.style.opacity=".5")),b[_-1].style.opacity="1"}function L(t){return+t.replace(/\D/g,"")}h.addEventListener("click",(()=>{y==L(g)*(l.length-1)?y=0:y+=L(g),p.style.transform=`translateX(-${y}px)`,_==l.length?_=1:_++,S(),E()})),d.addEventListener("click",(()=>{0==y?y=L(g)*(l.length-1):y-=L(g),p.style.transform=`translateX(-${y}px)`,1==_?_=l.length:_--,S(),E()})),b.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");_=e,y=L(g)*(e-1),p.style.transform=`translateX(-${y}px)`,S(),E()}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"}),function(){const t=document.querySelector(".calculating__result span");let e,n,r,o,i;function s(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function c(){t.textContent=e&&n&&r&&o&&i?"female"===e?Math.round((447.6+9.2*r+3.1*n-4.3*o)*i):Math.round((88.36+13.4*r+4.8*n-5.7*o)*i):"____"}function a(t,n){const r=document.querySelectorAll(t);r.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(i=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),console.log(i,e),r.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),c()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":r=+e.value;break;case"age":o=+e.value}c()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?i=localStorage.getItem("ratio"):(i=1.375,localStorage.setItem("ratio",1.375)),s("#gender div","calculating__choose-item_active"),s(".calculating__choose_big div","calculating__choose-item_active"),c(),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}()}))})()})();
=======
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import { getResource } from "..servises/servises"; // Установлена библиотека Axios мз 91 урока


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
    /*const getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        } 
        return await res.json(); 
    };   */
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _servises_servises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servises/servises */ "./js/servises/servises.js");




function forms(formSelector, modalTimerId) { //Lec_104 17:50, 19:20 Довавляем аргумент modalTimerId после модульного разделения.
    // Forms

    const forms = document.querySelectorAll(formSelector);//Lec_104 19:20.

    const message = {
        loading: /*'Загрузка'$Лекция 85. 16:55.$*/'img/Forms/spinner.svg',   //Лекция 85. 16:55.
        success: 'Спасибо! Скоро мы с Вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };
    
    forms.forEach(item => {
        bindPostData(item);
    });
    
    //Lec_90 4:05. //Lec_104 20:25 Переносим postData из forms в servises.js

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
            (0,_servises_servises__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json) // Lec_90 11:25, 15:50
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

        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId); //Lec_104 17:30. Довавляем аргумент '.modal' после модульного разделения.
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
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal'); //Lec_104 17:10. Довавляем аргумент '.modal' после модульного разделения.
            
        }, 5000);
        
    }
    //Лекция 89 12:50
    fetch('http://localhost:3000/menu') //Лекция 89 17:40
        .then(data => data.json())
        .then(res => console.log(res));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field} ) { //Lec_104 29:00  Используем деструктуризацию.
    //Lec_92 Организация Слайдера. See lec 92 by myself.
    //Lec_93. Carousel (Взамен лекции 92.). Вариант слайдера в виде карусели.
    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container), //Lec_94. 2:00 Создаем контейнер для слайдера.
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) { //23:25. Подставляем аргуметы в вызов функции в script
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
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
        if (target && target.classList.contains(tabsSelector.slice(1))) { //24:30. В script подставлен селектор с точкой, поэтому надо точку из аргумента убрать.
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {  //Lec_104 26:00
    ///// Timer.
    //Получение данных для таймера
    // const deadline = '2023-05-11'; //Lec_104 26:00, удаляем т.к. есть deadline

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
    setClock(id, deadline); //Lec_104 26:00
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/servises/servises.js":
/*!*********************************!*\
  !*** ./js/servises/servises.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {//Lec_90 4:05. //Lec_104 20:25 Переносим postData из forms в servises.js
    const res = await fetch(url, {//Lec_90 5:05
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json(); 
};    

// const getResource = async (url) => { // Установлена библиотека Axios мз 91 урока
//     const res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status ${res.status}`);
//     } 
//     return await res.json(); 
// };   




// export { getResource };

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");


// Tabs
 //Lec_102. webpack.//Lec_104 Изменения для export default: from.
// Timer.

// Modal window. Лекция 72

// Карточки продуктов меню.Лекция 79.

// Forms    

// Lec_92 Организация Слайдера. See lec 92 by myself.
// Lec_93. Carousel (Взамен лекции 92.). Вариант слайдера в виде карусели.

// Calc Lec_97. 3:50

//Lec_104 15:40




window.addEventListener('DOMContentLoaded', () => {

      const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)('.modal', modalTimerId), 50000);  //Lec_104 14:40
      (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active'); //Lec_102. 24:25 Lec_104 8: 23:25
      (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])('.timer', '2023-05-11'); //Lec_104 25:35
      (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modal]', '.modal', modalTimerId); //Lec_104 8:40, 15:40
      (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
      (0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId);
      (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({ //Lec_104 30:00  Используем деструктуризацию, для передачи в модуль slider. Благодаря деструктуризации порядок не важен.
            container: '.offer__slider',
            slide: ".offer__slide",
            nextArrow: ".offer__slider-next",
            prevArrow: ".offer__slider-prev",
            totalCounter: '#total',
            currentCounter: '#current',
            wrapper: '.offer__slider-wrapper',
            field: '.offer__slider-inner'
      });
      (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])();      
});



})();

/******/ })()
;
>>>>>>> master
//# sourceMappingURL=bundle.js.map