document.getElementById("myButton").addEventListener("click", function() {
    var myContent = document.getElementById("myContent");
    if (myContent.style.display === "none") {
        myContent.style.display = "block";
    } else {
        myContent.style.display = "none";
    }
});
