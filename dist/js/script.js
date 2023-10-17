const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

function toggleOC() {
    menu.classList.toggle('active');
}
hamburger.addEventListener('click', toggleOC);
closeElem.addEventListener('click', toggleOC);
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const conunters = document.querySelectorAll('.skills__raitings-counter'),
      lines = document.querySelectorAll('.skills__raitings-line span');

conunters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})