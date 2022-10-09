const comment = document.getElementById("comment");
const name = document.getElementById("name");
const email = document.getElementById("email");
newCommentData = {name:"", email:"", comment:""};

function myFunction() {
    const commentLength = comment.value.length;
    const tracker = document.getElementById("tracker");
    tracker.innerHTML = "(" + commentLength + "/140)"
    tracker.style.color = "black"
    comment.style.background = "white"
    if (commentLength > 140) {
        tracker.innerHTML += "<br> Woah! You're over the limit buddy!"
        tracker.style.color = "red"
        comment.style.background = "rgba(245, 149, 149, 0.5)"
    } else {

    }
}

function handleSubmit() {
    newCommentData.name = name.value;
    newCommentData.email = email.value;
    newCommentData.comment = comment.value;
}
 
/* function handleSubmit() {
    const commentSection = document.getElementById("commentsection");
    const userComments = document.getElementById("userComments");
    const newDiv = document.createElement("div");
    newComment = document.createTextNode(comment.value);
    newName = document.createTextNode("/n" + name.value);
    newDiv.id = "newcomments"
    newDiv.classList.add("card");
    newDiv.appendChild(newComment);
    newDiv.appendChild(newName);
    commentSection.insertBefore(newDiv, userComments);
    comment.value = ""
    myFunction()
}
 */