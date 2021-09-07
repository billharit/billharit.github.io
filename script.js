// Javascript for Navigation Bar Effects On Scroll
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    const navigate = this.document.querySelector(".navigation");
    header.classList.toggle('sticky', window.scrollY > 0);
    navigate.classList.toggle('sticky', window.scrollY > 0);
});

// Javascript for Copy Onclick
function copyToClipboard(){
    TextValue = "billharit@gmail.com"
    navigator.clipboard.writeText(TextValue);
}

// Javascript for responsive navigation sidebar
const menuBtn = document.querySelector(".menu-btn");
const Navigation = document.querySelector(".navigation");
const Navicon = document.getElementById("navicon");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    Navigation.classList.toggle("active");
    // if()
    if(Navicon.className == "fas fa-bars"){
        Navicon.classList.remove("fa-bars")
        Navicon.classList.add("fa-times")
    }else{
        Navicon.classList.remove("fa-times")
        Navicon.classList.add("fa-bars")
    }
});

// Javascript for scroll to top
const ScrollBtn = document.querySelector(".scrolltop-btn")
ScrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Javascript Appearing 
window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    // alert(reveals);
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;
        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }
    }
}