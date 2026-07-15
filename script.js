/* ========================================= */
/* ENGINEERING PORTFOLIO */
/* script.js */
/* Part 1 */
/* ========================================= */

/* ========================= */
/* AOS */
/* ========================= */

AOS.init({

duration:1000,

once:true,

offset:100

});

/* ========================= */
/* Loader */
/* ========================= */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},1200);

});

/* ========================= */
/* Mobile Menu */
/* ========================= */

const menuBtn=document.querySelector(".menu-btn");

const navMenu=document.querySelector(".nav-menu");

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

menuBtn.classList.toggle("active");

});

/* ========================= */

document.querySelectorAll(".nav-menu a")

.forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

});

});

/* ========================= */
/* Sticky Navbar */
/* ========================= */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(8,27,51,.97)";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

}

else{

header.style.background="rgba(8,27,51,.92)";

header.style.boxShadow="none";

}

});

/* ========================= */
/* Typing Effect */
/* ========================= */

const words=[

"Engineering Student",

"Future Engineer",

"Web Developer",

"Programmer",

"Creative Thinker"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

const typing=document.querySelector(".typing");

function typeEffect(){

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(typeEffect,1200);

return;

}

}

else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(typeEffect,deleting?50:100);

}

typeEffect();

/* ========================= */
/* Scroll To Top */
/* ========================= */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ========================= */
/* Counter */
/* ========================= */

const counters=document.querySelectorAll(".counter");

const speed=120;

function runCounter(){

counters.forEach(counter=>{

const target=+counter.dataset.target;

const update=()=>{

const value=+counter.innerText;

const increment=Math.ceil(target/speed);

if(value<target){

counter.innerText=value+increment;

requestAnimationFrame(update);

}

else{

counter.innerText=target;

}

};

update();

});

}

let started=false;

window.addEventListener("scroll",()=>{

const section=document.querySelector(".counter-section");

const position=section.getBoundingClientRect().top;

if(position<window.innerHeight && !started){

started=true;

runCounter();

}

});

/* ========================================= */
/* Part 2 */
/* Dark Mode + Lightbox + Modal */
/* ========================================= */

/* ========================= */
/* Dark Mode */
/* ========================= */

const darkButton=document.createElement("button");

darkButton.className="dark-toggle";

darkButton.innerHTML='<i class="fa-solid fa-moon"></i>';

document.body.appendChild(darkButton);

function enableDarkMode(){

document.body.classList.add("dark");

darkButton.innerHTML='<i class="fa-solid fa-sun"></i>';

localStorage.setItem("theme","dark");

}

function disableDarkMode(){

document.body.classList.remove("dark");

darkButton.innerHTML='<i class="fa-solid fa-moon"></i>';

localStorage.setItem("theme","light");

}

if(localStorage.getItem("theme")==="dark"){

enableDarkMode();

}

darkButton.addEventListener("click",()=>{

if(document.body.classList.contains("dark")){

disableDarkMode();

}else{

enableDarkMode();

}

});

/* ========================= */
/* Lightbox Gallery */
/* ========================= */

const galleryImages=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.className="lightbox";

const lightboxImage=document.createElement("img");

lightbox.appendChild(lightboxImage);

document.body.appendChild(lightbox);

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImage.src=image.src;

lightboxImage.alt=image.alt || "Certificate";

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

/* ========================= */
/* Project Modal */
/* ========================= */

const projectData=[

{

title:"Engineering Portfolio Website",

description:"เว็บไซต์ Portfolio พัฒนาโดยใช้ HTML, CSS และ JavaScript พร้อม Responsive Design และ Animation",

image:"images/project1.jpg"

},

{

title:"Arduino Smart Home",

description:"ระบบบ้านอัจฉริยะควบคุมไฟ พัดลม และเซนเซอร์ด้วย Arduino",

image:"images/project2.jpg"

},

{

title:"Robot Line Follower",

description:"หุ่นยนต์เดินตามเส้นพร้อมเซนเซอร์อินฟราเรดและระบบควบคุมความเร็ว",

image:"images/project3.jpg"

}

];

const modal=document.createElement("div");

modal.className="modal";

modal.innerHTML=`

<div class="modal-content">

<span class="close-modal">&times;</span>

<h2 id="modalTitle"></h2>

<img id="modalImage" style="width:100%;border-radius:15px;margin:20px 0;">

<p id="modalDescription"></p>

</div>

`;

document.body.appendChild(modal);

const modalTitle=document.getElementById("modalTitle");

const modalImage=document.getElementById("modalImage");

const modalDescription=document.getElementById("modalDescription");

const detailButtons=document.querySelectorAll(".detail-btn");

detailButtons.forEach((button,index)=>{

button.addEventListener("click",()=>{

modal.classList.add("active");

modalTitle.textContent=projectData[index].title;

modalImage.src=projectData[index].image;

modalDescription.textContent=projectData[index].description;

});

});

