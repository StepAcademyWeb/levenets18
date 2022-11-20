//task 1
function sum(x, y = 1) {
    alert(x + y)
}
sum(5, 10)

function diff(x, y) {
    alert(x - y)
}
diff(10, 5)

function multiply(a, b) {
    alert(a * b)
}
multiply(22, 2)

function division(x, y) {
    alert(x / y)
}
division(30, 3)

//task 2
function task2(n) {

    if (n===1)  {
      return false;
    }
    else if(n === 2)  {
      return true;
    } else   {
      for(var c = 2; c < n; c++)  {
        if(n % c === 0) {
          return false;
        }
      }
      return true;  
    }
  }
document.writeln(task2(29));

//task 3

// task 4
let num = '3'
let result = num
switch (result) {
case '1':
alert('Понедельник');
break;
case '2':
alert('Вторник');
break;
case '3':
alert('Среда');
break;
case '4':
alert('Четверг');
break;
case '5':
alert('Пятница');
break;
case '6':
alert('Суббота');
break;
case '7':
alert('Воскресенье');
break;
} 

//task 5
let a = 2;

if (a == 0 || a == 2) {
    a + 7
    alert(a);
}
else {
    a/=10
    alert(a);
} 

//task 6
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
  alert( fib(7) ); 
  alert( fib(2) ); 
  alert( fib(10) );

  //task 7
  function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  
  alert( sumTo(6) );

  //task 8
  function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert( factorial(7) );