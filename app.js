var num = 40;
var left = 0;
dir = true;

var hmen = document.querySelector(".hmenu");

document.querySelector(".menu-btn").addEventListener("click", () => {
    console.log("ran");
    slides = document.querySelectorAll(".burg");
    var interval = setInterval(function(){
        if((num <= 41 && num > 24) && dir){
            slides[0].style.width = num + "px";
            slides[2].style.width = num + "px";
            slides[0].style.left = left + "px";
            slides[2].style.left = left + "px";
            num -= 0.5;
            left += 0.25;
            console.log(num);
            if(num == 25){
                dir = false;
                clearInterval(interval);
            }
        }
        else if((num >=24 && num < 41) && !dir){
            slides[0].style.width = num + "px";
            slides[2].style.width = num + "px";
            slides[0].style.left = left + "px";
            slides[2].style.left = left + "px";
            num += 0.5;
            left -= 0.25;
            console.log(num);
            if(num == 40){
                dir = true;
                clearInterval(interval);
            }
        }
    }, 25);
});
