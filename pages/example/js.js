
const images = document.querySelectorAll(".gallery img")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")

images.forEach(img => {

img.onclick = () => {

lightbox.style.display = "flex"
lightboxImg.src = img.src

}

})

lightbox.onclick = () => {

lightbox.style.display = "none"

}



/* scroll top */

const topBtn = document.getElementById("topBtn")

window.onscroll = () => {

if(document.documentElement.scrollTop > 300){

topBtn.style.display = "block"

}else{

topBtn.style.display = "none"

}

}

topBtn.onclick = () => {

window.scrollTo({
top:0,
behavior:"smooth"
})

}
