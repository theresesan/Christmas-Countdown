const style = document.createElement("style");
style.textContent = `
  p {
    color: red;
  }

  body {
    background-color: red;
  }
`;

document.head.appendChild(style);

// querySelector() returns the first Element within the document that matches the specified selector
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minsEl = document.querySelector("#mins");
const secondsEl = document.querySelector("#seconds");

const christmas = "24 Dec 2023";

const countdown = () => {
  // Using the date constructor
  /*The expression new Date() is a method that returns the current time in internal format. 
  When no parameters are provided, the newly-created Date object represents the current date and 
  time.*/
  const chrismasDate = new Date(christmas);
  const currentDate = new Date();

  const totalSeconds = (chrismasDate - currentDate) / 1000;
  // Math.floor rounds down and returns the largest integer less than, or equal to the given number
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.textContent = formatTime(days);
  hoursEl.textContent = formatTime(hours);
  minsEl.textContent = formatTime(mins);
  secondsEl.textContent = formatTime(seconds);
};

/*Got stuck at this, a bunch of googeling and not sure how it work´s to be honest. Added the 0 before the 
template literal to get it right when the number is just on number. And the template literal to get the
time parameter in the return statement*/
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

countdown();

setInterval(countdown, 1000);
