let money = +prompt('Ваш бюджет на месяц',''),
    time = prompt('ВВедите дату в формате YYYY-MM-DD', '');

let appDate = {
    budget: money,
    expenses: {},
    income: [],
    timeDate: time,
    savings: false
};
/*
let i = 0, c = 2;
while (i < c) {
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
    } i++;
}

appDate.MoneyPerDay = appDate.budget/30;

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
}
*/
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

appDate.MoneyPerDay = appDate.budget/30;

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
        } 
    