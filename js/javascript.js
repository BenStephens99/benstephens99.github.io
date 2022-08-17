
function typewriter() {
  var headers = document.getElementsByClassName("typewriter");
  var headerContent = [];

  for (let i = 0; i < headers.length; i++) {
    headerContent[i] = headers[i].textContent;
    headers[i].textContent = "";
  }

  let currentLetter = 0;
  let currentHeader = 0;

  function writeLetter() {
    if (currentHeader <= headers.length - 1) {
      if (currentLetter < (headerContent[currentHeader].length)) {
        headers[currentHeader].textContent += headerContent[currentHeader].charAt(currentLetter);
        currentLetter++;
        setTimeout(writeLetter, 50);
      }
      else {
        if (currentHeader <= headers.length) {
          currentLetter = 0;
          currentHeader++;
          writeLetter();
        }
      }
    }
  }
  setTimeout(writeLetter, 500);
}

var menuOpen = false;
var siteNav = document.getElementById('siteNav');
var img = document.getElementById('navMenuImage');

function openMenu() {
  if (!menuOpen) {
    console.log(siteNav);
    siteNav.style.display = 'block';
    img.style.transform = 'rotate(90deg)';
    menuOpen = true;
  } else {
    siteNav.style.display = 'none';
    img.style.transform = 'rotate(0deg)';
    menuOpen = false;
  }
}

window.addEventListener("mousemove", typewriter());


function showMore(section) {
  var targetDiv = document.getElementById(section);
  targetDiv.getElementsByClassName('readMoreButton')[0].style.display = 'none';
  targetDiv.getElementsByClassName('moreInfo')[0].style.display = 'block';

}

let currentSlide = 0;
let slides = document.getElementsByClassName('slide');

function slideshow () {

  slides[currentSlide].style.display = 'block';
  
}
slideshow();

function plusSlides(n) {
  document.getElementsByClassName('slide')[currentSlide].style.display = 'none';
  currentSlide = currentSlide + n;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  
  slideshow()
}