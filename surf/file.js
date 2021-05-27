
const gearBtn = document.querySelector (".gear__btn");
const gearBtnMenu = document.querySelector (".gear__btn-menu");
const wrapper = document.querySelector(".wrapper");
const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closeBtn");
const gearBtnnext = document.querySelector (".gear__btn-next");
const gearBtnMenunext = document.querySelector (".gear__btn-menu-next");


/////////// Выпадашка
gearBtn.addEventListener('mouseover' , function(e){
  e.preventDefault();
  gearBtnMenu.style.display = 'block';
})

gearBtn.addEventListener('mouseout' , function(e){
  e.preventDefault();
  gearBtnMenu.style.display = 'none';
});


gearBtnnext.addEventListener('mouseover' , function(e){
  e.preventDefault();
  gearBtnMenunext.style.display = 'block';
})

gearBtnnext.addEventListener('mouseout' , function(e){
  e.preventDefault();
  gearBtnMenunext.style.display = 'none';
});

/////////// Модальное окно
hamburger.addEventListener('click', e=>{
  e.preventDefault();
  wrapper.style.display = 'none';
  overlay.style.display = "flex";

});
closeBtn.addEventListener('click', e=>{
  e.preventDefault();
  overlay.style.display = 'none';
  wrapper.style.display = 'block';
});

//////////// Слайдер
 const slider = $('.slider__list').bxSlider({
   pager: false,
   controls: false

});


$(".left-arrow").click((e) => {
  e.preventDefault();
  slider.goToPrevSlide();
});


$(".right-arrow").click((e) => {
  e.preventDefault();
  slider.goToNextSlide();
});





