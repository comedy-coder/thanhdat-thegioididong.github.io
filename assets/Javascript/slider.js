var slideIndex = 1;
showSlides(slideIndex);

//  Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
console.log(plusSlides)
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

setInterval(() => {
showSlides(slideIndex += 1);
}, 3000);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var backGround = document.querySelector('.banner');

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  if((slideIndex-1) === 0)
  {
      backGround.setAttribute("style","background-color :rgb(38,132,91) ");
  }
  else if ((slideIndex-1) === 1)
  {
      backGround.setAttribute("style","background-color :#f8d648 ");
  }
  else 
  {
      backGround.setAttribute("style","background-color : rgb(9,18,38)");
  }

}
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 4000); // Change image every 2 seconds
// }




// slider

var sliderSize = document.querySelector('.slider-container').clientWidth;

var photoTransfer = document.querySelector('.slider-container-app');
var sliderImg = photoTransfer.querySelectorAll('.slider-img')


var sliderAnimation = 0;

var fullImg = sliderSize * sliderImg.length;
fullImg -= sliderSize;

var sliderLeft = document.querySelector('.slider__next')


function nextSlider() {
    if (sliderAnimation < fullImg) {
        sliderAnimation += sliderSize;
      
    } else {
        sliderAnimation = 0;
    }
    photoTransfer.style.marginLeft = '-' + sliderAnimation + 'px';
   
}

sliderLeft.addEventListener('click', nextSlider);

setInterval(function () {
    nextSlider();
}, 4000)


var sliderRight = document.querySelector('.slider__prev')

function prevSlider() {

    if (sliderAnimation == 0) {
        sliderAnimation = fullImg;
    } else {
        sliderAnimation -= sliderSize;
    }
    photoTransfer.style.marginLeft = '-' + sliderAnimation + 'px';
}

sliderRight.addEventListener('click', prevSlider);

// Game slider

var sliderGame = document.querySelector('.game').clientWidth;

var photoGame = document.querySelector('.game-click')

var gameImg = document.querySelectorAll('.game-app-img')

var animationGame = 0;

var fullImgGame = sliderGame * gameImg.length;

fullImgGame -= sliderGame;

var gameLeft = document.querySelector('.game-click-next')

function nextGame() {
    if (animationGame < fullImgGame) {
        animationGame += sliderGame;
    } else {
        animationGame = 0;
    }

    photoGame.style.marginLeft = '-' + animationGame + 'px';
}

gameLeft.addEventListener('click', nextGame)

var gameRight = document.querySelector('.game-click-prev')

function prevGame() {
    if (animationGame == 0) {
        animationGame = fullImgGame;

    } else {
        animationGame -= sliderGame;
    }

    photoGame.style.marginLeft = '-' + animationGame + 'px';
}

gameRight.addEventListener('click', prevGame)

setInterval(function () {
    prevGame()
}, 6000)