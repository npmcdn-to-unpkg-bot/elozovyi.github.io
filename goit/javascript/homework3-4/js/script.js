var test = {
  wrapp: function() {
    var wrap = document.createElement('div');
    wrap.classList.add('wrapper');
    var body = document.body || getElementsByTagName('body')[0];
    body.insertBefore(wrap, body.childNodes[0]);
  },

  title: function() {
    var titleName = document.createElement('h2');
    titleName.innerHTML = 'Тест по программированию';
    var wrapper = document.getElementsByClassName('wrapper')[0];
    wrapper.insertBefore(titleName, wrapper.childNodes[0]);
    titleName.setAttribute("style","text-align: center; margin-bottom: 40px;");
    wrapper.setAttribute("style","max-width: 900px; margin: 0 auto");
  },

  box1: function() {
    var box = document.createElement('ol');
    box.classList.add('list');
    var wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(box);
    box.style.fontSize = "20px";
    box.style.fontWeight = "bold";

    var boxName = document.createElement('li');
    boxName.innerHTML = 'Вопрос №1';
    var list = document.querySelector('.list');
    list.appendChild(boxName);

    var check = document.createElement('div');
    check.classList.add('checkbox');
    var wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(check);

    //checkbox1

    var p = document.createElement('p');
    p.classList.add('paragraph');
    var check = document.querySelector('.checkbox');
    check.appendChild(p);

    var input = document.createElement('input');
    var p = document.querySelector('.paragraph');
    check.appendChild(input);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'check1');
    p.appendChild(input);
    input.style.marginLeft = "40px";

    var label = document.createElement('label');
    label.classList.add('label');
    label.innerHTML = 'Вариант ответа №1';
    var p = document.querySelector('.paragraph');
    p.appendChild(label);
    label.setAttribute('for', 'check1');
    label.setAttribute("style","margin-left: 40px; color: #000; font-size: 16px;");

    //checkbox2

    var p = document.createElement('p');
    p.classList.add('paragraph2');
    var check = document.querySelector('.checkbox');
    check.appendChild(p);

    var input = document.createElement('input');
    var p = document.querySelector('.paragraph2');
    check.appendChild(input);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'check2');
    p.appendChild(input);
    input.style.marginLeft = "40px";

    var label = document.createElement('label');
    label.classList.add('label');
    label.innerHTML = 'Вариант ответа №2';
    var p = document.querySelector('.paragraph2');
    p.appendChild(label);
    label.setAttribute('for', 'check2');
    label.setAttribute("style","margin-left: 40px; color: #000; font-size: 16px;");

    //checkbox3

    var p = document.createElement('p');
    p.classList.add('paragraph3');
    var check = document.querySelector('.checkbox');
    check.appendChild(p);

    var input = document.createElement('input');
    var p = document.querySelector('.paragraph3');
    check.appendChild(input);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'check3');
    p.appendChild(input);
    input.style.marginLeft = "40px";

    var label = document.createElement('label');
    label.classList.add('label');
    label.innerHTML = 'Вариант ответа №3';
    var p = document.querySelector('.paragraph3');
    p.appendChild(label);
    label.setAttribute('for', 'check3');
    label.setAttribute("style","margin-left: 40px; color: #000; font-size: 16px;");
  },

  box2: function() {
    var box = document.createElement('ol');
    box.classList.add('list2');
    var wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(box);
    box.setAttribute('start', '2');
    box.style.fontSize = "20px";
    box.style.fontWeight = "bold";

    var boxName = document.createElement('li');
    boxName.innerHTML = 'Вопрос №2';
    var list = document.querySelector('.list2');
    list.appendChild(boxName);

    var check = document.createElement('div');
    check.classList.add('checkbox2');
    var wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(check);

    //checkbox4

    var p = document.createElement('p');
    p.classList.add('paragraph4');
    var check = document.querySelector('.checkbox2');
    check.appendChild(p);

    var input = document.createElement('input');
    var p = document.querySelector('.paragraph4');
    check.appendChild(input);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'check4');
    p.appendChild(input);
    input.style.marginLeft = "40px";

    var label = document.createElement('label');
    label.classList.add('label');
    label.innerHTML = 'Вариант ответа №1';
    var p = document.querySelector('.paragraph4');
    p.appendChild(label);
    label.setAttribute('for', 'check4');
    label.setAttribute("style","color: #000; font-size: 16px; font-weight: normal;");

    //checkbox5

    var p = document.createElement('p');
    p.classList.add('paragraph5');
    var check = document.querySelector('.checkbox2');
    check.appendChild(p);

    var input = document.createElement('input');
    var p = document.querySelector('.paragraph5');
    check.appendChild(input);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'check5');
    p.appendChild(input);
    input.style.marginLeft = "40px";

    var label = document.createElement('label');
    label.classList.add('label');
    label.innerHTML = 'Вариант ответа №2';
    var p = document.querySelector('.paragraph5');
    p.appendChild(label);
    label.setAttribute('for', 'check5');
    label.setAttribute("style","color: #000; font-size: 16px; font-weight: normal;");

    //checkbox6

    var p = document.createElement('p');
    p.classList.add('paragraph6');
    var check = document.querySelector('.checkbox2');
    check.appendChild(p);

    var input = document.createElement('input');
    var p = document.querySelector('.paragraph6');
    check.appendChild(input);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'check6');
    p.appendChild(input);
    input.style.marginLeft = "40px";

    var label = document.createElement('label');
    label.classList.add('label');
    label.innerHTML = 'Вариант ответа №3';
    var p = document.querySelector('.paragraph6');
    p.appendChild(label);
    label.setAttribute('for', 'check6');
    label.setAttribute("style","color: #000; font-size: 16px; font-weight: normal;");
  },

  box3: function() {
    var box = document.createElement('ol');
    box.classList.add('list3');
    var wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(box);
    box.setAttribute('start', '3');
    box.style.fontSize = "20px";
    box.style.fontWeight = "bold";

    var boxName = document.createElement('li');
    boxName.innerHTML = 'Вопрос №3';
    var list = document.querySelector('.list3');
    list.appendChild(boxName);

    var check = document.createElement('div');
    check.classList.add('checkbox3');
    var wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(check);

    //checkbox7

    var p = document.createElement('p');
    p.classList.add('paragraph7');
    var check = document.querySelector('.checkbox3');
    check.appendChild(p);

    var input = document.createElement('input');
    var p = document.querySelector('.paragraph7');
    check.appendChild(input);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'check7');
    p.appendChild(input);
    input.style.marginLeft = "40px";

    var label = document.createElement('label');
    label.classList.add('label');
    label.innerHTML = 'Вариант ответа №1';
    var p = document.querySelector('.paragraph7');
    p.appendChild(label);
    label.setAttribute('for', 'check7');
    label.setAttribute("style","color: #000; font-size: 16px; font-weight: normal;");

    //checkbox8

    var p = document.createElement('p');
    p.classList.add('paragraph8');
    var check = document.querySelector('.checkbox3');
    check.appendChild(p);

    var input = document.createElement('input');
    var p = document.querySelector('.paragraph8');
    check.appendChild(input);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'check8');
    p.appendChild(input);
    input.style.marginLeft = "40px";

    var label = document.createElement('label');
    label.classList.add('label');
    label.innerHTML = 'Вариант ответа №2';
    var p = document.querySelector('.paragraph8');
    p.appendChild(label);
    label.setAttribute('for', 'check8');
    label.setAttribute("style","color: #000; font-size: 16px; font-weight: normal;");

    //checkbox9

    var p = document.createElement('p');
    p.classList.add('paragraph9');
    var check = document.querySelector('.checkbox3');
    check.appendChild(p);

    var input = document.createElement('input');
    var p = document.querySelector('.paragraph9');
    check.appendChild(input);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'check9');
    p.appendChild(input);
    input.style.marginLeft = "40px";

    var label = document.createElement('label');
    label.classList.add('label');
    label.innerHTML = 'Вариант ответа №3';
    var p = document.querySelector('.paragraph9');
    p.appendChild(label);
    label.setAttribute('for', 'check9');
    label.setAttribute("style","color: #000; font-size: 16px; font-weight: normal;");
  },

  submit: function() {
    var button = document.createElement('button');
    button.classList.add('btn' , 'btn-info');
    button.innerHTML = 'Проверить мои результаты';
    var wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(button);
    button.setAttribute("style","display: inherit; margin: 30px auto; font-size: 22px;");
  }
}

test.wrapp();
test.title();
test.box1();
test.box2();
test.box3();
test.submit();
