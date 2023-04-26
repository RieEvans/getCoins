

const menu = document.querySelector('.menu');
const menu2 = document.querySelector('.menu2')
const sidebar = document.querySelector('.side-bar');

    menu.addEventListener("click", () => {

        menu.classList.toggle("active")
        sidebar.classList.toggle("active")

    })

    menu2.addEventListener("click", () => {

        menu2.classList.toggle("active")
        sidebar.classList.toggle("active");
    })







const left = document.querySelector('.prev');
const right = document.querySelector('.nxt');
const carousel = document.querySelector('.carousel-items');

    left.addEventListener("click", () => {

        if (carousel.scrollBy(-1000, 0 )){
            right.style.display = "none"
        } else {
            right.style.display = "block"
        } 
    })

    right.addEventListener("click", () => {

        if (carousel.scrollBy(1000, 0)) {

            left.style.display = "block"
        } else {
            right.style.display = "none" ; 
           
        }
    })



const prevbtn = document.querySelector('.prevBtn');
const nxtbtn = document.querySelector('.nextBtn');
const shopcarousel = document.querySelector('.shop-carousel');

prevbtn.addEventListener("click", () => {

    shopcarousel.scrollBy(-650, 0 );
})

nxtbtn.addEventListener("click", () => {
    shopcarousel.scrollBy(660, 0);
})





const animateAds = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting) {
            entry.target.classList.add('txtanimate')
        } else {
            entry.target.classList.remove('txtanimate')
        }
    })
})

const adstxt = document.querySelectorAll('.adstxt');
adstxt.forEach((el) => animateAds.observe(el));


const animateimgads = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting){

            entry.target.classList.add('imganimate');
        } else {
            entry.target.classList.remove('imganimate');
        }
    })

})

const showadsimg = document.querySelectorAll('.adsimg');
showadsimg.forEach((el) => animateimgads.observe(el));

