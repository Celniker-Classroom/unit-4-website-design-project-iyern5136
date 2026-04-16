// typewriter effect

var i = 0;
var txt = 'I am Nina Iyer, a 9th grader at Canyon Crest Academy, and I have played both indoor and beach volleyball here at CCA. This site is a guide to the world of volleyball, based on my experience!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    console.log("button clicked");
  if (i < txt.length) {
    document.getElementById("aboutme").innerHTML += txt.charAt(i);
    i++;
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






function titletyped{
  if (document.title === "Guide to Volleyball Page"){
    var i = 0;
    var txt = 'Volleyball:'; /* The text */
    var speed = 50; /* The speed/duration of the effect in milliseconds */
    if (i < txt.length) {
        document.getElementById("pagetitle").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
  }

  else if //page title = Positions Page
    var i = 0;
    var txt = 'Positions:'; /* The text */
    var speed = 50; /* The speed/duration of the effect in milliseconds */
    if (i < txt.length) {
      document.getElementById("pagetitle").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }

  else if //page title = Beach Volleyball Page
      var i = 0;
      var txt = 'Beach Volleyball'; /* The text */
      var speed = 50; /* The speed/duration of the effect in milliseconds */
      if (i < txt.length) {
        document.getElementById("pagetitle").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }

  else if //page title = Gear Page
      var i = 0;
      var txt = 'Volleyball Gear'; /* The text */
      var speed = 50; /* The speed/duration of the effect in milliseconds */
      if (i < txt.length) {
        document.getElementById("pagetitle").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
  else if //page title = Skills Page
      var i = 0;
      var txt = 'Tips and Drills for Skills'; /* The text */
      var speed = 50; /* The speed/duration of the effect in milliseconds */
      if (i < txt.length) {
        document.getElementById("pagetitle").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    


}
