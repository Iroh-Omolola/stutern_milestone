let myFunction = () => {
    var x = document.getElementById("msg");
    x.className = "show";
    setTimeout(function() {
        x.className =
            x.className.replace("show", "");
    }, 3000);
}
myFunction();