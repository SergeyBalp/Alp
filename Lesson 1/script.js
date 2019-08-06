let money, time;
function start() {
    money = +prompt('Ваш бюджет на месяц','');
    time = prompt('ВВедите дату в формате YYYY-MM-DD', ''); 

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц','');
    }
}
start();
 
let appDate = {
    budget: money,
    expenses: {},
    income: [],
    timeDate: time,
    savings: true,
    chooseExpenses: function() {
        for (let i =  0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходoв в этом месяце",""),
                b = prompt("Во сколько обойдется?","");
        
            if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50) {
                    console.log("done");
                    appDate.expenses[a] = b;    
            }
            else {
                let a = prompt("Введите обязательную статью расходoв в этом месяце",""),
                    b = prompt("Во сколько обойдется?","");
            }   
        }
       /* appDate.MoneyPerDay = (appDate.budget/30).toFixed(1);
        alert("Ежедневный бюджет:" + appDate.MoneyPerDay);
        
            if (appDate.MoneyPerDay < 100) {
                console.log('Минимальный уровень достатка');
            } else if (appDate.MoneyPerDay > 100 && appDate.MoneyPerDay < 1000) {
                console.log('Средний уровень достатка');
            } else if(appDate.MoneyPerDay > 1000) {
                console.log('Высокий уровень достатка');
            }
             else {
                console.log('Произошла ошибка');
            }    */
    },
    detectDayBudget: function() {
        appDate.moneyPerDay = (appDate.budget/30).toFixed();
        alert("Ежедневный бюджет:" + appDate.MoneyPerDay);   
    },
    detectLevel: function() {            
            if (appDate.MoneyPerDay < 100) {
                console.log('Минимальный уровень достатка');
            } else if (appDate.MoneyPerDay > 100 && appDate.MoneyPerDay < 1000) {
                console.log('Средний уровень достатка');
            } else if(appDate.MoneyPerDay > 1000) {
                console.log('Высокий уровень достатка');
            }
             else {
                console.log('Произошла ошибка');   
        }
    },
    checkSavings: function() {
        if(appDate.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
    
            appDate.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appDate.monthIncome);
        }
     
    },
    chooseIncome: function(){
        let items = prompt("Какие еще источники дохода у вас имеются (перечислите через запятую " ,"");
        appDate.income = items.split(', ');
        appDate.income.push(prompt('Может что- нибудь еще?'));
        appDate.income.sort();
    },
    chooseOptExpenses: function(){
        for (let i = 1; i < 3; i++) {
            let opt = prompt ("Статья необязательных расходов", '');
            appDate.optionalExpenses[i] = opt;
        }   
    }, /*,
    chooseIncome: function(){
        let items = prompt("Какие еще источники дохода у вас имеются (перечислите через запятую " ,"");
        appDate.income = items.split(', ');
    } */
    
};
   
console.log(appDate);
/*

function learnJS(lang, calback) {
    console.log("Я учу " + lang);
    calback();
}
function done() {
    console.log("Я прошел третий урок");
}
learnJS("JavaScript", done);
*/