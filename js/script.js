document.addEventListener('DOMContentLoaded', () => {

    // Мінімум 1
    let a = 0.1;
    let b = 0.2;
    let sum = a + b;
    console.log(+sum.toFixed(1));

    // Мінімум 2
    let x = '1';
    let y = 2;
    console.log(+x + y);

    // Мінімум 3
    let size = prompt('Який обсяг твоєї флешки? (Гб)', '');
    let files = Math.floor(size * 1000 / 820);
    alert(`Ти можеш завантажити ${files} файлів обсягом 820Мб`);

    //Норма 1

    let money = prompt('Яка сума грошей у тебе є? (ціна у грн)', '');
    let price = prompt('Вкажи, будь ласка, ціну за одну шоколадку (ціна у грн)', '');
    let count = Math.floor(money / price);
    let moneyLeft = money % price;
    alert(`Ти можеш купити ${count} шоколадок. У твоєму гаманці залишилось ${moneyLeft} гривень.`);

    //Норма 2

    let number = prompt('Введіть тризначне число', '');
    let z = number % 10;
    let w = number[1] % 10;
    let v = number[0] % 10;

    alert(`Yor revers number is ${z}${w}${v}`);


    //Максимум 1

    let deposit = +prompt('Введи суму в гривнях, яку ти хочеш покласти в банк під 5% річних', '');
    let percent = deposit * 0.05 / 6;
    let total = deposit + percent;

    alert(`After 2 month you get ${total}`);

});