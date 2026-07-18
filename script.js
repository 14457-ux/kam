/* ===================================
   Engineering Portfolio Script
=================================== */

// ================================
// Popup
// ================================

const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");

window.onload = () => {
    popup.style.display = "flex";
};

closeBtn.onclick = () => {
    popup.style.display = "none";
};

window.onclick = (e) => {
    if (e.target == popup) {
        popup.style.display = "none";
    }
};

// ================================
// Scroll Animation
// ================================

const sections = document.querySelectorAll("section");

function revealSection(){

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealSection);

revealSection();

// ================================
// Scroll To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`

position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
font-size:22px;
cursor:pointer;
display:none;
background:#ff69b4;
color:white;
box-shadow:0 0 20px hotpink;
z-index:999;

`;

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ================================
// Progress Bar
// ================================

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

progress.style.cssText=`

position:fixed;
top:0;
left:0;
height:5px;
background:linear-gradient(90deg,#ff69b4,#ff1493);
width:0%;
z-index:99999;

`;

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const percent=(window.scrollY/total)*100;

progress.style.width=percent+"%";

});

// ================================
// Mouse Glow
// ================================

const cursor=document.createElement("div");

document.body.appendChild(cursor);

cursor.style.cssText=`

position:fixed;
width:25px;
height:25px;
border-radius:50%;
background:rgba(255,105,180,.45);
pointer-events:none;
filter:blur(3px);
z-index:99999;
transition:.05s;

`;

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX-12+"px";

cursor.style.top=e.clientY-12+"px";

});

// ================================
// Spark Effect
// ================================

document.addEventListener("click",(e)=>{

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=e.clientX+"px";

star.style.top=e.clientY+"px";

star.style.fontSize="25px";

star.style.pointerEvents="none";

star.style.transition="1s";

document.body.appendChild(star);

setTimeout(()=>{

star.style.transform="translateY(-80px) scale(2)";

star.style.opacity="0";

},10);

setTimeout(()=>{

star.remove();

},1000);

});

// ================================
// Button Glow
// ================================

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 40px hotpink";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="0 0 20px hotpink";

});

});

// ================================
// Navbar Highlight
// ================================

const links=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=sec.offsetTop-120;

const height=sec.clientHeight;

if(scrollY>=top){

current=sec.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.href.includes(current)){

link.classList.add("active");

}

});

});
