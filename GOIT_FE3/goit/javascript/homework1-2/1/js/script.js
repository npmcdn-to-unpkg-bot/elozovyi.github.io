function pow(a, n) {
  var a = prompt ('Введите число');
  var n = prompt ('Введите степень');
  
  var result = 1;

  for(var i = 0; i <n; i++) {
    result = result * a;
  }

  return(result);
}

var calcResult = pow();
console.log('result = ', calcResult);