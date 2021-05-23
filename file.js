
const gearBtn = document.querySelector (".gear__btn");
const gearBtnMenu = document.querySelector (".gear__btn-menu");
const wrapper = document.querySelector(".wrapper");
const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closeBtn");


gearBtn.addEventListener('mouseover' , function(e){
  e.preventDefault();
  gearBtnMenu.style.display = 'block';
})

gearBtn.addEventListener('mouseout' , function(e){
  e.preventDefault();
  gearBtnMenu.style.display = 'none';
})



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