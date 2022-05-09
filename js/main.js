'use strict'

// for (i = 0; i < side.length; i++) {
//   side[i].addEventListener("click", function() {
  
//     this.classList.toggle("active");

//     var panel = this.nextElementSibling;
//     if (menu.style.display === "block") {
//       menu.style.display = "none";
//     } else {
//       menu.style.display = "block";
//     }
//   });
// }














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

