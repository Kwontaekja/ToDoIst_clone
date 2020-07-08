const form = document.querySelector(".name");
const inputName = form.querySelector(".inputName");
const user = document.querySelector(".user");

const nameKey = "currentUserName";
const enrolled = "enrolled";

function showingUser(name) {
  form.classList.add(enrolled);
  user.innerHTML = `Hello ${name}`;
}

function handleSubmit(event) {
  // 페이지 새로고침 방지
  event.preventDefault();
  localStorage.setItem(nameKey, inputName.value);
  showingUser(localStorage.getItem(nameKey));
}

function enrollUser() {
  form.classList.remove(enrolled);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(nameKey);

  if (currentUser === null) {
    enrollUser();
  } else {
    showingUser(currentUser);
  }
}

function init() {
  loadName();
}

init();
