const text = "Something strange is coming...";
let i = 0;
const speed = 70;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function notifyMe() {
  const email = prompt("Enter your email to be notified:");
  if (email) {
    alert("Thanks! We'll keep you updated.");
    // You could store this somewhere later
  }
}

function enterSite() {
  alert("Coming soon...");
  // You could redirect or animate here later
}

window.onload = typeWriter;
