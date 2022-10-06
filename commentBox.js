

function myFunction() {
    const comment = document.getElementById("comment");
    const commentLength = comment.value.length;
    const tracker = document.getElementById("tracker");
    tracker.innerHTML = "(" + commentLength.toString() + "/140)"
    if (commentLength > 140) {
        tracker.innerHTML += " Woah! You're over the limit buddy!"
    } else {

    }
}

