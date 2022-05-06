'use strict'
let  = document.querySelector(".stylecol .fredHyman")
let play = document.querySelectorAll('.stylecol .fredHyman  .fapIcon i')
let close = document.querySelector(".stylecol .fredHyman i")


for (let i = 0; i < play.length; i++) {
    play[i].addEventListener("click", function () {
        videoBox.classList.add("activeVideo")
    })
}
close.addEventListener("click", function () {
    videoBox.classList.remove("activeVideo")
})
