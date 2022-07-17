let a = +prompt('Введите цифру:');
let b = +prompt("Введите степень");
while(a == isNaN || a == 0) {
    alert('Ошибка "a" не является цифрой');
    break;
} 

while(b == isNaN || b == 0) {
    b = 2;
    break;  
} 

let c = alert(a**b);

