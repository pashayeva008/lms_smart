'use strict'
var men = document.querySelectorAll(".curbox .accmenu h5");
var i;

for (i = 0; i < men.length; i++) {
  men[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var menuInt = this.nextElementSibling;
    if (menuInt.style.display === "block") {
      menuInt.style.display = "none";
    } else {
      menuInt.style.display = "block";
    }
  });
}

function myFunction(x) {
  x.classList.toggle("fa-angle-up");
}


let btnc =document.querySelectorAll(".thtorial  .leftorial ul li");
let bd =document.querySelectorAll(" .thtorial .alltutorial .leftorial .tbover");
for(let i =0 ;i < btnc.length; i++){
    btnc[i].onclick = function () {
        for (let j = 0; j < bd.length; j++) {
          bd[j].classList.remove("active");
}
var btni = this.getAttribute("tab");
bd[btni].classList.add("active")
}

}

