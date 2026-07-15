/* =======================================================
   Engineering Portfolio 2026
======================================================= */

"use strict";

/* =======================================================
   AOS
======================================================= */

AOS.init({

    duration:1000,

    once:true,

    offset:100

});

/* =======================================================
   LOADER
======================================================= */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

    },1800);

});

/* =======================================================
   NAVBAR ACTIVE
======================================================= */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.offsetHeight;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* =======================================================
   TYPING EFFECT
======================================================= */

const typing=document.querySelector(".typing");

const words=[

"Future Engineer",

"Web Developer",

"Creative Designer",

"Computer Engineering",

"AI Enthusiast"

];

let wordIndex=0;

let letterIndex=0;

let deleting=false;

function typeEffect(){

    const word=words[wordIndex];

    if(!deleting){

        typing.textContent=word.substring(0,letterIndex++);

        if(letterIndex>word.length){

            deleting=true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        typing.textContent=word.substring(0,letterIndex--);

        if(letterIndex===0){

            deleting=false;

            wordIndex=(wordIndex+1)%words.length;

        }

    }

    setTimeout(typeEffect,deleting?40:90);

}

typeEffect();

/* =======================================================
   COUNTER
======================================================= */

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter=entry.target;

            const target=+counter.dataset.target;

            let count=0;

            const speed=target/80;

            const update=()=>{

                count+=speed;

                if(count<target){

                    counter.textContent=Math.floor(count);

                    requestAnimationFrame(update);

                }else{

                    counter.textContent=target;

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter=>counterObserver.observe(counter));
/* =======================================================
   BACK TO TOP
======================================================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* =======================================================
   DARK MODE
======================================================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.className = "fa-solid fa-sun";

        localStorage.setItem("theme", "dark");

    } else {

        icon.className = "fa-solid fa-moon";

        localStorage.setItem("theme", "light");

    }

});

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeBtn.querySelector("i").className = "fa-solid fa-sun";

}

/* =======================================================
   SMOOTH MENU
======================================================= */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* =======================================================
   MOBILE MENU
======================================================= */

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    menuBtn.classList.toggle("active");

});

/* =======================================================
   HERO PARALLAX
======================================================= */

window.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;

    const y = e.clientY / window.innerHeight;

    document.querySelectorAll(".hero-glow").forEach(glow => {

        glow.style.transform =

            `translate(${x * 40}px, ${y * 40}px)`;

    });

});

/* =======================================================
   PROFILE IMAGE TILT
======================================================= */

const profile = document.querySelector(".profile-img");

if (profile) {

    profile.addEventListener("mousemove", e => {

        const rect = profile.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 20;

        const rotateX = -(y / rect.height - 0.5) * 20;

        profile.style.transform =

            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    });

    profile.addEventListener("mouseleave", () => {

        profile.style.transform = "";

    });

}
/* =======================================================
   GALLERY LIGHTBOX
======================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const galleryItems = document.querySelectorAll(".gallery-item");
const closeLightbox = document.querySelector(".close-lightbox");

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        lightbox.classList.add("show");

        lightboxImg.src = item.src;

        lightboxImg.alt = item.alt;

        document.body.style.overflow = "hidden";

    });

});

if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.classList.remove("show");

        document.body.style.overflow = "";

    });

}

lightbox?.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.classList.remove("show");

        document.body.style.overflow = "";

    }

});

/* =======================================================
   PROJECT MODAL
======================================================= */

const projects = [

{

title:"Engineering Portfolio Website",

image:"images/project1.jpg",

description:
"เว็บไซต์ Portfolio แบบ Responsive พร้อม Animation, Glassmorphism และธีมวิศวกรรม",

tech:["HTML","CSS","JavaScript"]

},

{

title:"Smart Home",

image:"images/project2.jpg",

description:
"ระบบควบคุมอุปกรณ์ภายในบ้านด้วย Arduino และเซนเซอร์ต่าง ๆ",

tech:["Arduino","C++","IoT"]

},

{

title:"Line Follower Robot",

image:"images/project3.jpg",

description:
"หุ่นยนต์เดินตามเส้น พร้อมระบบตรวจจับเส้นอัตโนมัติ",

tech:["Arduino","Robot","Sensor"]

}

];

const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.querySelector(".modal-tech");

