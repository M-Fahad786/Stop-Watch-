// Targeting Elements From DOM

let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");
let millisecond = document.getElementById("mi-sec");

// Declaring Variables

let hrs = 0;
let mins = 0;
let secs = 0;
let millisecs = 0;
let interval;
let start_btn = document.getElementById("start-btn");

// Creating setInterval Function
const timer = () => {
  millisecs++;
  millisecond.innerHTML = millisecs;
  if (millisecs >= 100) {
    secs++;
    seconds.innerHTML = secs;
    millisecs = 0;
  } else if (secs >= 60) {
    mins++;
    minutes.innerHTML = mins;
    secs = 0;
  } else if (mins >= 60) {
    hrs++;
    hours.innerHTML = hrs;
    mins = 0;
  }
};

// Creating Start Function

const start = () => {
  start_btn.disabled = true;
  start_btn.style.cursor = "default";
  start_btn.style.opacity = "0.5";
  interval = setInterval(timer, 10);
};

// Creating Pause Function

const pause = () => {
  clearInterval(interval);
  start_btn.disabled = false;
  start_btn.style.opacity = "1";
  start_btn.style.cursor = "pointer";
};

// Creating Reset Function

const reset = () => {
  millisecs = 0;
  secs = 0;
  mins = 0;
  hrs = 0;
  millisecond.innerHTML = millisecs;
  seconds.innerHTML = secs;
  minutes.innerHTML = mins;
  hours.innerHTML = hrs;
  pause();
};
