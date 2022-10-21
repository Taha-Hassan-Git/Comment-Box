const comment = document.getElementById("comment");
const name = document.getElementById("name");
const email = document.getElementById("email");
const commentSection = document.getElementById("commentsection");
const userComments = document.getElementById("userComments");
const submitButton = document.getElementById("submit");
newCommentData = {name:"", email:"", comment:""};

function myFunction() {
    const commentLength = comment.value.length;
    const nameLength = name.value.length;
    const emailLength = email.value.length;
    const tracker = document.getElementById("tracker");
    tracker.innerHTML = "(" + commentLength + "/140)"
    tracker.style.color = "black"
    comment.style.background = "white"
    submitButton.disabled = false;
    if (commentLength > 140) {
        tracker.innerHTML += "<br> Woah! You're over the limit buddy!"
        tracker.style.color = "red"
        comment.style.background = "rgba(245, 149, 149, 0.5)"
        submitButton.disabled = "disabled";
    } else if (commentLength == 0 || nameLength == 0 || emailLength == 0) {
        submitButton.disabled = "disabled"

    } else {

    }
}

//Could introduce a feature that warns users they have left blank fields
//when they try and fail to submit a comment.
function handleSubmit() {
    //Creating the elements we need for the comment
    const newDiv = document.createElement("div");
    const newName = document.createElement("h1");
    const newEmail = document.createElement("h1");
    const newComment = document.createElement("p");
    //setting the text of the inputs to the relevant elements
    newName.innerHTML = "Name: " + name.value;
    newEmail.innerHTML = "Email: " + email.value;
    newComment.innerHTML = comment.value;
    //putting in the class and id fields for styling
    newDiv.id = "newcomments"
    newDiv.classList.add("card");
    newName.id = "info"
    newName.classList.add("text");
    newEmail.id = "info"
    newEmail.classList.add("text");
    newComment.id = "commenttext";
    newComment.classList.add("text");
    //appending elements to the div
    newDiv.appendChild(newName);
    newDiv.appendChild(newEmail);
    newDiv.appendChild(newComment);
    //inserting them in the correct part of the document
    commentSection.insertBefore(newDiv, userComments);
    name.value = "";
    email.value = "";
    comment.value = "";
    //this clears the character counter
    myFunction();
}