
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
let div4 = document.querySelector("#div4");
let div5 = document.querySelector("#div5");
let top1 = document.querySelector("#top1");
let a6 = document.querySelector(".a6");
let a7 = document.querySelector(".a7");

let grab2 = document.querySelector("#grab2");
let grab3 = document.querySelector("#grab3");
let grab4 = document.querySelector("#grab4");

let inp2 = document.querySelector("#inp2");
let inp3 = document.querySelector("#inp3");
let inp4 = document.querySelector("#inp4");

let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");

function getsave(){
    let get1X = localStorage.getItem("save1X");
    let get1Y = localStorage.getItem("save1Y");

    let get2X = localStorage.getItem("save2X");
    let get2Y = localStorage.getItem("save2Y");

    let get3X = localStorage.getItem("save3X");
    let get3Y = localStorage.getItem("save3Y");
    // console.log(get1);
    grab2.style.left = get1X;
    grab2.style.top = get1Y;

    grab3.style.left = get2X;
    grab3.style.top = get2Y;

    grab4.style.left = get3X;
    grab4.style.top = get3Y;
}

getsave();

function getsave2(){
    let get1 = localStorage.getItem("value1");
    let get2 = localStorage.getItem("value2");
    let get3 = localStorage.getItem("value3");
    text1.textContent = get1;
    text2.textContent = get2;
    text3.textContent = get3;
}

getsave2();

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
    let save1X = (e.clientX - leftX) + "px";
    let save1Y = (e.clientY - topY) + "px";
    localStorage.setItem("save1X", save1X);
    localStorage.setItem("save1Y", save1Y);
    grab2.style.left = save1X;
    grab2.style.top = save1Y;
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

    let save2X = (e.clientX - left1X) + "px";
    let save2Y = (e.clientY - top1Y) + "px";
    grab3.style.left = save2X;
    grab3.style.top = save2Y;
    localStorage.setItem("save2X", save2X);
    localStorage.setItem("save2Y", save2Y);
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

    let save3X = (e.clientX - left2X) + "px";
    let save3Y = (e.clientY - top2Y) + "px";
    grab4.style.left = save3X;
    grab4.style.top = save3Y;
    localStorage.setItem("save3X", save3X);
    localStorage.setItem("save3Y", save3Y);
});

document.addEventListener("mouseup", (e) =>{
    isgrabbing2 = false;
    grab4.classList.remove("click1")
});

// let text1 = document.querySelector("#text1");
// let text2 = document.querySelector("#text2");
// let text3 = document.querySelector("#text3");

// let inp2 = document.querySelector("#inp2");
// let inp3 = document.querySelector("#inp3");
// let inp4 = document.querySelector("#inp4");

inp2.addEventListener("input", () =>{
    value1 = inp2.value;
    text1.textContent = value1;
    localStorage.setItem("value1", value1);
});

inp3.addEventListener("input", () =>{
    value2 = inp3.value;
    text2.textContent = value2;
    localStorage.setItem("value2", value2);
});

inp4.addEventListener("input", () =>{
    value3 = inp4.value;
    text3.textContent = value3;
    localStorage.setItem("value3", value3);
});
