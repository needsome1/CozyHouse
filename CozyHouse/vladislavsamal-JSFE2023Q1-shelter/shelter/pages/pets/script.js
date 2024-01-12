const burger = document.querySelector('.burger_lines');
const menu = document.querySelector('.nav-menu');
const logo = document.querySelector('.logo');
const burger_invisible = document.querySelector('.burger_invisible');

burger.addEventListener('click', () => {
    burger.classList.toggle('rotate');
    if (menu.className === 'nav-menu'){

        menu.classList.toggle('active', true);
        body.style.overflow ='hidden';
    
    } else if ((menu.className === 'nav-menu active')){

        menu.classList.toggle('active', false);
        body.style.overflow ='visible';
    } 

    burger_invisible.classList.toggle('not-visible');

    logo.addEventListener('click', () => {
        burger.classList.remove('rotate');
        menu.classList.remove('active');
        burger_invisible.classList.add('not-visible');
    });

    burger_invisible.addEventListener('click', () => {
        burger.classList.remove('rotate');
        menu.classList.remove('active');
        burger_invisible.classList.add('not-visible');
    });
});

menu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'A' && target.className === 'nav_link active'){
        document.location = 'index.html';
    }
});