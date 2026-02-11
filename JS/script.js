const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const menuLinks = document.querySelectorAll('#menu a');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    btnMobile.setAttribute('aria-expanded', active);

    btnMobile.setAttribute(
        'aria-label',
        active ? 'Fechar Menu' : 'Abrir Menu'
    );
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        btnMobile.setAttribute('aria-expanded', false);
        btnMobile.setAttribute('aria-label', 'Abrir Menu');
    });
});

//Menu aparecendo quando o usuário rola a página para cima e desaparecendo quando rola para baixo
let lastScrollY = window.scrollY;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
        header.classList.remove('hide');
    } 
    else {
        header.classList.add('hide');
    }

    lastScrollY = currentScrollY;
});

// Animação de fade-in para os elementos da página
const animatedElements = document.querySelectorAll('.animate, .animate-up');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

animatedElements.forEach(element => {
    observer.observe(element);
});

