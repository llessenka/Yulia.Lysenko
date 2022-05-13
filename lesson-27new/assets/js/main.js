//  Минимум

function addition(){
   const x = 0.1;
   const y = 0.2;
   const z = x + y;
   const rez = z.toFixed(1);
   alert(rez);
}

function addition2() {
    const x = parseInt("1");
    const y = 2;
    const rez = x +y;
    alert(rez);
}

function flashDrive() {
    const flashDriveSize = parseInt(prompt('Enter your flash drive size in gb'));
    const rez = Math.round((flashDriveSize * 1024) / 820);
    alert(`Your flash drive will have ${rez} files`);
}

//  Норма

function purchase() {
    const money = parseFloat(prompt('Enter how much money do you have'));
    const chocoPrice = parseFloat(prompt('Enter 1 chocolate bar price'));
    const chocoAmount = Math.trunc(money / chocoPrice);
    const change = (money % chocoPrice).toFixed(2);
    alert(`You can buy ${chocoAmount} chocolate bars and your change will be ${change} $`);
}

function digit3Num() {
    const abc = parseInt(prompt(`Enter 3 digit number`));
    const a = abc % 10;
    const ab = (abc - a) / 10;
    const b = ab % 10;
    const c = (ab - b) /10;
    const rez = (a * 100) + (b * 10) + c;
    alert(rez);
}

//  Максимум

function profit() {
    const a = parseInt(prompt(`Enter the deposit amount`));
    const period = 2; //months
    const yearly = a * 0.05;
    const oneMonthPercent = yearly / 12;
    const rez = (oneMonthPercent * period).toFixed(2);
    alert(`Accrued interest amount is ${rez}`);
}

function returnExpression() {
    const a = 2 && 0 && 3;
    const b = 2 || 0 || 3;
    const c = 2 && 0 || 3;
    alert(`Rezult: ${a}, ${b}, ${c}`);
}

//  Завдання з використанням IF

function NumCheck() {
    const num = parseInt(prompt(`Enter your number`));
    // let rez;
    if(num > 0) {
        alert(`Your number is positive`);
    } else if(num < 0) {
        alert(`Your number is negative`);
    } else if(num === 0) {
        alert(`Your number is 0`);
    } else {
        alert(`Enter a number`);
    }
}

function ageCheck() {
    const age = parseInt(prompt(`Enter your age`));
    if(age > 0 && age <= 120) {
        alert(`Your age is right`);
    } else {
        alert(`You entered a wrong information`);
    }
}

function numModule() {
    const num = parseInt(prompt(`Enter your number`));
    let rez;
    if(num >= 0) {
        rez = num;
    }
    if(num < 0) {
        rez = num * (-1);
    }
    alert(rez);
}

function timeCheck() {
    const hour = parseInt(prompt(`How many hours?`));
    const min = parseInt(prompt(`How many minutes?`));
    const sec = parseInt(prompt(`How many seconds?`));
    if(hour < 0 && hour > 12) {
        alert(`You entered a wrong time`);
    } if(min < 0 && min > 60) {
        alert(`You entered a wrong time`);
    } if(sec < 0 && sec > 60) {
        alert(`You entered a wrong time`);
    }
}

function coordinates() {
    const x = parseInt(prompt(`Enter x`));
    const y = parseInt(prompt(`Enter y`));
if (x == 0) {
    if (y > 0) {
     alert(`The point lies on the Y coordinate axis between 1 and 2 quarters`);
    }
    if (y <= 0) {
     alert(`The point lies on the Y coordinate axis between 3 and 4 quarters`);
    }
}
if (x > 0) {
    if (y > 0) {
        alert(`The point lies in the 1st quarter of the coordinate axis`);
    }
    if (y < 0) {
        alert(`The point lies in the 4th quarter of the coordinate axis`);
    }
    if (y == 0) {
        alert(`The point lies on the X coordinate axis between 1 and 4 quarters`);
    }
}
if (x < 0) {
    if (y > 0) {
        alert(`The point lies in the 2nd quarter of the coordinate axis`);
    }
    if (y < 0) {
        alert(`The point lies in the 3rd quarter of the coordinate axis`);
    }
    if (y == 0) {
        alert(`The point lies on the X coordinate axis between the 2nd and 3rd quarters`);
    }
}

if (x == 0 && y == 0) {
    alert(`The point lies at the beginning of the coordinate axis`);
}
if (x == '' || y == '') {
    alert(`Enter the coordinates in numbers`);
}
}

//  Завдання з використанням SWITCH

function monthNum() {
    let rez = '';
    const month = prompt(`Enter the month number`);
    switch (month) {
        case '1':
            rez = `January`;
            break;
        case '2':   
            rez = 'February';
            break;
        case '3':   
            rez = 'March';
            break;
        case '4':   
            rez = 'April';
            break; 
        case '5':   
            rez = 'May';
            break; 
        case '6':   
            rez = 'June';
            break;
        case '7':   
            rez = 'July';
            break;
        case '8':   
            rez = 'August';
            break;
        case '9':   
            rez = 'September';
            break;
        case '10':   
            rez = 'October';
            break;
        case '11':   
            rez = 'November';
            break;
        case '12':   
            rez = 'December';
            break;   
        default:
            rez = 'Wrong number';
            break;          
    }
    alert(rez);
}

function calculator() {
    let rez = '';
    const num1 = parseInt(prompt(`Enter the 1st number`));
    const num2 = parseInt(prompt(`Enter the 2nd number`));
    const action = prompt(`Write action`);
    switch (action) {
        case '+':
            rez = num1 + num2;
            break;
        case '-':
            rez = num1 - num2;
            break;
        case '*':
            rez = num1 * num2;
            break;
        case '/':
            rez = num1 / num2;
            break;
        default:
            rez = 'Wrong meaning';
            break;
    }
    alert(rez);
}

//  Завдання з використанням тернарного оператору

function biggerNum() {
    const num1 = parseInt(prompt(`Enter the 1st number`));
    const num2 = parseInt(prompt(`Enter the 2nd number`));
    const rez = (num1 > num2) ? num1 : num2;
    alert(rez);
}

function multipleNum() {
    const num = parseInt(prompt(`Enter a number`));
    const rez = (num % 5 == 0) ? true : false;
    alert(rez);
}

function planet() {
    const answer = prompt(`Write a name of your planet`);
    const rez = ((answer === 'Earth') || (answer === 'earth')) ? 'Hi, earthling' : 'Hi, alien';
    alert(rez);
}
