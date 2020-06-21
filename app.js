let countDownDate = new Date("Nov 19, 2020 00:00:00").getTime();

function releaseDate() {
  let now = new Date().getTime();
  let timeGap = countDownDate - now;

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
  releaseDate();
}, 1000);
