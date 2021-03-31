import $ from 'jquery';

if (typeof window !== "undefined") {

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > 3000) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
$([document.documentElement, document.body]).animate({
    scrollTop: $("#about").offset().top
},5);
}

