const clock = document.querySelector(".clock_ex");

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

var AMPM = "AM";

const days = ["SUN", "MON", "WED", "TUE", "THU", "FRI", "SAT"];
function getTime() {
  const date = new Date();
  var Hours = date.getHours(),
    Minutes = date.getMinutes(),
    Seconds = date.getSeconds(),
    Month = months[date.getMonth()],
    _date = date.getDate(),
    Day = days[date.getDay()];

  if (Hours >= 12) {
    if (Minutes > 0 && Seconds > 0) {
      AMPM = "PM";
      Hours -= 12;
    } else {
      AMPM = "AM";
    }
  } else {
    AMPM = "AM";
  }

  clock.innerHTML = `${Month} ${_date} (${Day}) - ${AMPM} ${Hours}:${
    Minutes >= 10 ? `${Minutes}` : `0${Minutes}`
  }:${Seconds >= 10 ? `${Seconds}` : `0${Seconds}`}`;
}
//   : ${ Seconds >= 10 ? `${Seconds}` : `0${Seconds}` }
// Mon Date Day - AM/PM H:MM:SS

function init() {
  getTime();
  // milliseconds 기준
  setInterval(getTime, 1000);
}

init();
