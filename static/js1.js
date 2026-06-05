
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
let div4 = document.querySelector("#div4");
let div5 = document.querySelector("#div5");
let top1 = document.querySelector("#top1");
let a6 = document.querySelector(".a6");
let a7 = document.querySelector(".a7");
setInterval(() =>{
    div3.classList.add("opac1");
}, 2000);

setInterval(() =>{
    div4.classList.add("opac1");
}, 1000);

setInterval(() =>{
    div5.classList.add("opac1");
}, 3000);

document.addEventListener("mousemove", (e) =>{
    top1.style.top = `${e.pageY}px`;
    top1.style.left = `${e.pageX}px`; 
});

let watch1 = new IntersectionObserver((salut) =>{
    let list1 = salut[0];
    if (list1.isIntersecting){
        a6.classList.add("opac2");
    }
});

let watch2 = new IntersectionObserver((salut1) =>{
    let list2 = salut1[0];
    if (list2.isIntersecting){
        a7.classList.add("opac3");
    }
});

watch1.observe(a6);
watch2.observe(a7);

let grab2 = document.querySelector("#grab2");
let grab3 = document.querySelector("#grab3");
let grab4 = document.querySelector("#grab4");

let leftX = 0;
let topY = 0;
let isgrabbing = false;

grab2.addEventListener("mousedown", (e) =>{
    isgrabbing = true;
    grab2.classList.add("click1");

    leftX = e.clientX - grab2.offsetLeft;
    topY = e.clientY - grab2.offsetTop;
});

document.addEventListener("mousemove", (e) =>{
    if(isgrabbing === false) return;

    grab2.style.left = (e.clientX - leftX) + "px";
    grab2.style.top = (e.clientY - topY) + "px";
});

document.addEventListener("mouseup", (e) =>{
    isgrabbing = false;
    grab2.classList.remove("click1")
});

let left1X = 0;
let top1Y = 0;
let isgrabbing1 = false;

grab3.addEventListener("mousedown", (e) =>{
    isgrabbing1 = true;
    grab3.classList.add("click1");

    left1X = e.clientX - grab3.offsetLeft;
    top1Y = e.clientY - grab3.offsetTop;
});

document.addEventListener("mousemove", (e) =>{
    if(isgrabbing1 === false) return;

    grab3.style.left = (e.clientX - left1X) + "px";
    grab3.style.top = (e.clientY - top1Y) + "px";
});

document.addEventListener("mouseup", (e) =>{
    isgrabbing1 = false;
    grab3.classList.remove("click1")
});

let left2X = 0;
let top2Y = 0;
let isgrabbing2 = false;

grab4.addEventListener("mousedown", (e) =>{
    isgrabbing2 = true;
    grab4.classList.add("click1");

    left2X = e.clientX - grab4.offsetLeft;
    top2Y = e.clientY - grab4.offsetTop;
});

document.addEventListener("mousemove", (e) =>{
    if(isgrabbing2 === false) return;

    grab4.style.left = (e.clientX - left2X) + "px";
    grab4.style.top = (e.clientY - top2Y) + "px";
});

document.addEventListener("mouseup", (e) =>{
    isgrabbing2 = false;
    grab4.classList.remove("click1")
});

let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");

let inp2 = document.querySelector("#inp2");
let inp3 = document.querySelector("#inp3");
let inp4 = document.querySelector("#inp4");

inp2.addEventListener("input", () =>{
    text1.textContent = inp2.value;
});

inp3.addEventListener("input", () =>{
    text2.textContent = inp3.value;
});

inp4.addEventListener("input", () =>{
    text3.textContent = inp4.value;
});
