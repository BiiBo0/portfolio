
const textElement = document.getElementById('typing');
var textToType = "Developer";
let index = 0;
let isDeleting = false;



function type() {
    const currentText = textElement.textContent;

    if (!isDeleting) {
        // Typing phase
        textElement.textContent = textToType.slice(0, index + 1);
        index++;

        // If the text is fully typed, switch to deleting phase
        if (index === textToType.length) {
            isDeleting = true;
            setTimeout(type, 500); // Pause before deleting
        } else {
            setTimeout(type, 100); // Typing speed
        }
    } else {
        // Deleting phase
        textElement.textContent = textToType.slice(0, index - 1);
        index--;

        // If the text is fully deleted, switch back to typing phase
        if (index === 0) {
            isDeleting = false;
            if(textToType=="Developer")
                textToType="Designer";
            else{
                textToType="Developer";
            }
            setTimeout(type, 500); // Pause before typing again
        } else {
            setTimeout(type, 50); // Deleting speed (faster than typing)
        }
    }
}
var services=document.querySelectorAll(".item");
console.log(services);


window.addEventListener('scroll', function() {
    var photo= document.getElementById("myPhoto");
    var bio= document.getElementById("bio");
    var html=document.getElementById("html");
    var css=document.getElementById("css");
    var java=document.getElementById("java");
    var valueOfScorll=window.scrollY;
    console.log(valueOfScorll);
    if(valueOfScorll<=10){
        photo.style.left=-600+'px';
        bio.style.right=-800+'px';
        html.style.width=0+"%";
        html.innerHTML='0%';
        css.style.width=0+"%";
        css.innerHTML='0%';
        java.style.width=0+"%";
        java.innerHTML='0%';
        services.forEach((service) => {
            service.style.opacity=0;
        });
    }
    if(valueOfScorll>=200){
        photo.style.left=0+'px';
        bio.style.right=0+'px';
        // bio.style.display = 'block';
    }
    if(valueOfScorll>=1060){
        services.forEach((service) => {
            service.style.opacity=1;
        });
    }
    if(valueOfScorll>=1540){
        html.style.width=90+"%";
        html.innerHTML='90%';
        css.style.width=85+"%";
        css.innerHTML='85%';
        java.style.width=75+"%";
        java.innerHTML='75%';
    }
});

type();

// document.addEventListener("scroll", function () {
//     const skillsSection = document.getElementById("skills");
//     const skillBars = document.querySelectorAll(".skill-level");
  
//     const sectionTop = skillsSection.offsetTop;
//     const sectionHeight = skillsSection.offsetHeight;
//     const scrollPosition = window.scrollY + window.innerHeight;
  
//     if (scrollPosition > sectionTop + sectionHeight / 2) {
//       skillBars.forEach((bar) => {
//         bar.style.width = bar.getAttribute("data-percent");
//       });
//     }
//   });