var start = document.getElementById('startTimer'),
    watch = document.getElementById('stopwatch'),
    msecDiv = document.getElementById('msec'),
    reset = document.getElementById('resetTimer'),
    split = document.getElementById('splitTimer'),
    log = document.getElementById('timerLog'),
    timerId;

start.addEventListener('click', function() {
  if (start.value=="Start") {
    // Кнопка меняет текст на стоп, запуск таймера
    start.value = "Stop";
    timerId = setInterval(timer, 5);
  } else {
    // Кнопка меняет текст на старт, остановка таймера, запись стопа в лог
    start.value = "Start";
    clearInterval(timerId);
    var round = document.createElement('li');
    round.innerHTML = 'Stop ' + watch.innerHTML + ':' + msecDiv.innerHTML;
    log.appendChild(round);
    }
});

// Запись Split to log
split.addEventListener('click', function() {
  var round = document.createElement('li');
  round.innerHTML = 'Split ' + watch.innerHTML + ':' + msecDiv.innerHTML;
  log.appendChild(round);
});

// Сброс секундомера
reset.addEventListener('click', function() {
  clearInterval(timerId);
  watch.innerHTML = '00:00:00';
  msecDiv.innerHTML = '000';
  log.innerHTML = '';
})

var hours = min = sec = msec = 0;
var decHours = decMin = decSec = decMsec = hundMsec = 0;

// Перенос разряда с единиц на десятки итд 00:00:00:000
function timer() {
  msec+=5;

  if (msec == 10) {
    msec = 0;
    decMsec++;
  }
  if (decMsec == 10) {
    decMsec = 0;
    hundMsec++;
  }
  if (hundMsec == 10) {
    hundMsec = 0;
    sec++;
  }
  if (sec == 10) {
    sec = 0;
    decSec++;
  }
  if (decSec == 6) {
    decSec = 0;
    min++;
  }
  if (min == 10) {
    min = 0;
    decMin++;
  }
  if (decMin == 6) {
    decMin = 0;
    hours++;
  }
  if (hours == 10) {
    hours = 0;
    decHours++;
  }

  watch.innerHTML = '' + decHours + hours + ':' + decMin + min + ':' + decSec + sec;
  msecDiv.innerHTML = '' + hundMsec + decMsec + msec;
}
