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
