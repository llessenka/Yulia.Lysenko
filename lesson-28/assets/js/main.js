//  Мінімум

function task1() {
    const num = parseInt(document.getElementById('task_1').value);
    let rez;
    if(num < 0 || num == '' || num > 100) {
        rez = 'Incorrect';
    }
    if(num >= 0 && num < 12) {
        rez = 'Child';
    }
    if(num >= 12 && num < 18) {
        rez = 'Teenager';
    }
    if(num >= 18 && num < 59) {
        rez = 'Adult';
    }
    if(num >= 60 && num <=100) {
        rez = 'Retiree';
    }

    document.getElementById('task_1_result').innerText = rez;
}

function task2() {
    const num = document.getElementById('task_2').value;
    let rez;
    switch(num) {
        case '1':
            rez = `!`;
            break;
        case '2':
            rez = `@`;
            break;
         case '3':
            rez = `#`;
            break;   
        case '4':
            rez = `$`;
            break;
        case '5':
            rez = `%`;
            break;  
        case '6':
            rez = `^`;
            break;  
        case '7':
            rez = `&`;
            break;
        case '8':
             rez = `*`;
            break;
        case '9':
            rez = `(`;
            break; 
        case '0':
            rez = `)`;
            break;  
        default:
            rez = 'Wrong number';
            break;       
    }
    document.getElementById('task_2_result').innerText = rez;
}

function task3() {
    const num1 = parseInt(document.getElementById('task_3-1').value);
    const num2 = parseInt(document.getElementById('task_3-2').value);
    const minNum = num1 < num2 ? num1 : num2;
    const maxNum = num1 > num2 ? num1 : num2;
    let rez = 0;
    let i = minNum;
    while (i <= maxNum) {
        rez += i;
        i++;
    }
    document.getElementById('task_3_result').innerText = rez;
}

function task4() {
    const num1 = parseInt(document.getElementById('task_4-1').value);
    const num2 = parseInt(document.getElementById('task_4-2').value);
    const minNum = num1 < num2 ? num1 : num2;
    let i = minNum;
    while (i > 0) {
        if ((num1 % i == 0) && (num2 % i == 0)) {
            document.getElementById('task_4_result').innerText = i;
            break;
        }
        i--;
    }
}

function task5() {
    const num = parseInt(document.getElementById('task_5').value);
    let i = num;
    let rez = '';
    while (i > 0) {
        if (num % i == 0) {
           rez += i + ' ';
        }
        i--;   
    }
    document.getElementById('task_5_result').innerText = rez;
}

//  Норма

function task8() {
    let dodatni = 0,
        videmni = 0,
        nuli = 0,
        parni = 0,
        neparni = 0;
        result = '',
        number = 0,
        allNumbers = '',
        i = 0;
    const limit = 10;
    while(i < limit) {
        number = parseInt(prompt('Enter a number'));
        if(!isNaN(number)) {
            allNumbers += number + ' , ';
            if(number === 0) {
                nuli++;
            } else {
                if(number > 0) {
                    dodatni++;
                } else {
                    videmni++;
                }
            }
        } if(number % 2 === 0) {
            parni++;
        } else {
            neparni++;
        }
        i++;
     
    }
    result = `Додатні: ${dodatni}, Від'ємні: ${videmni} , Нулі: ${nuli} , Парні: ${parni} , Непарні: ${neparni} `
    document.getElementById('task_8_result').innerHTML = allNumbers + '<br>' + result;
}

function task9() {
    let answer = true;
    let i = 0;
    let day;
    while (answer === true) {
        i++;
        switch (i) {
            case 1:
                day = 'Monday';
                break;
            case 2:
                day = 'Tuesday';
                break;
            case 3:
                day = 'Wednesday';
                break;
            case 4:
                day = 'Thursday';
                break;
            case 5:
                day = 'Friday';
                break;
            case 6:
                day = 'Saturday';
                break;
            case 7:
                day = 'Sunday';
                i = 0;
                break;
        }
        answer = confirm(`Day of week: ${day}. Do you want to see next day?`)
    }
}

//  Максимум

function task10() {
    let from = 0,
        mid = 50,
        to = 100;
    do {
        answer = prompt (`Your number < ${mid}? Answer: '>' вбо '<' або '='`);
        if(answer == '>') {
            from = mid;
            mid = Math.floor(((to - from) / 2) + mid);
        }
        if(answer == '<') {
            to = mid;
            mid = Math.floor(((to - from) / 2) + from);
        }
    }
        while (answer !== '=') {
            alert(`Your number is${mid}`);
        }
       
}

function task11() {
    let r = '<div style="display:flex; flex-wrap:wrap; gap:30px;"> ';
    for(let i = 2; i <= 9; i++) {
        r += '<ul>';
        for(let j = 1; j <= 10; j++) {
            r += '<li>' + i + ' * ' + j + ' = ' + (i * j) + '</li>';
        }
        r += '</ul>';
    }
    r += '</div>';
    document.getElementById('task_11_result').innerHTML = r;
}

function task12() {
    let day = parseInt(document.getElementById('task_12-1').value);
    let month = parseInt(document.getElementById('task_12-2').value);
    let year = parseInt(document.getElementById('task_12-3').value);
    let d;

    switch(day) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            d = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            d = 30;
            break;
        case 2: 
            d = (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) ? 29 : 28;
            break;
        default:
            d = 'Invalid value';
            break;       
    }

    if(month == 12 && day == 31) {
        day = 1;
        month = 1;
        year += 1;
    } else {
         if(d = day) {
            day = 1;
            month += 1;
        } else {
            day += 1;
        }
    }

    document.getElementById('task_12_result').innerText=`Next day will be: ${day}.${month}.${year}`;
}