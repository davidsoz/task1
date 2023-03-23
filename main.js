import './style.css';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';

const moreIcon = document.querySelector('.more');
const moreIconSvd = document.querySelector('.more-icon-svg')
const hiddenMenu = document.querySelector('.more-list');
const slideIndex = document.querySelector('.slide-index');

const hiddenListItems = ['ხელოვენება', 'რელიგია', 'სპორტი'];

const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    navigation: {
        nextEl: '.right',
        prevEl: '.left',
    },
    direction: 'horizontal',
    loop: true,
});

swiper.on('slideChange', function () {
    slideIndex.innerHTML = `${this.realIndex + 1}/${this.slides.length}`
});

function toggleHiddenItems(hiddenListItems, hiddenMenu) {
    if (hiddenMenu.classList.contains('hidden')) {
        hiddenMenu.classList.remove('hidden');
        hiddenMenu.classList.add('flex');
        moreIconSvd.classList.add('rotate-180')
    } else {
        hiddenMenu.classList.add("hidden");
        hiddenMenu.classList.remove('flex');
        hiddenMenu.innerHTML = "";
        moreIconSvd.classList.remove('rotate-180')
        return;
    }
    hiddenListItems.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        hiddenMenu.appendChild(li);
    })
}

moreIcon.addEventListener('click', () => {
    toggleHiddenItems(hiddenListItems, hiddenMenu);
});


