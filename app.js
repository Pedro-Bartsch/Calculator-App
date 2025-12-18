const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  let addition = display.value.indexOf("+");
  let subtraction = display.value.indexOf("-");
  let multiplication = display.value.indexOf("*");
  let division = display.value.indexOf("/");

  if (addition != -1) {
    if (display.value.indexOf(".") != -1) {
      var operation =
        parseFloat(display.value.slice(0, addition)) +
        parseFloat(display.value.slice(addition + 1));
      display.value = operation;
    } else if (display.value.indexOf(".") == -1) {
      var operation =
        parseInt(display.value.slice(0, addition)) +
        parseInt(display.value.slice(addition + 1));
      display.value = operation;
    }
  } else if (subtraction != -1) {
    if (display.value.indexOf(".") != -1) {
      var operation =
        parseFloat(display.value.slice(0, subtraction)) -
        parseFloat(display.value.slice(subtraction + 1));
      display.value = operation;
    } else if (display.value.indexOf(".") == -1) {
      var operation =
        parseInt(display.value.slice(0, subtraction)) -
        parseInt(display.value.slice(subtraction + 1));
      display.value = operation;
    }
  } else if (multiplication != -1) {
    if (display.value.indexOf(".") != -1) {
      var operation =
        parseFloat(display.value.slice(0, multiplication)) *
        parseFloat(display.value.slice(multiplication + 1));
      display.value = operation;
    } else if (display.value.indexOf(".") == -1) {
      var operation =
        parseInt(display.value.slice(0, multiplication)) *
        parseInt(display.value.slice(multiplication + 1));
      display.value = operation;
    }
  } else if (division != -1) {
    if (display.value.indexOf("0") != -1) {
      if (display.value.indexOf(".") != -1) {
        var operation =
          parseFloat(display.value.slice(0, division)) /
          parseFloat(display.value.slice(division + 1));
        display.value = operation;
      } else if (display.value.indexOf(".") == -1) {
        var operation =
          parseInt(display.value.slice(0, division)) /
          parseInt(display.value.slice(division + 1));
        display.value = operation;
      }
    } else {
      display.value = "Divisão by 0";
    }
  }
}
