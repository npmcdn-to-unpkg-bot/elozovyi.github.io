// 1.  Реализуйте задачу светофор. Сверстайте три вертикально
// расположенных контейнера и разместите в них по элементу(красный,
//     желтый, зеленый соответственно).
//
// Ниже реализуйте панель с тремя кнопками, которые будут
// при нажатии переводить светофор в соответствующие режимы:
// 1. Движение запрещено(горит только красный)
// 2. Проезд разрешен(горит только зеленый)
// 3. Нерегулируемый участок(горит/мигает желтый)
//
// "Загорание" элементов реализуйте на свое усмотрение, это может
// быть легкое затухание  или полная потеря цвета.
//
// Приветствуются улучшения светофора на усмотрение.
//
// К примеру при переключении цвет сперва мигает потом переключается
// согласно аналогу в реальной жизни.
//
// Или к примеру автономно работающий светофор. Светофор работает по
// определенному графику, при котором цвета переключаются самостоятельно.
// При этом у пользователя остается  возможность переключения цветов
// при помощи кнопок.

var button = document.querySelectorAll('.control a');
var light = document.querySelectorAll('.wrap');
console.log (button);
console.log (light);
button[0].onclick = function() {
    light[0].classList.add('red');
    light[1].classList.remove('yellow');
    light[2].classList.remove('green');
}
button[1].onclick = function() {
    light[0].classList.remove('red');
    light[1].classList.add('yellow');
    light[2].classList.remove('green');
}
button[2].onclick = function() {
    light[0].classList.remove('red');
    light[1].classList.remove('yellow');
    light[2].classList.add('green');
}

var trafficLights = function () {
    if (light[0].classList.contains('red')) {
        light[0].classList.remove('red');
        light[1].classList.add('yellow');
        light[2].classList.remove('green');
    } else if (light[1].classList.contains('yellow')) {
        light[1].classList.remove('yellow');
        light[2].classList.add('green');
    } else {
        light[0].classList.add('red');
        light[1].classList.remove('yellow');
        light[2].classList.remove('green');
    }
}

setInterval(trafficLights, 3000);
