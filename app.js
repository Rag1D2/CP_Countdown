// COUNTDOWN TIMER
let releaseDate = new Date("Nov 19, 2020 00:00:00").getTime();

function countdown() {
  let now = new Date().getTime();
  let timeGap = releaseDate - now;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let d = Math.floor(timeGap / (days));
  let h = Math.floor((timeGap % (days)) / (hours));
  let m = Math.floor((timeGap % (hours)) / (minutes));
  let s = Math.floor((timeGap % (minutes)) / seconds);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
}

setInterval(() => {
  countdown();
}, 1000);

// IMG DISPLAY
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

imgs[0].style.opacity = opacity;

imgs.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  // reset opacity
  imgs.forEach((img) => (img.style.opacity = 1));
  // change current img src to clicked img
  current.src = e.target.src;
  // add fadeIn class
  current.classList.add("fade-in");
  // remove fade-in class after 0.5s
  setTimeout(() => current.classList.remove("fade-in"), 500);
  // change opacity to opacity var
  e.target.style.opacity = opacity;
}

// VIDEO DISPLAY
