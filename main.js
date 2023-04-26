


const scrolltop = document.querySelector('.totop');

    scrolltop.addEventListener("click", () => {
       
        document.body.scrollTop = 130;
        document.documentElement.scrollTop = 130;
    })



const header = document.querySelector('.heading');

header.pageYOffset = 0;

    window.addEventListener("scroll", () => {

        if(window.pageYOffset > 0 ){
            header.classList.add('visible')
        } else {
            header.classList.remove('visible')
        }

    })



const navside = document.querySelector('.navbarside');

const openNav = document.querySelector('#open');
const closeNav = document.querySelector('#close');

    closeNav.addEventListener("click", () => {

        navside.classList.toggle('active');
        
    })

    openNav.addEventListener("click", () => {

        navside.classList.toggle('active');

    })



// to animate text content 
const observer = new IntersectionObserver ((entries)=> {
    entries.forEach((entry) => {
        
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        }else {
            entry.target.classList.remove('show')
        }
    })
})


const hiddenElements = document.querySelectorAll('.tc-cont');
hiddenElements.forEach((el) => observer.observe(el));



//to animate image content
const showimg = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('showimg')
        }else {
            entry.target.classList.remove('showimg')
        }
    })
})

const imageshow = document.querySelectorAll('.c-image');
imageshow.forEach((el) => showimg.observe(el));


//for image grid display 
const animatetokens = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting){
            entry.target.classList.add('showtoks');
        }else {
            entry.target.classList.remove('showtoks');
        }
    })
})

const showtokens = document.querySelectorAll('.img-box ');
showtokens.forEach((el) => animatetokens.observe(el));




//for media queries

const manimatetokens = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting){
            entry.target.classList.add('mimage');
        }else {
            entry.target.classList.remove('mimage');
        }
    })
})

const mshowtokens = document.querySelectorAll('.image ');
mshowtokens.forEach((el) => manimatetokens.observe(el));