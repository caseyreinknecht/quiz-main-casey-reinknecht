//import { gsap } from "gsap";

//Replace this value with your name
const yourName = "Casey Reinknecht"
document.querySelector("#Casey Reinknecht").innerHTML = yourName;

//GreenSock Timeline

const mainTL=gsap.timeline();
mainTLPart1.from("box red", {duration:1, ease: "power1.out", x:0})
.from("box blue", {duration:1, ease: "power1.out", x:350})
.to("box red", {duration:2, ease: "power1.out", y:0})
.to("box blue", {duration:2, ease: "power1.out", y:300})

;

const mainTLPart2=gsap.timeline.to("green", {duration:3, ease:"power1.out", x:400} )
gsap.to("graph", {duration: 2, Alpha:0})
.from("box red", {duration:1, ease: "power1.out", x:0})
.from("box blue", {duration:1, ease: "power1.out", x:350})
.to("box red", {duration:2, ease: "power1.out", y:0})
.to("box blue", {duration:2, ease: "power1.out", y:300})
.to("green", {duration:3, ease:"power1.out", x:400} )
;

const mainTLPart3=gsap.timeline.to("green", {duration:3, ease:"power1.out", x:400} )
gsap.to("graph", {duration: 2, Alpha:0})
.from("box red", {duration:1, ease: "power1.out", x:0})
.from("box blue", {duration:1, ease: "power1.out", x:350})
.to("graph", { duration:1, ease: "bounce.out",})
.to("box red", {duration:2, ease: "power1.out", y:0})
.to("box blue", {duration:2, ease: "power1.out", y:300})
.to("box red", 2, {rotation:360, transformOrigin:"left top"})
.to("box blue", 2, {rotation:360, transformOrigin:"left top"})

;