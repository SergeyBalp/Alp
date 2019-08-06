let box = document.getElementById("box"),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');
    wrapper = document.querySelector('.wrapper');

    console.log(box);
    console.log(btn);
    console.log(btn[0]);
    console.log(circle[2]);
    console.log(heart[1]);
    console.log(oneHeart);

    box.style.backgroundColor = 'black';
    btn[1].style.borderRadius = '100%';
    circle[0].style.backgroundColor = 'red';
    circle[1].style.backgroundColor = 'yellow';
    circle[2].style.backgroundColor = 'green';

    
    for (let i =0; i < heart.length; i++) {
        heart[i].style.backgroundColor = 'blue';
    }

    heart.forEach(function(item, i, heart) {
        item.style.backgroundColor = 'blue';
    });

    let div = document.createElement('div'),
        text = document.createTextNode('Здесь был Вася');

    div.classList.add('black');

    document.body.insertBefore(div, circle[0]);
    document.body.removeChild(circle[1]);
    wrapper.removeChild(heart[0]);
    

    div.innerHTML = 'Hello world!';
    div.innerHTML = '<h1>Hello world!</h1>';
    div.textContent = 'Hello world!';

    document.body.appendChild(div);
    wrapper.appendChild(div);
    document.body.insertBefore(div, circle[0]);
    document.body.removeChild(circle[1]);
    wrapper.removeChild(heart[1]);
    document.body.replaceChild(btn[1], circle[1]);
