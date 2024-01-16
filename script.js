// Navbar
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
Menu.onclick = () => {
    Navbar.classList.toggle("active");
}

Window.onscroll = () => {
    Navbar.classList.remove("active");
}
// Dark Mode
let darkmode = document.querySelector("#darkmode");

Darkmode.onclick = () => {
    if(darkmode.classList.contains("bx-moon")){
        Darkmode.classList.replace("bx-moon","bx-sun");
        Document.body.classList.add("active");
    }else{
        Darkmode.classList.replace("bx-sun","bx-moon");
        Document.body.classList.remove("active");
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    Origin: "top",
    Distance: "40px",
    Duration: 2000,
    Reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    Interval: 200
})

