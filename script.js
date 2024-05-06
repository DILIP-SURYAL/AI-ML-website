function navAnimation() {
    let nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", () => {
        let tl = gsap.timeline();
        tl.to(".nav-bottom", {
            height: "23vh"
        })
        tl.to(".nav-elem h5", {
            display: "block"
        })
        tl.to(".nav-elem h5 span", {
            y: 0,
            // duration:0.1,
            stagger: {
                amount: 0.6
            }
        })
    })
    nav.addEventListener("mouseleave", () => {
        let tl1 = gsap.timeline();
        tl1.to(".nav-elem h5 span", {
            y: 20,
            stagger: {
                amount: 0.1
            }
        })
        tl1.to(".nav-elem h5", {
            display: "none"
        })
        tl1.to(".nav-bottom", {
            height: "0vh",
            duration: 0.2
        })
    })
}
function page2Animation() {

    let rElem = document.querySelectorAll(".right-elem");
    let rImg = document.querySelectorAll(".right-elem img")

    rElem.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1,
            })
            gsap.to(elem, {
                delay: 0,
                borderTop: "1.5px solid white"
            })
        })
        elem.addEventListener("mouseleave", () => {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
            gsap.to(elem, {
                delay: 0,
                borderTop: "1px solid #333"
            })
        })
        elem.addEventListener("mousemove", (evt) => {
            gsap.to(elem.childNodes[3], {
                x: evt.x - elem.getBoundingClientRect().x - 60,
                y: evt.y - elem.getBoundingClientRect().y - 60
            })
        })
    })
}
function page3Animation() {

    var p3c = document.querySelector(".page3-center")
    var p3v = document.querySelector(".page3 video")

    p3c.addEventListener("click", () => {
        p3v.play();

        gsap.to(p3v, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            duration: 1,
            borderRadius: 0
        })
        p3c.style.zIndex = 0;
        p3v.style.zIndex = 1;
    })
    p3v.addEventListener("click", () => {
        p3v.pause();

        gsap.to(p3v, {
            transform: "scaleX(0.3) scaleY(0)",
            opacity: 0,
            duration: 0.3,
            borderRadius: 0,
        })
        p3c.style.zIndex = 1;
        p3v.style.zIndex = 0;
    })
}
function detailsOpener(){
    let pRcontent = document.querySelectorAll("summary")
    let flag1 = 0
    pRcontent.forEach((elem) => {
        elem.addEventListener("click", () => {
            if (flag1 === 0) {
                elem.childNodes[3].style.transform = "rotate(90deg)";
                flag1 = 1;
            } else {
                elem.childNodes[3].style.transform = "rotate(0)";
                flag1 = 0;
            }
        })
    })
}
function loadingAnimation() {
    var aText = document.querySelector(".page1")

    var h1 = aText.childNodes[3]

    var h1Text = h1.textContent
    console.log(h1Text)

    var arrayOfString = h1Text.split("")
    console.log(arrayOfString)

    var str = ""
    arrayOfString.forEach((elem,index)=>{
        str+=`<span>${elem}</span>`
        if(index === 5){
            str+=" ";
        }
    })
    h1.innerHTML = str;
    var tl = gsap.timeline({duration:1})
    tl.from("html, body, .main", {
        opacity: 0,
        duration: 0.2,
        // delay: 0.2
    })
    tl.from("html,body, .main", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 1,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from(".page1 h1 span",{
        y:100,
        opacity:0,
        duration:0.1,
        stagger:0.03,
        delay: -0.2
    })
    tl.from(".page1 p, .page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
    // tl.from(".sectionAll",{
    //     display:"none",
    //     opacity:0,
    //     delay:-0.3
    // })
}
function page6Animation(){
    gsap.to(".div1 h4",{
        x:0,
        scrollTrigger:{
            trigger:".div1 h4",
            scroller:"body",
            start:"top 70%",
            end:"top -100%",
            scrub:3
        }
    })
}

window.onload = function(){
    loadingAnimation();
}
navAnimation();
page2Animation();
page3Animation();
detailsOpener();
page3Animation();
page6Animation();


