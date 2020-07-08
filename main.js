const clcikedClassName = "clicked";

const title = document.querySelector(".main_greeting");

function titleClickHandler() {
  const unclicked = !title.classList.contains(clcikedClassName);

  //   아래와 같이 toggle function으로 한번에 처리가 가능하다
  //   if (unclicked) {
  //     title.classList.add(clcikedClassName);
  //   } else {
  //     title.classList.remove(clcikedClassName);
  //   }

  title.classList.toggle(clcikedClassName);
}

title.addEventListener("click", titleClickHandler);

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
}

init();

// milliseconds 기준
setInterval(getTime, 1000);
