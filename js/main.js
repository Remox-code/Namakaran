
const menuBtn = document.getElementById("menuBtn")
const nav = document.getElementById("nav")

menuBtn.onclick = () => {
nav.classList.toggle("active")
}


const slides = document.querySelectorAll(".slide")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

let index = 0

function showSlide(i){

slides.forEach(slide => slide.classList.remove("active"))
slides[i].classList.add("active")

}

showSlide(index)

next.onclick = () => {

index++

if(index >= slides.length){
index = 0
}

showSlide(index)

}

prev.onclick = () => {

index--

if(index < 0){
index = slides.length - 1
}

showSlide(index)

}
