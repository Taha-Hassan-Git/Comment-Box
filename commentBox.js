

function myFunction() {
    const comment = document.getElementById("comment");
    const commentLength = comment.value.length;
    const tracker = document.getElementById("tracker");
    console.log(commentLength);
    tracker.innerHTML = "(" + commentLength.toString() + "/140)"
    if (commentLength > 140) {

    } else {

    }
}

