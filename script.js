// typewriter effect

var k = 0;

var aboutmetxt = 'I am Nina Iyer, a 9th grader at Canyon Crest Academy, and I have played both indoor and beach volleyball here at CCA. This site is a guide to the world of volleyball, based on my experience!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  
  if (k < aboutmetxt.length) {
        document.getElementById("aboutme").innerHTML += aboutmetxt.charAt(k);
        k++;
        // 3. Call the correct function name with a delay
        setTimeout(typeWriter, speed);
    }
}


















//back to top button



// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

























//light mode button
function lightmode() {
  var element = document.body;
  element.classList.toggle("lightmode");
}


















var i = 0; // Move i outside to persist between calls
var speed = 50;
var titletxt = "";

function titletyped() {
    // 1. Determine text (This part was fine)
    if (document.title === "Guide to Volleyball Page"){
        titletxt = 'Volleyball';
    } else if (document.title === "Positions Page") {
        titletxt = 'Positions';
    } else if (document.title === "Beach Volleyball Page") {
        titletxt = 'Beach Volleyball';
    } else if (document.title === "Gear Page") {
        titletxt = 'Volleyball Gear';
    } else if (document.title === "Skills Page") {
        titletxt = 'Tips and Drills for Skills';
    }

    // 2. Typewriter Effect
    if (i < titletxt.length) {
        document.getElementById("pagetitle").innerHTML += titletxt.charAt(i);
        i++;
        // 3. Call the correct function name with a delay
        setTimeout(titletyped, speed);
    }
}
//actually call title typwriter function



