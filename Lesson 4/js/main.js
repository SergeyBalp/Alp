let start = document.getElementById('start'),
    budgetval = document.querySelector('.budget-value'),
    daybudgetval = document.querySelector('.daybudget-value'),
    levelval = document.querySelector('.level-value'),
    expensesval = document.querySelector('.expenses-value'),
    optionalexpensesval = document.querySelector('.optionalexpenses-value'),
    incomeval = document.querySelector('.income-value'),
    monthsavingsval = document.querySelector('.monthsavings-value'),
    yearsavingsval = document.querySelector('.yearsavings-value'),
    expensesitems = document.getElementsByClassName('expenses-item'),
    btn = document.getElementsByTagName('button'),
    btnapprovexpenses = btn[0],
    btnapprovoptional = btn[1],
    btncalculate =  btn[2],
    optionalexpensesitem = document.querySelectorAll('.optionalexpenses-item'),
    //optionalexpensesitem = document.getElementsByClassName('optionalexpenses-item'),
    countbudget = document.querySelector('.count-budget'),
    chooseincomelabel = document.querySelector('.choose-income-label'),
    checksavings = document.querySelector('.checksavings'),
    savings = document.getElementById('savings'),
    income = document.getElementById('income'),
    percent = document.getElementById('percent'),
    sum = document.getElementById('sum'),
    yearvalue = document.querySelector('.year-value'),
    monthvalue = document.querySelector('.month-value'),
    dayvalue = document.querySelector('.day-value');
          
    
    
    console.log(start);
    console.log(budgetval);
    console.log(daybudgetval);
    console.log(levelval);
    console.log(expensesval);
    console.log(optionalexpensesval);
    console.log(incomeval);
    console.log(monthsavingsval);
    console.log(yearsavingsval);
    console.log(expensesitems);
    console.log(btn);
    console.log(btnapprovexpenses);
    console.log(btnapprovoptional);
    console.log(btncalculate);
    console.log(optionalexpensesitem);
    console.log(countbudget);
    console.log(chooseincomelabel);
    console.log(checksavings);
    console.log(savings);
    console.log(income);
    console.log(percent);
    console.log(sum);
    console.log(yearvalue);
    console.log(monthvalue);
    console.log(dayvalue);