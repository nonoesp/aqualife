if (typeof window !== "undefined") {

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > 3500) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
}

