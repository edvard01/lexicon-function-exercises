function greeting() {
  console.log("Hello, my friend!");
}

function nameGreet(name) {
  console.log(`Hello, ${name}. Nice to meet you!`);
}

function addition(number1, number2) {
  if (!isNaN(number1) && !isNaN(number2)) {
    return number1 + number2;
  } else {
    return "no valid inputs";
  }
}

let sumAdd = addition(12, 3);
console.log(sumAdd);

function division(number1, number2) {
  if (!isNaN(number1) && !isNaN(number2) && number1 != 0 && number2 != 0) {
    return number1 / number2;
  } else {
    return "one or more inputs is not valid";
  }
}

let sumDiv = division(12, 3);
console.log(sumDiv);

function area(length, width) {
  if (!isNaN(width) && !isNaN(length)) {
    return width * length;
  } else {
    return "no valid inputs";
  }
}

function concatGreeting(fName, lName) {
  let greeting = `Hello, ${fName} ${lName}! How are you doing?`;
  return greeting;
}

function kmToMile(km) {
  let koef = 1.609344;
  if (!isNaN(km)) {
    return km / koef;
  } else {
    return "No valid input";
  }
}
