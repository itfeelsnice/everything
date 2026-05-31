
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
let div4 = document.querySelector("#div4");
let div5 = document.querySelector("#div5");
let top1 = document.querySelector("#top1");

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



