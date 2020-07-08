const clock = document.querySelector(".clock");

function getTime() {
  const date = new Date();
  const Hours = date.getHours(),
    Minutes = date.getMinutes(),
    Seconds = date.getSeconds();
  clock.innerHTML = `${Hours >= 10 ? `${Hours}` : `0${Hours}`}:${
    Minutes >= 10 ? `${Minutes}` : `0${Minutes}`
  }:${Seconds >= 10 ? `${Seconds}` : `0${Seconds}`}`;
}

function init() {
  getTime();
  // milliseconds 기준
  setInterval(getTime, 1000);
}

init();