document.querySelectorAll(".detail-btn").forEach(button => {

    button.addEventListener("click", () => {

        const index = Number(button.dataset.project);

        const data = projects[index];

        modalImage.src = data.image;

        modalTitle.textContent = data.title;

        modalDescription.textContent = data.description;

        modalTech.innerHTML = "";

        data.tech.forEach(item => {

            const span = document.createElement("span");

            span.textContent = item;

            modalTech.appendChild(span);

        });

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});

document.querySelector(".close-modal")?.addEventListener("click", () => {

    modal.classList.remove("show");

    document.body.style.overflow = "";

});

modal?.addEventListener("click", e => {

    if (e.target === modal) {

        modal.classList.remove("show");

        document.body.style.overflow = "";

    }

});

/* =======================================================
   CONTACT FORM
======================================================= */

const contactForm = document.getElementById("contactForm");

contactForm?.addEventListener("submit", e => {

    e.preventDefault();

    Swal.fire({

        icon:"success",

        title:"ส่งข้อความสำเร็จ",

        text:"ขอบคุณที่ติดต่อมา 😊",

        confirmButtonColor:"#7C6CFF"

    });

    contactForm.reset();

});

/* =======================================================
   ESC KEY
======================================================= */

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        modal?.classList.remove("show");

        lightbox?.classList.remove("show");

        document.body.style.overflow = "";

    }

});
/* =======================================================
   GALLERY LIGHTBOX
======================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const galleryItems = document.querySelectorAll(".gallery-item");
const closeLightbox = document.querySelector(".close-lightbox");

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        lightbox.classList.add("show");

        lightboxImg.src = item.src;

        lightboxImg.alt = item.alt;

        document.body.style.overflow = "hidden";

    });

});

if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.classList.remove("show");

        document.body.style.overflow = "";

    });

}

lightbox?.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.classList.remove("show");

        document.body.style.overflow = "";

    }

});

/* =======================================================
   PROJECT MODAL
======================================================= */

const projects = [

{

title:"Engineering Portfolio Website",

image:"images/project1.jpg",

description:
"เว็บไซต์ Portfolio แบบ Responsive พร้อม Animation, Glassmorphism และธีมวิศวกรรม",

tech:["HTML","CSS","JavaScript"]

},

{

title:"Smart Home",

image:"images/project2.jpg",

description:
"ระบบควบคุมอุปกรณ์ภายในบ้านด้วย Arduino และเซนเซอร์ต่าง ๆ",

tech:["Arduino","C++","IoT"]

},

{

title:"Line Follower Robot",

image:"images/project3.jpg",

description:
"หุ่นยนต์เดินตามเส้น พร้อมระบบตรวจจับเส้นอัตโนมัติ",

tech:["Arduino","Robot","Sensor"]

}

];

const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.querySelector(".modal-tech");

document.querySelectorAll(".detail-btn").forEach(button => {

    button.addEventListener("click", () => {

        const index = Number(button.dataset.project);

        const data = projects[index];

        modalImage.src = data.image;

        modalTitle.textContent = data.title;

        modalDescription.textContent = data.description;

        modalTech.innerHTML = "";

        data.tech.forEach(item => {

            const span = document.createElement("span");

            span.textContent = item;

            modalTech.appendChild(span);

        });

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});

document.querySelector(".close-modal")?.addEventListener("click", () => {

    modal.classList.remove("show");

    document.body.style.overflow = "";

});

modal?.addEventListener("click", e => {

    if (e.target === modal) {

        modal.classList.remove("show");

        document.body.style.overflow = "";

    }

});

/* =======================================================
   CONTACT FORM
======================================================= */

const contactForm = document.getElementById("contactForm");

contactForm?.addEventListener("submit", e => {

    e.preventDefault();

    Swal.fire({

        icon:"success",

        title:"ส่งข้อความสำเร็จ",

        text:"ขอบคุณที่ติดต่อมา 😊",

        confirmButtonColor:"#7C6CFF"

    });

    contactForm.reset();

});

/* =======================================================
   ESC KEY
======================================================= */

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        modal?.classList.remove("show");

        lightbox?.classList.remove("show");

        document.body.style.overflow = "";

    }

});
/* =======================================================
   PROJECT MODAL
======================================================= */

.modal{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:rgba(15,20,40,.85);

display:flex;

justify-content:center;

align-items:center;

opacity:0;

visibility:hidden;

transition:.35s;

z-index:9999;

backdrop-filter:blur(8px);

}

.modal.show{

opacity:1;

visibility:visible;

}

.modal-content{

width:min(700px,92%);

background:white;

border-radius:30px;

padding:35px;

position:relative;

animation:modalShow .35s;

}

@keyframes modalShow{

from{

transform:translateY(30px) scale(.9);

opacity:0;

}

to{

transform:translateY(0) scale(1);

opacity:1;

}

}

.modal-content img{

width:100%;

height:320px;

object-fit:cover;

border-radius:20px;

margin-bottom:25px;

}

.modal-content h2{

margin-bottom:15px;

color:var(--navy);

}

.modal-content p{

line-height:1.8;

color:#666;

margin-bottom:25px;

}

