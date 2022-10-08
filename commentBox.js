

function myFunction() {
    const comment = document.getElementById("comment");
    const commentLength = comment.value.length;
    const tracker = document.getElementById("tracker");
    tracker.innerHTML = "(" + commentLength.toString() + "/140)"
    tracker.style.color = "black"
    comment.style.background = "white"
    if (commentLength > 140) {
        tracker.innerHTML += "<br> Woah! You're over the limit buddy!"
        tracker.style.color = "red"
        comment.style.background = "rgba(245, 149, 149, 0.5)"
    } else {

    }
}

