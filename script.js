var first;
var second;

let cont;
let money;
let time;
var result = 0;

let spend1;
let spend2;
let spend3;

let question;

let elements;

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
  optionalExpenses: {
    1: spend1,
    2: spend2,
    3: spend3,
  },
  income: [],
  savings: false,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      first = prompt("Введите обязательную статью расходов в этом месяце");
      second = prompt("Во сколько обойдется");
      if (typeof first == "string" && first != "" && second != "") {
        appData.expenses.first = second;
        result += Number(second);
      } else {
        alert("Заполните все поля!");
        i = -1;
        result = 0;
      }
    }
  },
  detectDayBudget: function () {
    result = Number(this.budget) - result;
    alert("После обязательных расходов остаток составит: " + result);
    alert("Расход составит: " + result / 30 + " денег в день на 1 мес.");
  },
  detectLevel: function () {
    let incomeLvl =
      appData.budget < 1000 ?
      alert("Зарплата мала!") :
      appData.budget == 1000 && appData.budget < 1500 ?
      alert("Зарплата средняя") :
      alert("Высокая зарплата");
    return incomeLvl;
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 4; i++) {
      question = prompt("Статья необязательных расходов?");
      this.optionalExpenses[i] = question;
      if (this.optionalExpenses[i] == "") {
        alert("Введите значение!");
        i = 0;
      }
    }
  },
  chooseIncome: function () {
    let items;
    for (let i = 0; i < 1; i++) {
      items = prompt("Что принесёт доп доход? (Введите через запятую)!");
      if (items == "" || items == null) {
        alert("Поле обязательно для заполнения!");
        i = -1;
      }
    }
    appData.income = items.split(", ");
    appData.income.forEach(element => {
      elements = document.write(`${element} `);
    });
  },
};

let propObj;
let viewObj = function () {
  for (let prop in appData) {
    console.log(prop);
  }
};

// appData.chooseExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.chooseOptExpenses();

appData.chooseIncome();
console.log(appData.income);
viewObj();