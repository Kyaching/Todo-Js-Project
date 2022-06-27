const userText = document.querySelector(".user-text");
const addButton = document.querySelector(".add-button");
const displayText = document.querySelector(".show-output");
const deleteButton = document.querySelector(".delete");
const editButton = document.querySelector(".edit-button");


// add text
addButton.addEventListener('click',e =>{
    e.preventDefault();
    formValidation();
});

deleteButton.addEventListener('click', () =>{
    deleteText();
})

editButton.addEventListener('click', () =>{
    userText.contentEditable = true;
    userText.style.backgroundColor = "#121212";
})

let formValidation = () =>{
    if(userText.value ===''){
        displayText.innerHTML = "sorry!";
    }else{
        acceptData();
    }
}

let data = {};

let acceptData = () =>{
    data ["text"] = userText.value;
    console.log(data);
    createPost();
}

let createPost = () => {
    displayText.innerHTML += `<div class="show-output">${data.text}</div>
    <button class="delete">DEL</button>`;
    userText.value = '';
}

let deleteText = () => {
    displayText.innerHTML = '';
}