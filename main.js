const clcikedClassName = "clicked";

const title = document.querySelector(".main_greeting");

function titleClickHandler() {
  const unclicked = !title.classList.contains(clcikedClassName);

  if (unclicked) {
    title.classList.add(clcikedClassName);
  } else {
    title.classList.remove(clcikedClassName);
  }
}

title.addEventListener("clcik", titleClickHandler);