modal.querySelector(".close-modal").addEventListener("click",()=>{

modal.classList.remove("active");

});

modal.addEventListener("click",(event)=>{

if(event.target===modal){

modal.classList.remove("active");

}

});

/* ========================================= */
/* Part 3 */
/* Animation + Form + Effects */
/* ========================================= */

/* ========================= */
/* Scroll Reveal Animation */
/* ========================= */

const revealElements=document.querySelectorAll(

".skill-card,.project-card,.timeline-content,.about-card div,.contact-info,.contact-form"

);

function revealOnScroll(){

const trigger=window.innerHeight*0.85;

revealElements.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("animate-up");

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/* ========================= */
/* Progress Bar Animation */
/* ========================= */

const progressBars=document.querySelectorAll(".progress-bar");

let progressPlayed=false;

function animateProgress(){

const section=document.querySelector("#skills");

if(!section) return;

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-100 && !progressPlayed){

progressPlayed=true;

progressBars.forEach(bar=>{

const finalWidth=bar.style.width || getComputedStyle(bar).width;

const cssWidth=window.getComputedStyle(bar).width;

const percent=bar.classList.contains("html")?"90%":
bar.classList.contains("css")?"85%":
bar.classList.contains("js")?"75%":
bar.classList.contains("py")?"80%":
bar.classList.contains("c")?"70%":"75%";

bar.style.width="0";

setTimeout(()=>{

bar.style.transition="width 1.5s ease";

bar.style.width=percent;

},150);

});

}

}

window.addEventListener("scroll",animateProgress);

animateProgress();

/* ========================= */
/* Hero Parallax */
/* ========================= */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const offset=window.pageYOffset;

if(hero){

hero.style.backgroundPositionY=(offset*0.5)+"px";

}

});

/* ========================= */
/* Contact Form Validation */
/* ========================= */

const form=document.querySelector(".contact-form form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=form.querySelector("input[type='text']");

const email=form.querySelector("input[type='email']");

const message=form.querySelector("textarea");

if(

name.value.trim()==="" ||

email.value.trim()==="" ||

message.value.trim()===""

){

alert("กรุณากรอกข้อมูลให้ครบถ้วน");

return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email.value)){

alert("รูปแบบอีเมลไม่ถูกต้อง");

return;

}

alert("ส่งข้อความเรียบร้อยแล้ว");

form.reset();

});

}

/* ========================= */
/* ESC Close */
/* ========================= */

document.addEventListener("keydown",(event)=>{

if(event.key==="Escape"){

if(lightbox.classList.contains("active")){

lightbox.classList.remove("active");

}

if(modal.classList.contains("active")){

modal.classList.remove("active");

}

}

});

/* ========================= */
/* Hover Tilt Effect */
/* ========================= */

const cards=document.querySelectorAll(

".project-card,.skill-card,.about-card div"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(event)=>{

const rect=card.getBoundingClientRect();

const x=event.clientX-rect.left;

const y=event.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*10;

const rotateX=((y/rect.height)-0.5)*-10;

card.style.transform=

`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});

/* ========================================= */
/* Part 4 */
/* Final Effects */
/* ========================================= */

/* ========================= */
/* Active Navigation */
/* ========================= */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.offsetHeight;

if(window.pageYOffset>=top){

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

/* ========================= */
/* Smooth Scroll */
/* ========================= */

navLinks.forEach(link=>{

link.addEventListener("click",(event)=>{

event.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ========================= */
/* Floating Gear Animation */
/* ========================= */

const gear=document.querySelector(".gear");

if(gear){

let angle=0;

setInterval(()=>{

angle+=1;

gear.style.transform=`rotate(${angle}deg)`;

},30);

}

/* ========================= */
/* Random Fade Elements */
/* ========================= */

const randomItems=document.querySelectorAll(

".project-card,.skill-card,.timeline-content"

);

randomItems.forEach((item,index)=>{

item.style.animationDelay=`${index*0.15}s`;

});

/* ========================= */
/* Welcome Console */
/* ========================= */

console.log("%cEngineering Portfolio",

"font-size:24px;color:#1565c0;font-weight:bold;");

console.log(

"Developed with HTML CSS JavaScript"

);

/* ========================= */
/* Disable Image Drag */
/* ========================= */

document.querySelectorAll("img").forEach(image=>{

image.setAttribute("draggable","false");

});

/* ========================= */
/* Disable Right Click */
/* (ลบส่วนนี้ออกได้หากไม่ต้องการ) */
/* ========================= */

document.addEventListener("contextmenu",(event)=>{

event.preventDefault();

});

/* ========================= */
/* Current Year */
/* ========================= */

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=

`© ${new Date().getFullYear()} Engineering Portfolio`;

}

/* ========================= */
/* Loading Finished */
/* ========================= */

window.addEventListener("load",()=>{

document.body.classList.add("animate-fade");

});

/* ========================= */
/* End */
/* ========================= */

console.log("Portfolio Loaded Successfully");
