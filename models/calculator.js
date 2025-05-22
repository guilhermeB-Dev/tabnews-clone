function somar(num1, num2) {
  if (typeof num1 !== "number") {
    return "Error";
  }

  return num1 + num2;
}

exports.somar = somar;
