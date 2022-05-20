function checkIntValue(value) {
    if (value === '') {
        return false;
    }
    value = parseInt(value);
    if (isNaN(value)) {
        return false;
    }
    return value;
}

function showResult(rez, resId) {
    document.getElementById(resId).innerText = rez;
}


// Напиши функцію, яка приймає 2 числа і повертає :
//    -1, якщо перше число менше, ніж друге;
//    1 - якщо перше число більше, ніж друге;
//    0 - якщо числа рівні.


function checkTwoNum(a = 0, b = 0) {
    let r = 0;
    if(a > b) {
        r = true;
    }
    if(a < b) {
        r = false;
    }
    return r;
}

function task1() {
    const firstNum = checkIntValue(document.getElementById('task_1_number1').value);
    const secNum = checkIntValue(document.getElementById('task_1_number2').value);
    let rez = 0;
    if(firstNum !== false && secNum !== false) {
        if(checkTwoNum(firstNum, secNum) === true) {
            rez = 1;
        }
        if(checkTwoNum(firstNum, secNum) === false) {
            rez = -1;
        }
    } else {
        rez = 'Enter correct number';
    }
    showResult(rez, 'task_1_result');
}

// Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(n) {
    if(n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function task2() {
    const num = checkIntValue(document.getElementById('task_2_number').value);
    let rez;
    if(num != false) {
        rez = factorial(num);
    } else {
        rez = 'Enter correct number';
    }
    showResult(rez, 'task_2_result');
}

//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри
//1, 4, 9 перетворяться в число 149.

function ThreeNumTogether(a = 1, b = 1, c = 1) {
    const rez = (a * 100) + (b * 10) + c;
    return rez;
}

function task3() {
    const num1 = checkIntValue(document.getElementById('task_3_number1').value);
    const num2 = checkIntValue(document.getElementById('task_3_number2').value);
    const num3 = checkIntValue(document.getElementById('task_3_number3').value);
    let rez;
    if(num1 != false && num2 != false && num3 != false) {
        rez = ThreeNumTogether(num1, num2, num3)
    } else {
        rez = 'Enter correct number';
    }
    showResult(rez, 'task_3_result');
}

//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
//Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function rectangleArea(a, b) {
    if(b == '') {
        b = a;
    }
    if(a == '') {
        a = b;
    }
    let c = a * b;
    return c;
}

function task4() {
    const num1 = checkIntValue(document.getElementById('task_4_number1').value);
    const num2 = checkIntValue(document.getElementById('task_4_number2').value);
    let rez;
    if(num1 === '' && num2 === '') {
        rez = 'Enter at least one number';
    } else {
        rez = rectangleArea(num1, num2);
    }
    showResult(rez, 'task_4_result');
}

//Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число -
//це число, яке дорівнює сумі всіх своїх дільників.

function getAndCheck(inputId = '') {
    let number = document.getElementById(inputId).value;
    if(number !== '') {
        number = parseInt(number);
        if(!isNaN(number)) {
            return number;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function showResult(result, whereId) {
    document.getElementById(whereId).innerHTML = result; 
}

function isNumberPerfect(n) {
    let sum = 0;
    for(let i = 1; i < n; i++) {
        if(n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}

function task5() {
    let num = 0,
        rez = '';
    if(getAndCheck('task_5_number') !== false) {
        num = getAndCheck('task_5_number');
    } else {
        return false;
    }  
    if(isNumberPerfect(num)) {
        rez = `Number ${num} is perfect`;
    } else {
        rez = `Number ${num} is not perfect`;
    }
    showResult(rez, 'task_5_result');
}

//Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить
//тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб
//дізнатися, чи є це число досконалим.

function perfectNumInRange(minNum, maxNum) {
    let rez = '';
    let i;
    for(i = minNum; i <= maxNum; i++) {
        if(i > 0 && isNumberPerfect(i)) {
            rez += i + ', ';
        }
    }
    return rez;
}

function task6() {
    const num1 = checkIntValue(document.getElementById('task_6_number1').value);
    const num2 = checkIntValue(document.getElementById('task_6_number2').value);
    if (num1 === false || num2 === false) {
        showResult('Enter correct numbers', 'task_6_result');
        return;
    }
    if (num1 > num2) {
        showResult('Numbers entered incorrectly', 'task_6_result');
        return;
    }
    if (perfectNumInRange(num1, num2) === '') {
        showResult('There are no perfect numbers in the given range', 'task_6_result');
        return;
    } else {
        const rez = perfectNumInRange(num1, num2);
        showResult(rez, 'task_6_result');
        return;
    }

}