/* ===============================
   Popup Gear
================================= */

window.addEventListener("load", () => {

    const popup = document.getElementById("popup");

    setTimeout(() => {

        popup.style.opacity = "0";

        popup.style.transition = "0.8s";

        setTimeout(() => {

            popup.style.display = "none";

        },800);

    },1800);

});


/* ===============================
   Scroll Animation
================================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});


sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="1s";

observer.observe(section);

});


/* ===============================
   Gallery Click
================================= */

const images=document.querySelectorAll(".gallery img,.card img");

images.forEach(img=>{

img.onclick=function(){

const bg=document.createElement("div");

bg.style.position="fixed";
bg.style.top="0";
bg.style.left="0";
bg.style.width="100%";
bg.style.height="100%";
bg.style.background="rgba(0,0,0,.9)";
bg.style.display="flex";
bg.style.justifyContent="center";
bg.style.alignItems="center";
bg.style.zIndex="99999";

const photo=document.createElement("img");

photo.src=this.src;

photo.style.maxWidth="90%";
photo.style.maxHeight="90%";
photo.style.borderRadius="10px";

bg.appendChild(photo);

bg.onclick=function(){

bg.remove();

}

document.body.appendChild(bg);

}

});


/* ===============================
   Back To Top Button
================================= */

const btn=document.createElement("button");

btn.innerHTML="⬆";

btn.style.position="fixed";
btn.style.right="20px";
btn.style.bottom="20px";
btn.style.width="55px";
btn.style.height="55px";
btn.style.borderRadius="50%";
btn.style.border="none";
btn.style.background="#ff7b00";
btn.style.color="white";
btn.style.fontSize="22px";
btn.style.cursor="pointer";
btn.style.display="none";
btn.style.zIndex="999";

document.body.appendChild(btn);

window.onscroll=function(){

if(window.scrollY>400){

btn.style.display="block";

}else{

btn.style.display="none";

}

}

btn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
