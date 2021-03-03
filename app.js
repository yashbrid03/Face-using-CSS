const t1 = new TimelineMax();
const t2 = new TimelineMax();
const mouth = document.querySelector('.mouth');
const eye = document.querySelectorAll('.eye');
var i = 0;
var txt = ' Hello, I am YASH BRID';
var speed = 700;
var stp = 0;

//Starting eye animation 
setInterval(function () { t2.fromTo(eye, 1, { height: "0px" }, { height: "20px", ease: Power2.easeInOut }); }, 4000);

//Starting mouth animation 
var mouth_anim = setInterval(function () {
    //Starting typing effect
    typeWriter();
    //Mouth animation
    t1.fromTo(mouth, 1, { height: "0px" }, { height: "20px", ease: Power2.easeInOut })
}, 1000);

//Stop Mouth animation function
function stop() {
    clearInterval(mouth_anim);
    t1.fromTo(mouth, 1, { height: "0px" }, { height: "0px", ease: Power2.easeInOut })
}

//Typing effect Function
function typeWriter() {
    if (i < txt.length) {
        document.querySelector('.textbox').innerHTML += txt.charAt(i);
        i++;

        setTimeout(typeWriter, speed);
    }
    else {
        stp = 1;
    }
    //calling stop function after typing is over
    if (stp == 1) {
        stop();
    }
}






