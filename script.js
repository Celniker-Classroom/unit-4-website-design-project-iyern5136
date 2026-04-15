// add javascript here
var i = 0;
var txt = 'Volleyball is a fun sport. It is played by both men and women, and is offered in most high schools. I am Nina Iyer, a 9th grader at Canyon Crest Academy, and I have played both indoor and beach volleyball here at CCA. This site is a guide to the world of volleyball, based on my experience!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    console.log("button clicked");
  if (i < txt.length) {
    document.getElementById("aboutme").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}