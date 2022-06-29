/**
 * ****************************************
 *  TODO task app using Vanilla Javascipt *
 * ****************************************
 */

// DOM elements selector
const inputTask = document.querySelector(".user-text");
const addButton = document.querySelector(".add-button");
const display = document.getElementById("post");
const popUp = document.querySelector(".popup");

// Adding task using button
addButton.addEventListener("click", (e) => {
  e.preventDefault();
  formValidation();
});

// Validate user input data
let formValidation = () => {
  if (inputTask.value === "") {
    popUp.style.display = "block";

    // Warning will pop up
    popUp.innerHTML = "Task can't be blank!";

    // Waring will be automatically popdown after 1 second
    setTimeout(() => {
      popUp.style.display = "none";
    }, 1000);
  } else {
    acceptData();
  }
};

// array of months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Creating Date object
const d = new Date();

// getting day, month & year object property
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

// Creating Empty data Object
let data = {};

// Taking data from user
let acceptData = () => {
  data["text"] = inputTask.value;
  createTask();
};

// Show user input in DOM
let createTask = () => {
  display.innerHTML += `<div class="posts">
  <p>${data.text}</p>
  <sup><span class="calender">${date} ${month} ${year}</span></sup>
  <span class="options">
    <i onClick="editTask(this)" class="fas fa-edit"></i>
    <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
  </span>
</div>`;
  inputTask.value = "";
};

// Delete task
let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
};

// Edit task
let editTask = (e) => {
  inputTask.value =
    e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
