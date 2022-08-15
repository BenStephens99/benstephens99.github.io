
function typewriter() {
  var headers = document.getElementsByClassName("typewriter");
  var headerContent = [];

  for (let i = 0; i < headers.length; i++) {
    headerContent[i] = headers[i].textContent;
    headers[i].textContent = "";
  }

  console.log(headerContent);

  let currentLetter = 0;
  let currentHeader = 0;

  function writeLetter() {
    if (currentHeader <= headers.length -1 ) {
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
  setTimeout(writeLetter, 200);
}

window.addEventListener("mousemove", typewriter());

