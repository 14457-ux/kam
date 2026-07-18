/* =====================================
   Engineering Portfolio
   script.js
===================================== */

// ----------------------
// Loading Screen
// ----------------------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition = ".6s";

        setTimeout(() => {

            loader.style.display = "none";

        },600);

    },1200);

});

// ----------------------
// Typing Effect
// ----------------------

const words = [
    "Engineering Student",
    "Future Engineer",
    "Web Developer"
];

const typing = document.getElementById("typing");

let word = 0;
let letter = 0;
let remove = false;

function type(){

    const current = words[word];

    if(!remove){

        typing.textContent = current.substring(0,letter++);

        if(letter > current.length){

            remove = true;

            setTimeout(type,1000);

            return;

        }

    }else{

        typing.textContent = current.substring(0,--letter);

        if(letter == 0){

            remove = false;

            word++;

            if(word >= words.length){

                word = 0;

            }

        }

    }

    setTimeout(type, remove ? 60 : 120);

}

type();

// ----------------------
// Dark Mode
// ----------------------

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }else{

        darkBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

// ----------------------
// Scroll To Top
// ----------------------

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ----------------------
// Certificate Zoom
// ----------------------

const certificates =
document.querySelectorAll(".certificate img");

certificates.forEach(img=>{

    img.addEventListener("click",()=>{

        window.open(img.src,"_blank");

    });

});

// ----------------------
// Fade Animation
// ----------------------

const sections =
document.querySelectorAll("section");

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate([

                {
                    opacity:0,
                    transform:"translateY(40px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],{

                duration:700,

                fill:"forwards"

            });

        }

    });

});

sections.forEach(section=>{

    observer.observe(section);

});
