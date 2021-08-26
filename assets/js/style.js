let slideTotal = document.querySelectorAll('.slider-item').length;
let currentSlide = 0;

document.querySelector('.slider-largura').style.width = `calc(100vw * ${slideTotal})`;
document.querySelector('.controle-slides').style.height = `${document.querySelector('.slider').clientHeight}px`;

function back() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = slideTotal - 1;
    }

    atualizarMargin()
}

function next() {
    currentSlide++;
    if(currentSlide > (slideTotal - 1)) {
        currentSlide = 0
    }
    atualizarMargin()
}

function atualizarMargin() {
    let slideItemWidth = document.querySelector('.slider-item').clientWidth;
    let marginNova = (currentSlide * slideItemWidth);

    document.querySelector('.slider-largura').style.marginLeft = `-${marginNova}px`
}
