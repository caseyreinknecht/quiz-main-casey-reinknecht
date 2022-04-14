import { gsap } from "gsap";

document.querySelector("#Casey Reinknecht").innerHTML="Casey Reinknecht"; 




const mainTL=gsap.timeline();
mainTLPart1.from("box red", {duration:1, ease: "power1.out", x:0})
.from("box blue", {duration:1, ease: "power1.out", x:350})
.to("box red", {duration:2, ease: "power1.out", y:0})
.to("box blue", {duration:2, ease: "power1.out", y:300})

const mainTLPart2=gsap.timeline();
gsap.to("graph", {duration: 2, Alpha:1})
.from("box blue", {duration:1, ease: "power1.out", x:350})
.to("box red", {duration:2, ease: "power1.out", y:0})
.to("box blue", {duration:2, ease: "power1.out", y:300})
.to("green", {duration:3, ease:"power1.out", x:400} )