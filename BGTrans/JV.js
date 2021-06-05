var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/* Часовник */

var clockCell = null;


function lZero(value)

{

	if (value < 10)

	{

		return "0" + value;

	}


	return value;

}


function tick()

{

	var date = new Date();


	clockCell.innerHTML = lZero(date.getHours(), 2) + ":" + lZero(date.getMinutes(), 2) + ":" + lZero(date.getSeconds(), 2);


	setTimeout("tick()", 1000);

}


function bodyLoad(sender)

{

	clockCell = document.getElementById("clockCell");


	tick();

}