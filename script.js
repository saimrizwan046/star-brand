// ****************Slider start****************
let slides = document.querySelectorAll('.fade-slide');
let currentIndex = 0;
function showSlide() {
    slides[currentIndex].style.opacity = 0; 
    currentIndex = (currentIndex + 1) % slides.length; 
    slides[currentIndex].style.opacity = 1;
}
slides[currentIndex].style.opacity = 1;
setInterval(showSlide, 2000);
// ****************Slider end****************

/**************TOGGLE BTN start ******************/
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('sub-navbar');

toggle.addEventListener('change', () => {
    console.log("sdf");
    
    if (toggle.checked) {
        navbar.style.display = 'block';
    }
    else {
        navbar.style.display = 'none';
    }
});
/**************TOGGLE BTN end ******************/

/*************DROPDOWN start ********************/
var btn = document.getElementById("prod-btn");
// console.log(btn);

function onHover() {
    // console.log = ("btn");
    btn.innerHTML = ` <span>PRODUCTS <i 
    class="fa-solid fa-caret-right"></i></span>`;
}
function onHoverOut() {
    btn.innerHTML = ` <span>PRODUCTS <i
                class="fa-solid fa-caret-down"></i></span>`;
}
/*************DROPDOWN BTN end********************/