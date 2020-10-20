
var index = 0, i
  , slides = document.getElementsByClassName('slide-item')
  , dots = document.getElementsByClassName('dot');

function plusSlides(n) {
  showSlides(index += n);
}

function currentSlide(n) {
  showSlides(index = n);
}

function showSlides(n) {
  if (n > slides.length){ index = 1;}
  if (n < 1){ index = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[index-1].style.display = 'block';

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[index - 1].className += ' active';

}

document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.slider-dot').style.display = 'block';
});