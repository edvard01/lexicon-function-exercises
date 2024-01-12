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

function celcToFahr(temp) {
  if (!isNaN(temp)) {
    return temp * 1.8 + 32;
  } else {
    return "no valid input";
  }
}

function meanVal(array) {
  let sum = 0;
  array.forEach((element) => {
    if (!isNaN(element)) {
      sum += element;
    }
  });

  return sum / array.length;
}

let arr = [5, 15];

console.log(meanVal(arr));

function bolaget(age) {
  if (age < 15) {
    return "Get out of here!";
  } else if (age > 14 && age < 18) {
    return "Sorry, you are not old enough!";
  } else if (age > 17 && age < 20) {
    return "Sorry, you must be at least 20. Why don't you try a bar instead?";
  } else if (age > 19 && age < 81) {
    return "Thank you! Welcome!";
  } else if (age > 80) {
    return "I'm sorry! Where is your caretaker?";
  } else {
    return "You do not exist...";
  }
}

function sumOfTen(arr) {
  if (arr.length !== 10) {
    return "Array must be 10 values long!";
  }

  let sum = 0;
  arr.forEach((element) => {
    if (!isNaN(element)) {
      sum += element;
    }
  });

  return sum;
}

let sumArray = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

console.log(sumOfTen(sumArray));
