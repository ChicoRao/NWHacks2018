function test() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "gethint.php?q=" + str, true);
    xmlhttp.send();
}