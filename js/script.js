/*
Let - объявляет локальную переменную
const - неизменяемая переменная
get - получить
set - установить
*/

let result = document.getElementById('result');
let history = document.getElementById('history');
let first = 0;
let second = 0;
let d = '';
let firstCulc = true;
let hasDot = false;

function append(num) {
    if (num == '.'){

        if(hasDot == true){
            return;
        }

        if (result.value == ''){
            num = '0.';
        }

        hasDot == true;
    }
    result.value = result.value + num;
}

function sum() {
    d = 'sum';
    first = parseFloat(result.value);
    history.value = result.value + '+';
    result.value = '';
}

function equals() {
    second = parseFloat(result.value);
    history.value = history.value + second;
    if (d == '+'){
        result.value = first + second;
    }

    if (d == '/'){
        result.value = first / second;
    }

    if (d == '*'){
        result.value = first * second;
    }

    if (d == '-'){
        result.value = first - second;
    }
}

function clearCe() {
    d = '';
    history.value = '';
    result.value = '';
    first = 0;
    second = 0;
    hasDot = false;
}

function clearC() {
    result.value = '';
    second = 0;
    hasDot = false;
}

function actionCalculate(sign) {
    d = sign;
    first = parseFloat(result.value);
    history.value = result.value + sign;
    result.value = '';
    hasDot = false;
}

/*
var a = 5;
test(10,a);
test(15);

function test(b,c){
    console.log(b);
    console.log(c);
}

test(20);

function sing(b,c){
    let a = 'b + c;
    return a;
}

console.log(sing(10,15));*/