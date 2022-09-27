document.addEventListener('DOMContentLoaded', () => {

    // Задача
    // Дан элемент #elem. Добавьте ему класс student.
    // Дан элемент #elem c классом student. Удалите у него класс student.
    // Дан элемент #elem. Проверьте наличие у него класса student.
    // Дан элемент #elem. Добавьте ему класс student, если его нет и удалите - если есть.

    // const ELEM = document.querySelector('#elem');
    // console.log(ELEM);
    // ELEM.classList.add('student');
    // console.log(ELEM);
    // const EL = document.querySelector('#el');
    // console.log(EL);
    // EL.classList.remove('group');
    // console.log(EL);
    // console.log(ELEM.classList.contains('student'));
    // ELEM.classList.toggle('student');
    // console.log(ELEM);
    // EL.classList.toggle('group');
    // console.log(EL);

    // Задача
    // Дан элемент #elem с классами student, user, admin. 
    // Узнайте количество его классов. 
    // У элемента может быть любое количество классов, 
    // нужно получать текущее количество.
    // console.log(ELEM);
    // console.log(ELEM.classList.length);
    // console.log(ELEM.classList);


    // Задача
    // Даны картинки. Привяжите к каждой картинке событие, 
    // чтобы по клику на картинку alert выводил ее src.
    // <img src="img/1.jpg">
    // <img src="img/2.jpg">
    // <img src="img/3.jpg">

    // const ELEM = document.getElementsByTagName('img');
    // for (let i = 0; i < ELEM.length; i++) {
    //     ELEM[i].onclick = getSrc;
    // }

    // function getSrc() {
    //     alert(this.getAttribute('src'));
    // }

    // Задача
    // Даны ссылки. Привяжите всем ссылкам событие - 
    // по наведению на ссылку в атрибут title запишется ее текст.
    // <a href="#" title="">Текст первой ссылки</a>
    // <a href="#" title="">Текст второй ссылки</a>
    // <a href="#" title="">Текст третьей ссылки</a>


    // const ELEM = document.getElementsByTagName('a');

    // for (let i = 0; i < ELEM.length; i++) {
    //     ELEM[i].addEventListener('mouseover', addTitle);
    // }

    // function addTitle() {
    //     this.title = this.innerHTML;
    // }

    // Задача
    // Привяжите всем ссылкам событие - по наведению на ссылку 
    // в конец ее текста дописывается ее href в круглых скобках.

    // const ELEM = document.getElementsByTagName('a');
    // for (let i = 0; i < ELEM.length; i++) {
    //     ELEM[i].addEventListener('mouseover', addHref, { once: true });
    // }
    // function addHref() {

    //     this.innerHTML = this.innerHTML + '(' + this.href + ')';

    // }


   




    // // Мінімум 1
    // let a = 0.1;
    // let b = 0.2;
    // let sum = a + b;
    // console.log(+sum.toFixed(1));

    // // Мінімум 2
    // let x = '1';
    // let y = 2;
    // console.log(+x + y);

    // // Мінімум 3
    // let size = prompt('Який обсяг твоєї флешки? (Гб)', '');
    // let files = Math.floor(size * 1024 / 820);
    // alert(`Ти можеш завантажити ${files} файлів обсягом 820Мб`);

    // //Норма 1

    // let money = prompt('Яка сума грошей у тебе є? (ціна у грн)', '');
    // let price = prompt('Вкажи, будь ласка, ціну за одну шоколадку (ціна у грн)', '');
    // let count = Math.floor(money / price);
    // let moneyLeft = money % price;
    // alert(`Ти можеш купити ${count} шоколадок. У твоєму гаманці залишилось ${moneyLeft} гривень.`);

    // //Норма 2

    // let number = prompt('Введіть тризначне число', '');
    // let z = number % 10;
    // let v = (number / 100).toFixed(0);
    // let w = (number - (v * 100) - z) / 10;

    // alert(`Yor revers number is ${z}${w}${v}`);


    // //Максимум 1

    // let deposit = +prompt('Введи суму в гривнях, яку ти хочеш покласти в банк під 5% річних', '');
    // let percent = deposit * 0.05 / 6;
    // let total = deposit + percent;

    // alert(`After 2 month you get ${percent}`);

});