let display = document.getElementById('result');
let history = document.getElementById('history');

let numOne = null,
    numTwo = null,
    operator = null
    firstEnter = true;
    resultCalc = null;

// Функция добавляет текст в окно ввода
function appendDisplay(num) 
{
    if (num == '.'){

        if(hasDot == true){
            return;
        }

        if (result.value == ''){
            num = '0.';
        }

        hasDot == true;
    }

    display.value = result.value + num;
}

function calculate() 
{
    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);

    if (operator == '+'){
        resultCalc = numOne + numTwo;
    }

    if (operator == '/'){
        resultCalc = numOne / numTwo;
    }

    if (operator == '*'){
        resultCalc = numOne * numTwo;
    }
    if (operator == '-'){
        resultCalc = numOne - numTwo;
    }
}

function onClickButtonOperator(btn) {
    display.value = ''
    firstEnter = false;

    if (numOne != null && operator != null && numTwo != null) {

        calculate();
        display.value = resultCalc;
        numOne = resultCalc;
        numTwo = null;
        operator = null;
    }
    
    operator = btn.dataset.operator;

    history.value = numOne == null ? '' : numOne;
    history.value += operator == null ? '' : operator;
    history.value += numTwo == null ? '' : numTwo;
}

function onClickButtonNum(btn) {
    appendDisplay(btn.dataset.num);

    if (firstEnter) {
        numOne = display.value;
        return;
    }

    if (resultCalc != null) {
        resultCalc = null;
        display.value = null;
        appendDisplay(btn.dataset.num)
    }

    numTwo = display.value;
}

// На клик по кнопке
function onClickButton(btn) {
    if (typeof (btn.dataset.num) != 'undefined') {
        onClickButtonNum(btn);
    }

    if (typeof (btn.dataset.operator) != 'undefined') {
        onClickButtonOperator(btn)
    }
}