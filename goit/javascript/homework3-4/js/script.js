var test = {
  form: function() {
    var forma = document.createElement('form');
    forma.classList.add('test-form');
    var body = document.body || getElementsByTagName('body')[0];
    body.insertBefore(forma, body.childNodes[0]);

    var box = document.createElement('ol');
    box.classList.add('list');
    var forma = document.querySelector('.test-form');
    forma.appendChild(box);
    box.style.fontSize = "20px";
    box.style.fontWeight = "bold";
  },

  title: function() {
    var titleName = document.createElement('h2');
    titleName.innerHTML = 'Тест по программированию';
    var forma = document.getElementsByClassName('test-form')[0];
    forma.insertBefore(titleName, forma.childNodes[0]);
    titleName.setAttribute("style","text-align: center; margin-bottom: 40px;");
    forma.setAttribute("style","max-width: 900px; margin: 0 auto");
  },

  checkbox: function(checkboxLabel, questionId, checkboxId) {
      var p = document.createElement('p');
      p.classList.add('paragraph' + checkboxId);
      var check = document.querySelector('.checkbox' + questionId);
      check.appendChild(p);

      var input = document.createElement('input');
      var p = document.querySelector('.paragraph' + checkboxId);
      check.appendChild(input);
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', 'check' + checkboxId);
      p.appendChild(input);

      var label = document.createElement('label');
      label.classList.add('label');
      label.innerHTML = checkboxLabel;
      var p = document.querySelector('.paragraph' + checkboxId);
      p.appendChild(label);
      label.setAttribute('for', 'check' + checkboxId);
      label.setAttribute("style","color: #000; font-size: 16px; font-weight: normal;");
  },

  question: function(questionText, questionId) {
    var boxName = document.createElement('li');
    var questionTitle = document.createElement('div');
    questionTitle.innerHTML = questionText;

    var list = document.querySelector('.list');
    list.appendChild(boxName);

    var check = document.createElement('div');
    var forma = document.querySelector('.test-form');
    check.classList.add('checkbox' + questionId);

    boxName.appendChild(questionTitle);
    boxName.appendChild(check);
  },

  submit: function() {
    var button = document.createElement('button');
    button.classList.add('btn' , 'btn-info');
    button.innerHTML = 'Проверить мои результаты';
    var forma = document.querySelector('.test-form');
    forma.appendChild(button);
    button.setAttribute("style","display: inherit; margin: 30px auto; font-size: 22px;");
  }
}

test.form();
test.title();

test.question('Вопрос №1', 1);
test.checkbox('Вариант ответа №1', 1, 1);
test.checkbox('Вариант ответа №2', 1, 2);
test.checkbox('Вариант ответа №3', 1, 3);

test.question('Вопрос №2', 2);
test.checkbox('Вариант ответа №1', 2, 4);
test.checkbox('Вариант ответа №2', 2, 5);
test.checkbox('Вариант ответа №3', 2, 6);

test.question('Вопрос №3', 3);
test.checkbox('Вариант ответа №1', 3, 7);
test.checkbox('Вариант ответа №2', 3, 8);
test.checkbox('Вариант ответа №3', 3, 9);

test.submit();
