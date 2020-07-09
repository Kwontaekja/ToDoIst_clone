const form_toDo = document.querySelector(".form_toDo");
const input_toDo = form_toDo.querySelector(".input_toDo");
const list_toDo = document.querySelector(".list_toDo");

const toDoList_key = "toDoList";

let idx = 0;
let arr_toDo = [];

function remove_toDo(event) {
  const target = event.target;
  const li = target.parentNode;
  list_toDo.removeChild(li);

  //   arr_toDo.remove(li.querySelector("span").innerText);
  let index = arr_toDo.indexOf(li.querySelector("span").innerText);
  arr_toDo.splice(index, 1);
  // arr_toDo.filter(function (el) {
  //   return el !== null;
  // });

  idx--;
}

function add_toDo() {
  event.preventDefault();
  if (input_toDo.value !== "") {
    arr_toDo[idx] = input_toDo.value;
    localStorage.setItem(toDoList_key, JSON.stringify(arr_toDo));
    //입력창 비우기
    input_toDo.value = "";
    idx++;

    show_toDo();
  }
}

function show_toDo() {
  let loaded_toDo = JSON.parse(localStorage.getItem(toDoList_key));

  list_toDo.innerHTML = "";

  if (loaded_toDo !== null) {
    let i = 0;
    loaded_toDo.forEach(function () {
      if (!(i === idx) && arr_toDo[i] !== "") {
        const li = document.createElement("li");
        const chkbox = document.createElement("input");
        chkbox.type = "checkbox";
        const span = document.createElement("span");

        chkbox.addEventListener("click", remove_toDo);
        //chkbox.innerText = "🙆‍♂️";
        span.innerText = arr_toDo[i];
        i++;

        li.appendChild(span);
        li.appendChild(document.createTextNode(" "));
        li.appendChild(chkbox);

        list_toDo.appendChild(li);
      }
    });
  }
}

function init() {
  form_toDo.addEventListener("submit", add_toDo);
}

init();
