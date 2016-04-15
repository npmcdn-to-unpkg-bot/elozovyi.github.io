  var users = [];

  for (var i = 0; i<5; i++) {
    users.push(prompt('Имя?'));
  }

  var name = '';
  var name = prompt('Введите имя пользователя');

  var index = users.indexOf(name);
  
  if (index >= 0) {
    alert(users[index] + ', Вы успешно вошли!');
  } else {
    alert ('Ошибка');
  }