.modal-tech{

display:flex;

flex-wrap:wrap;

gap:12px;

margin-bottom:30px;

}

.modal-tech span{

padding:10px 18px;

border-radius:999px;

background:linear-gradient(

135deg,

var(--primary),

var(--secondary)

);

color:white;

font-size:14px;

}

.close-modal{

position:absolute;

top:20px;

right:25px;

font-size:34px;

cursor:pointer;

color:var(--primary);

transition:.3s;

}

.close-modal:hover{

transform:rotate(90deg);

}

/* =======================================================
   TOP BUTTON
======================================================= */

#topBtn{

opacity:0;

visibility:hidden;

transform:translateY(20px);

}

#topBtn.show{

opacity:1;

visibility:visible;

transform:translateY(0);

}

/* =======================================================
   MOBILE MENU
======================================================= */

.nav-menu.show{

display:flex;

position:absolute;

top:90px;

left:50%;

transform:translateX(-50%);

width:92%;

padding:25px;

border-radius:25px;

background:rgba(255,255,255,.95);

backdrop-filter:blur(20px);

flex-direction:column;

gap:20px;

box-shadow:var(--shadow);

}

/* =======================================================
   DARK MODE
======================================================= */

body.dark{

background:#101322;

color:white;

}

body.dark section{

background:transparent;

}

body.dark .profile-card,

body.dark .info-card,

body.dark .goal-card,

body.dark .stat-card,

body.dark .timeline-card,

body.dark .skill-box,

body.dark .project-card,

body.dark .contact-card,

body.dark .contact-form,

body.dark .modal-content{

background:#1b2138;

border-color:#2f3861;

}

body.dark h1,

body.dark h2,

body.dark h3,

body.dark h4{

color:white;

}

body.dark p,

body.dark span{

color:#d8d8d8;

}

body.dark input,

body.dark textarea{

background:#2a3154;

color:white;

}

body.dark .contact-item{

background:#2a3154;

}

body.dark .social-links a{

background:#2a3154;

color:white;

}

body.dark footer{

background:#0c0f1d;

}
/* =======================================================
   SKILL CARD ANIMATION
======================================================= */

const skillCards = document.querySelectorAll(".skill-box");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{

    threshold:0.25

});

skillCards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition=".8s";

    skillObserver.observe(card);

});

/* =======================================================
   FLOATING BUBBLES
======================================================= */

function createBubble(){

    const bubble=document.createElement("span");

    bubble.className="bubble";

    bubble.style.left=Math.random()*100+"vw";

    bubble.style.width=20+Math.random()*80+"px";

    bubble.style.height=bubble.style.width;

    bubble.style.animationDuration=

        8+Math.random()*12+"s";

    document.querySelector(".floating-bg")

        .appendChild(bubble);

    setTimeout(()=>{

        bubble.remove();

    },20000);

}

setInterval(createBubble,1800);

/* =======================================================
   RANDOM GEAR ROTATION
======================================================= */

document.querySelectorAll(".gear").forEach(gear=>{

    const speed=6+Math.random()*12;

    gear.style.animationDuration=speed+"s";

});

/* =======================================================
   PARALLAX BUBBLES
======================================================= */

window.addEventListener("scroll",()=>{

    const scroll=window.scrollY;

    document.querySelectorAll(".bubble").forEach(item=>{

        item.style.transform=

        `translateY(${scroll*0.08}px)`;

    });

});

/* =======================================================
   NAVBAR SHADOW
======================================================= */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow=

        "0 10px 35px rgba(0,0,0,.12)";

    }

    else{

        header.style.boxShadow="none";

    }

});

/* =======================================================
   BUTTON RIPPLE
======================================================= */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const d=Math.max(

this.clientWidth,

this.clientHeight

);

circle.style.width=d+"px";

circle.style.height=d+"px";

circle.style.left=

e.offsetX-d/2+"px";

circle.style.top=

e.offsetY-d/2+"px";

circle.className="ripple";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/* =======================================================
   PRELOAD IMAGES
======================================================= */

const images=[

"images/profile.png",

"images/project1.jpg",

"images/project2.jpg",

"images/project3.jpg",

"images/certificate1.jpg",

"images/certificate2.jpg",

"images/certificate3.jpg"

];

images.forEach(src=>{

const img=new Image();

img.src=src;

});

/* =======================================================
   CONSOLE MESSAGE
======================================================= */

console.log(

"%cEngineering Portfolio 2026",

"font-size:22px;color:#7C6CFF;font-weight:bold;"

);

console.log(

"%cDesigned with HTML CSS JavaScript",

"font-size:14px;color:#FF69B4"

);

/* =======================================================
   END
======================================================= */
