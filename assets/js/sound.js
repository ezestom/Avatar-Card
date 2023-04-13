window.onload = function () {
   const body = document.querySelector("body");
   body.classList.remove("active");
 
   const audio = document.getElementById("audio");
   const switchCheckbox = document.getElementById("switch");
 
   switchCheckbox.addEventListener("change", function () {
     if (this.checked) {
       audio.play();
       body.classList.remove("desactive");
       body.classList.add("active");
       body.style.transition = "opacity 1s";
     } else {
       audio.pause();
       body.classList.remove("active");
       body.classList.add("desactive");
       body.style.transition = "opacity 1s";
     }
   });
 };
 