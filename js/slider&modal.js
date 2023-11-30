
let slideToShow = 0;

const modalBtns = document.querySelectorAll('.gallery-modal-btn');

modalBtns.forEach(function (button) {
    button.addEventListener('click', function () {
     const slideNumbeToShow = button.getAttribute('data-index');
     slideToShow = Number(slideNumbeToShow);  
     console.log(slideToShow);  
    })
    
})

// Запуск бібліотеки з модального вікна
MicroModal.init({
    onShow: function () {
        slider.go(slideToShow);
    }
});


//Запуск біблоіотеки слайдеру

const sliderContainer = document.querySelector('.splide');
const slider = new Splide(sliderContainer).mount();
