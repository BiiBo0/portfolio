
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

var photo= document.getElementById("myPhoto");
var bio= document.getElementById("bio");

window.addEventListener('scroll', function() {
    var valueOfScorll=window.scrollY;
    console.log(valueOfScorll);
    if(valueOfScorll>=200){
        photo.style.left=0+'px';
        bio.style.right=0+'px';
        // bio.style.display = 'block';
    }
    if(valueOfScorll>=1200 || valueOfScorll <= 200){
        photo.style.left=-600+'px';
        bio.style.right=-800+'px';
    }
});



// Start the typing effect
type();