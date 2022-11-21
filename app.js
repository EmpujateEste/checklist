document.querySelector(".menu-btn").addEventListener("click", () => {
    console.log("ran");
    slides = document.querySelectorAll(".burg");
    if(slides[0].style.width == "30px"){
        slides[0].style.width = "40px";
        slides[2].style.width = "40px";
        slides[0].style.left = "0px";
        slides[2].style.left = "0px";
    }
    else{
        slides[0].style.width = "30px";
        slides[2].style.width = "30px";
        slides[0].style.left = "5px";
        slides[2].style.left = "5px";
    }
});
