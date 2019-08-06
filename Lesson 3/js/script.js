let lis = document.getElementsByClassName('menu-item'),
    ul = document.querySelector('.menu'),
    li = document.createElement('li'),
    adv = document.querySelector('.adv'),
    title = document.getElementById("title"),
    prompts = document.getElementById("prompt"),
    column = document.querySelectorAll('.column');
 
//document.style.background = ('url(.../img/apple_true.jpg) center no repeat');

li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт';
title.innerHTML = 'Мы продаем только подлинную технику Apple';
adv.innerHTML = '';
adv.classList.remove('adv');


//column.removeChild(adv);
//document.body.appendChild(div);

ul.appendChild(li);
ul.insertBefore(lis[2], lis[1]);

let quest = prompt('Как вы относитесь к технике Apple','');
prompts.innerHTML = quest;

console.log(column);

console.log(adv);
console.log(lis);
console.log(ul);
console.log(title);
console.log(li);