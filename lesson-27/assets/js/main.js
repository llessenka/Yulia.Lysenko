//  Норма

function userName() {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}`);
}

function birthYear() {
    const birth = parseInt(prompt('Enter your year of birth'));
    const currentYear = 2022;
    const age = 2022 - birth;
    alert(`You are ${age} years old`);
}

function squareNum() {
    const num = parseInt(prompt('Enter the square lenght'));
    const rez = 4 * num;
    alert(rez);
}

//  Максимум

function circleNum() {
    const r = parseInt(prompt('Enter circle radius'));
    const s = Math.PI * (r**2);
    alert(`The area of the circle is: ${s}`);
}

function distance() {
    const s = parseInt(prompt(`Enter the distance between cities`));
    const t = parseInt(prompt('How much time do you need?'));
    const v = s / t;
    alert(`You need to move with speed of ${v} km per hour`);
}

function usd2eur() {
    const usd = parseInt(prompt('Enter the number in dollars'));
    const K = 0.95;
    const eur = usd * K;
    alert(`In euro it's: ${eur} euro`);
}

//  Доп. задание

function digit5Num() {
    const num5 = parseInt(prompt(`Enter 5 digit number`));
    const x = num5 % 10;
    const y = ((num5 - x) / 10);
    const z = x * 10000 +y;
    alert(`Rezult: ${z}`);
}

function salary() {
    const totalSum = parseInt(prompt(`Enter total monthly sales`));
    const rate = 250;
    const totalSalary = rate + (totalSum * 10 / 100);
    alert(`Total salary is ${totalSalary} $`)
}

