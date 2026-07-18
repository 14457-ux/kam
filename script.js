/* ===========================
   Engineering Portfolio
   script.js
=========================== */

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1200);
});

// ===========================
// Dark Mode
// ===========================

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }else{

        darkBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

// ===========================
// Typing Effect
// ===========================

const words = [

    "Engineering Student",

    "Web Developer",

    "Future Engineer"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent =
        current.substring(0, letterIndex++);

        if(letterIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1000);

            return;

        }

    }else{

        typing.textContent =
        current.substring(0,--letterIndex);

        if(letterIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// ===========================
// Scroll To Top
// ===========================

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ===========================
// Certificate Lightbox
// ===========================

const gallery =
document.querySelectorAll(".gallery img");

const lightbox =
document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=
'<img id="lightbox-img">';

document.body.appendChild(lightbox);

const lightboxImg =
document.getElementById("lightbox-img");

gallery.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImg.src=image.src;

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});

// ===========================
// Fade on Scroll
// ===========================

const sections =
document.querySelectorAll("section");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{
threshold:0.2
});

sections.forEach(section=>{

observer.observe(section);

});/* ========================= */
/* PREMIUM BACKGROUND */
/* ========================= */

body{

    background:linear-gradient(
        -45deg,
        #ffe8f5,
        #ffd6eb,
        #ffc4df,
        #fff4fa
    );

    background-size:400% 400%;

    animation:bgMove 12s ease infinite;

}

@keyframes bgMove{

    0%{
        background-position:0% 50%;
    }

    50%{
        background-position:100% 50%;
    }

    100%{
        background-position:0% 50%;
    }

}.card,
.project-card,
.timeline-box,
.contact-list a{

    backdrop-filter:blur(18px);

    background:rgba(255,255,255,.55);

    border:1px solid rgba(255,255,255,.5);

}.floating-gear{

    position:fixed;

    font-size:70px;

    color:#ff77b7;

    opacity:.15;

    right:50px;

    bottom:40px;

    animation:gearRotate 12s linear infinite;

    pointer-events:none;

}

@keyframes gearRotate{

    from{

        transform:rotate(0deg);

    }

    to{

        transform:rotate(360deg);

    }

}.card,
.project-card,
.timeline-box{

    transition:.35s;

}

.card:hover,
.project-card:hover,
.timeline-box:hover{

    transform:

        translateY(-12px)

        scale(1.02);

}.btn{

    position:relative;

    overflow:hidden;

}

.btn::before{

    content:"";

    position:absolute;

    width:0;

    height:100%;

    background:white;

    opacity:.25;

    left:0;

    top:0;

    transition:.4s;

}

.btn:hover::before{

    width:100%;

}.hero-img img{

    animation:float 3s ease-in-out infinite;

}

@keyframes float{

0%{

transform:translateY(0);

}

50%{

transform:translateY(-15px);

}

100%{

transform:translateY(0);

}

}
