const dinoUl = document.querySelectorAll('ol li');
const dinoOl = document.querySelectorAll('ul li');
const dinoImg = document.querySelectorAll('img');
const button = document.querySelector('#destroy-all');


const lineThrough = function (event) {
    event.target.style.textDecoration = 'line-through';
}

for (const dino of dinoUl) {
    dino.addEventListener('click', lineThrough);
}


const lineCollapse = function (event) {
    event.target.style.opacity = 0;
}
for (const dino of dinoOl) {
    dino.addEventListener('click', lineCollapse);
}


const imgCollapse = function (event) {
    event.target.style.width = '0px';
}

for (const dino of dinoImg) {
    dino.addEventListener('click', imgCollapse);
}


const destroyAll = function() {
    for (const dino of dinoOl) {
        dino.style.opacity = 0;
    }
    for (const dino of dinoImg) {
        dino.style.width = '0px';
    }
}

button.addEventListener('click', destroyAll);