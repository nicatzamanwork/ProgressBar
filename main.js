var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("Bar");
    var width = 1;
    var id = setInterval(frame, 100);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
