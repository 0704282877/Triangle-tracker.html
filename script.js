// Triangle tracker

function triangles() {

  var sides = [];

  var a = parseInt(document.getElementById('side1').value);
  var b = parseInt(document.getElementById('side2').value);
  var c = parseInt(document.getElementById('side3').value);
  var display = document.querySelector("#display");


  if ((a + b > c) && (b + c > a) && (a + c > b)) {

    if (a == b && a == c && b == c) {
      display.innerHTML = "Equilateral: All sides are equal!"
    } else if (a == b || a == c || b == c) {
      display.innerHTML = "Isosceles: Exactly 2 sides are equal."
    } else {
      display.innerHTML = "Scalene: No sides are equal."
    }

  } else {
    display.innerHTML = "NOT a triangle."

  }


}

// Reload page
function reset() {
  location.reload();
}
