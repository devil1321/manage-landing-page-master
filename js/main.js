navBtn = document.querySelector('.nav__btn');
menu = document.querySelector('.nav__list');
navItem = document.querySelectorAll('.nav__item');
overlay = document.querySelector('.nav__overlay');

function mediaQueries() {
    if (window.innerWidth > 1040) {
        menu.style.display = 'flex';
        menu.style.height = '100px';
        menu.style.transition = 'none';
        navItem.forEach(item => {
            item.style.opacity = 1;
            item.style.transition = "none";
        })
    } else {
        menu.style.height = '0px';
        menu.style.display = 'none';
        setTimeout(() => {
            menu.style.display = 'flex';
            menu.style.transition = 'all 500ms ease-in-out';
        }, 500)
        navItem.forEach(item => {
            item.style.opacity = 0;
            item.style.transition = "all 1s ease-in-out";
        })
    }
}
window.addEventListener('resize', mediaQueries);

function navToggle() {
    navBtn.classList.toggle('open');
    if (navBtn.classList.contains('open')) {
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
        menu.style.height = '18.1875rem';
        menu.style.padding = '2.875rem 0rem';
        if (menu.style.height === '18.1875rem') {
            setTimeout(() => {
                navItem.forEach(item => {
                    item.style.opacity = 1;
                })
            }, 500)
        }
    } else {
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = '0';
        navItem.forEach(item => {
            item.style.opacity = '0';
            if (item.style.opacity === '0') {
                setTimeout(() => {
                    menu.style.height = '0rem';
                    menu.style.padding = '0rem';
                }, 1000)
            }
        })

    }
}
navBtn.addEventListener('click', navToggle);


const carousel = document.querySelector('.carousel__box');
const carouselButtons = document.querySelectorAll('.carousel__control-btn');

var position = 0;
var buttonPos = 0;

function carouselAnimate() {
    if (position >= 0) {
        carousel.style.transition = 'all 1s ease-in-out';
    }
    carouselButtons.forEach(btn => {
        btn.classList.remove('active');
    })
    carouselButtons[buttonPos].classList.add('active');
    if (window.innerWidth >= 1024) {
        position += 33;
    } else if (window.innerWidth < 1024) {
        position += 100;
    }
    buttonPos += 1;
    carousel.style.right = position + '%';
    if (buttonPos === 4) {
        buttonPos = 0;
    }
    if (position === 165) {
        carousel.style.transition = 'all 0s ease-in-out';
        position = 0;
        carousel.style.right = position + '%';

    } else if (position === 500) {
        carousel.style.transition = 'all 0s ease-in-out';
        position = 0;
        carousel.style.right = position + '%';
    }

}
const carouselInt = setInterval(carouselAnimate, 2000)

carouselButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        clearInterval(carouselInt)
        let id = e.target.id
        if (window.innerWidth > 1024) {
            if (id === '1') {
                carousel.style.right = `2%`;
                carouselButtons.forEach(btn => {
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');
            } else if (id === '2') {
                carousel.style.right = `34.66%`;
                carouselButtons.forEach(btn => {
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');
            } else if (id === '3') {
                carousel.style.right = `67.66%`;
                carouselButtons.forEach(btn => {
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');
            } else if (id === '4') {
                carousel.style.right = `100.55%`;
                carouselButtons.forEach(btn => {
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');
            }
        } else {
            if (id === '1') {
                carousel.style.right = 0 + '%';
                carouselButtons.forEach(btn => {
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');
            } else if (id === '2') {
                carousel.style.right = 100 + '%';
                carouselButtons.forEach(btn => {
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');
            } else if (id === '3') {
                carousel.style.right = 200 + '%';
                carouselButtons.forEach(btn => {
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');
            } else if (id === '4') {
                carousel.style.right = 300 + '%';
                carouselButtons.forEach(btn => {
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');
            }
        }
    })
})