/*
Let - объявляет локальную переменную
const - неизменяемая переменная
get - получить
set - установить
value - значение
== - сравнение
parseFloat - преобразовывает тип данных текст в тип данных float(цифровое значение с точкой)
*/

let result = document.getElementById('result');
let history = document.getElementById('history');           //Получаем элемент по id 'history' и записываем в переменную history этот элемент
let first = 0;
let second = 0;
let d = '';
let firstCulc = true;
let hasDot = false;

// Функция запускается когда пользователь нажимает на кнопку с цифрой или точкой 
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
    result.value = result.value + num;                  //Дописываю к значению value значение num
}

// Функция запускается когда пользователь нажимает на символы '+', '-', '/', '*'
function actionCalculate(sign) {
    d = sign;
    first = parseFloat(result.value);
    //equals();
    history.value = result.value + sign;
    clearC();

}

// Функция запускается когда пользователь нажимает на кнопку равно
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
    first = 0;
    clearC();
}

function clearC() {
    result.value = '';
    second = 0;
    hasDot = false;
}

function backspaceResult() {
    result.value = result.value.substring(0, result.value.length - 1);
}