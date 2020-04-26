let cont;
let money;
let time;

for (let i = 0; i < 1; i++) {
    money = prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    if (money == "" || time == "") {
        alert("empty!");
    } else {
        cont = true;
    }
    if (!cont) {
        i = -1;
    }
}
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let first;
let second;
let result = 0;
for (let i = 0; i < 2; i++) {
    first = prompt("Введите обязательную статью расходов в этом месяце");
    second = prompt("Во сколько обойдется");
    if (typeof first === "string" && first != "" && second != "") {
        appData.expenses.first = second;
        result = result + Number(second);
    } else {
        alert("Заполните все поля!");
        i = -1;
        result = 0;
    }
}

function detectDayBudget() {
    result = Number(appData.budget) - result;
    return result;
}

let resultFunc = detectDayBudget();
alert("После обязательных расходов остаток составит: " + resultFunc);
alert("Расход составит: " + resultFunc / 30 + " денег в день на 1 мес.");


function detectLevel() {
    let incomeLvl = (appData.budget < 1000) ? alert('Зарплата мала!') : (appData.budget == 1000 && appData.budget < 1500) ? alert('Зарплата средняя') : alert('Высокая зарплата');
    return incomeLvl;
}
detectLevel();

let spend1;
let spend2;
let spend3;

let optionalExpenses = {
    1: spend1,
    2: spend2,
    3: spend3
};


function chooseOptExpenses() {
    let question = prompt('Статья необязательных расходов? (Сумма)');
    return question;
}

for (let i = 1; i < 4; i++) {
    optionalExpenses[i] = chooseOptExpenses();
    if (optionalExpenses[i] == '') {
        alert('Введите значение!');
        i = 0;
    }
}

console.log(optionalExpenses[1]);
console.log(optionalExpenses[2]);
console.log(optionalExpenses[3]);