const text = "Something strange is coming...";
let i = 0;
const speed = 70;

function typeWriter() {
  const element = document.getElementById("typewriter");
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Add blinking cursor at the end
    element.innerHTML += '<span class="cursor">|</span>';
  }
}

function notifyMe() {
  const email = prompt("Enter your email to be notified:");
  if (email) {
    alert("Thanks! We'll keep you updated.");
    // Email handling or backend logic can go here
  }
}

function enterSite() {
  alert("Coming soon...");
  // Or window.location.href = "somepage.html";
}

window.onload = typeWriter;
