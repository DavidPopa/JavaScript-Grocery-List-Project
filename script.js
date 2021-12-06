"use strit";
const btn = document.getElementById("btn");
const inputTxt = document.getElementById("inputTxt");
const allItems = document.getElementById("allItems");

btn.addEventListener("click", function (e) {
  if (inputTxt.value != "") {
    e.preventDefault();
    const li = document.createElement("li");
    li.innerHTML = inputTxt.value;
    allItems.appendChild(li);
    inputTxt.value = "";
  }
});
