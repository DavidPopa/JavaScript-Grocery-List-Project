"use strict";
const inputText = document.querySelector("#txt");
const btn = document.querySelector(".btn-list");
const list = document.querySelector(".container");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputText.value != "") {
    //create li
    const myLi = document.createElement("li");
    myLi.innerHTML = inputText.value;
    list.appendChild(myLi);

    //create span
    const span = document.createElement("span");
    span.innerHTML = "x";
    // ul.appendChild(span);
    myLi.appendChild(span);
  }
  inputText.value = "";
  const close = document.querySelectorAll("span");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", () => {
      setTimeout(() => {
        close[i].parentElement.remove();
      }, 500);
    });
  }
});
