let result = document.getElementById('result');
let history = document.getElementById('history');
let first = 0;
let second = 0;
let d = '';
let firstCulc = true;

function append(num){
    result.value = result.value + num;
}

function sum() {
    d = 'sum';
    first = parseFloat(result.value);
    history.value = result.value + '+ ';
    result.value = '';
}

function equals() {
    second = parseFloat(result.value);
    history.value = history.value + second;
    if (d == 'sum'){
        result.value = first + second;
    }

    if (d == 'divide'){
        result.value = first / second;
    }

    if (d == 'multiply'){
        result.value = first * second;
    }

    if (d == 'minus'){
        result.value = first - second;
    }
}

function divide(){
    d = 'divide';
    first = parseFloat(result.value);
    history.value = result.value + '/ ';
    result.value = '';
}

function multiply(){
    d = 'multiply';
    first = parseFloat(result.value);
    history.value = result.value + '*';
    result.value = '';
}

function minus(){
    d = 'minus';
    first = parseFloat(result.value);
    history.value = result.value + '-';
    result.value = '';
}

function clear() {
    d = '';
    history.value = '';
    result.value = '';
    first = 0;
    second = 0;
}